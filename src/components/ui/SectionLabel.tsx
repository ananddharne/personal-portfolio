interface SectionLabelProps {
  num: string
  children: React.ReactNode
}

export function SectionLabel({ num, children }: SectionLabelProps) {
  return (
    <div
      className="flex items-center gap-4"
      style={{ marginBottom: '4rem' }}
    >
      <span
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '11px',
          color:         'var(--accent)',
          letterSpacing: '0.06em',
          flexShrink:    0,
        }}
      >
        {num}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      <span
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         'var(--text-subtle)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          flexShrink:    0,
        }}
      >
        {children}
      </span>
    </div>
  )
}
