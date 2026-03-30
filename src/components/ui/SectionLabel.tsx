export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[9px] uppercase tracking-[0.16em] mb-1.5"
      style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}
    >
      {children}
    </p>
  )
}
