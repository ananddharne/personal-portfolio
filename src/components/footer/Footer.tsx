'use client'

export function Footer() {
  return (
    <footer
      className="py-5 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)] flex justify-between items-center">
        <p className="text-[10px]" style={{ color: 'var(--text-subtle)' }}>
          © 2026 Anand Dharne. Designed & built with care.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
          style={{ color: 'var(--text-muted)' }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
