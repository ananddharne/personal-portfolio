interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className="max-w-[85%] px-3 py-2 text-[11px] leading-relaxed"
        style={
          isUser
            ? { background: 'var(--text)', color: 'var(--bg)' }
            : { background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }
        }
      >
        {content}
      </div>
    </div>
  )
}
