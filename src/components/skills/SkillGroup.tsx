import type { SkillGroup as TSkillGroup } from '@/lib/types'

export function SkillGroup({ group }: { group: TSkillGroup }) {
  return (
    <div>
      <h4
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         'var(--text-subtle)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom:  '14px',
        }}
      >
        {group.category}
      </h4>
      <div className="flex flex-wrap gap-2">
        {group.skills.map(skill => (
          <span
            key={skill}
            className="cursor-default transition-colors duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '12px',
              color:         'var(--text-muted)',
              border:        '1px solid var(--border)',
              padding:       '5px 11px',
              letterSpacing: '0.02em',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
