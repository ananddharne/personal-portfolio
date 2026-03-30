import Anthropic from '@anthropic-ai/sdk'
import { headers } from 'next/headers'
import { checkRateLimit } from '@/lib/rateLimit'
import { chatSystemPrompt } from '@/lib/content'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const MAX_MESSAGE_LENGTH = 500
const MAX_TURNS = 10

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

export async function POST(req: Request) {
  // Rate limiting
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return new Response('Rate limit exceeded. Try again later.', { status: 429 })
  }

  let body: { messages: { role: string; content: string }[] }
  try {
    body = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const { messages } = body

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('messages array required', { status: 400 })
  }

  if (messages.length > MAX_TURNS * 2) {
    return new Response('Conversation too long.', { status: 400 })
  }

  const lastMessage = messages[messages.length - 1]
  if (!lastMessage?.content || lastMessage.content.length > MAX_MESSAGE_LENGTH) {
    return new Response(`Message must be 1–${MAX_MESSAGE_LENGTH} characters.`, { status: 400 })
  }

  // Sanitize user messages
  const sanitized = messages.map(m => ({
    role: m.role as 'user' | 'assistant',
    content: m.role === 'user' ? stripHtml(m.content) : m.content,
  }))

  // Stream response from Claude
  const stream = await client.messages.stream({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    system: chatSystemPrompt,
    messages: sanitized,
  })

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === 'content_block_delta' &&
          chunk.delta.type === 'text_delta'
        ) {
          controller.enqueue(new TextEncoder().encode(chunk.delta.text))
        }
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  })
}
