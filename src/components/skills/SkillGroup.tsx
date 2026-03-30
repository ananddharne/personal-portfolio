import type { SkillGroup as TSkillGroup } from '@/lib/types'

export function SkillGroup({ group }: { group: TSkillGroup }) {
  return (
    <div>
      <h4
        className="text-[9px] uppercase tracking-[0.14em] pb-2 mb-3 border-b"
        style={{ color: 'var(--text-subtle)', borderColor: 'var(--border)' }}
      >
        {group.category}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {group.skills.map(skill => (
          <span
            key={skill}
            className="text-[11px] px-2.5 py-1 border transition-all duration-150 cursor-default
              hover:border-[var(--accent)] hover:bg-[var(--accent-light)] hover:text-[var(--accent-text)]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
