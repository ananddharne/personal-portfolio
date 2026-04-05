export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="px-3 py-2.5 border flex gap-1 items-center"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-1 h-1 rounded-full"
            style={{
              background: 'var(--text-subtle)',
              animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
