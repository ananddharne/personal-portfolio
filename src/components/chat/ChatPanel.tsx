'use client'
import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { TypingIndicator } from './TypingIndicator'

interface Message { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'Tell me about his projects',
  'Why hire Anand?',
  'Backend experience?',
  "What's he looking for?",
]

const WELCOME: Message = {
  role: 'assistant',
  content: "Hi! I'm Anand's AI assistant. Ask me anything about his experience, projects, or what he's looking for in a role.",
}

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send(text: string) {
    if (!text.trim() || loading) return
    const userMessage: Message = { role: 'user', content: text }
    const history = [...messages.filter(m => m !== WELCOME), userMessage]
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })

      if (!res.ok) {
        const errText = await res.text()
        setMessages(prev => [...prev, { role: 'assistant', content: errText || 'Something went wrong. Try again.' }])
        return
      }

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()
      let assistantMsg = ''
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantMsg += decoder.decode(value, { stream: true })
        setMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: assistantMsg },
        ])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const showSuggestions = messages.length === 1

  return (
    <div
      className="flex flex-col overflow-hidden border"
      style={{
        width: 'min(300px, calc(100vw - 32px))',
        maxHeight: '480px',
        background: 'var(--bg)',
        borderColor: 'var(--border)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-3.5 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
        <div>
          <h4 className="text-xs font-semibold" style={{ color: 'var(--text)' }}>Ask about Anand</h4>
          <p className="text-[8px]" style={{ color: 'var(--text-subtle)' }}>AI assistant · professional questions only</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="transition-colors hover:text-[var(--accent)]"
          style={{ color: 'var(--text-subtle)', fontSize: '16px', lineHeight: 1 }}
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5" style={{ minHeight: '160px' }}>
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Suggestion chips */}
      {showSuggestions && (
        <div className="px-3 pb-2 flex flex-wrap gap-1.5">
          {SUGGESTIONS.map(s => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-[9px] border px-2 py-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg)' }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 px-3 py-2.5 border-t" style={{ borderColor: 'var(--border)' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send(input)}
          placeholder="Ask something..."
          className="flex-1 text-[10px] border px-2 py-1.5 outline-none bg-transparent"
          style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
        />
        <button
          onClick={() => send(input)}
          disabled={!input.trim() || loading}
          aria-label="Send"
          className="text-[10px] px-3 py-1.5 disabled:opacity-40 transition-opacity"
          style={{ background: 'var(--accent)', color: 'white' }}
        >
          →
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-[8px] text-center py-1.5 border-t" style={{ color: 'var(--text-subtle)', borderColor: 'var(--border)' }}>
        AI trained on Anand&apos;s professional background
      </p>
    </div>
  )
}
