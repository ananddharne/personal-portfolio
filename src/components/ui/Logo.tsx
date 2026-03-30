export function Logo() {
  return (
    <div className="relative inline-flex items-center justify-center w-9 h-9 border border-[var(--text)]">
      <span
        className="font-serif text-base font-bold tracking-tight"
        style={{ color: 'var(--text)' }}
      >
        ad
      </span>
      {/* Amber corner accent */}
      <span
        className="absolute bottom-0 right-0 w-2 h-2"
        style={{ background: 'var(--accent)', transform: 'translate(1px, 1px)' }}
      />
    </div>
  )
}
