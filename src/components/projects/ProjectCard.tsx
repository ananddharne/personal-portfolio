import type { Project } from '@/lib/types'

export function ProjectCard({ project }: { project: Project; index?: number }) {
  const href     = project.liveUrl ?? project.githubUrl
  const linkLabel = project.liveUrl ? 'View live ↗' : 'View on GitHub ↗'

  if (project.featured) {
    return (
      <div
        style={{ border: '1px solid var(--border)', background: 'var(--surface)', padding: '28px 32px' }}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         'var(--text-subtle)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom:  '8px',
              }}
            >
              Featured · {project.num}
            </p>
            <h3
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '20px',
                fontWeight:   600,
                letterSpacing:'-0.01em',
                color:        'var(--text)',
                lineHeight:   1.25,
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>

        <p
          style={{
            fontFamily:   'var(--font-sans)',
            fontSize:     '18px',
            lineHeight:   1.75,
            color:        'var(--text-muted)',
            marginBottom: '20px',
            maxWidth:     '72ch',
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         'var(--text-subtle)',
                letterSpacing: '0.05em',
                border:        '1px solid var(--border)',
                padding:       '3px 9px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '12px',
              color:         'var(--accent)',
              textDecoration:'none',
              letterSpacing: '0.04em',
            }}
          >
            {linkLabel}
          </a>
        )}
      </div>
    )
  }

  // Regular card
  return (
    <div
      className="group h-full flex flex-col transition-colors duration-200 hover:border-[var(--accent)]"
      style={{
        border:     '1px solid var(--border)',
        background: 'var(--surface)',
        padding:    '24px',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '11px',
            color:         'var(--text-subtle)',
            letterSpacing: '0.06em',
          }}
        >
          {project.num}
        </span>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '11px',
              color:         'var(--text-muted)',
              textDecoration:'none',
              letterSpacing: '0.04em',
            }}
          >
            {linkLabel}
          </a>
        )}
      </div>

      <h3
        style={{
          fontFamily:   'var(--font-sans)',
          fontSize:     '19px',
          fontWeight:   600,
          letterSpacing:'-0.01em',
          lineHeight:   1.3,
          color:        'var(--text)',
          marginBottom: '10px',
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontFamily:   'var(--font-sans)',
          fontSize:     '13px',
          lineHeight:   1.75,
          color:        'var(--text-muted)',
          marginBottom: '20px',
          flex:         1,
        }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '10px',
              color:         'var(--text-subtle)',
              letterSpacing: '0.04em',
              border:        '1px solid var(--border)',
              padding:       '2px 7px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
