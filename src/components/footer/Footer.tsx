'use client'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding:   '24px 0',
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}
      >
        <p
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--text-subtle)',
            letterSpacing: '0.05em',
          }}
        >
          © 2026 Anand Dharne
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--text-subtle)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background:    'none',
            border:        'none',
            cursor:        'pointer',
            transition:    'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
        >
          Top ↑
        </button>
      </div>
    </footer>
  )
}
