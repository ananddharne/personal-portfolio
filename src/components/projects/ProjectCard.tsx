import Image from 'next/image'
import type { Project } from '@/lib/types'

const PREVIEW_IMAGES = [
  'https://picsum.photos/seed/proj1/800/450',
  'https://picsum.photos/seed/proj2/800/450',
  'https://picsum.photos/seed/proj3/800/450',
  'https://picsum.photos/seed/proj4/800/450',
]

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const href = project.liveUrl ?? project.githubUrl

  if (project.featured) {
    return (
      <div
        className="group"
        style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
      >
        {/* Image */}
        <div className="relative overflow-hidden w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src={PREVIEW_IMAGES[index] ?? PREVIEW_IMAGES[0]}
            alt={`${project.title} preview`}
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Content */}
        <div style={{ padding: '28px 32px' }}>
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
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--accent)',
                  textDecoration:'none',
                  letterSpacing: '0.04em',
                  flexShrink:    0,
                  marginTop:     '2px',
                }}
              >
                View ↗
              </a>
            )}
          </div>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '14px',
              lineHeight:   1.75,
              color:        'var(--text-muted)',
              marginBottom: '20px',
              maxWidth:     '72ch',
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
                  letterSpacing: '0.05em',
                  border:        '1px solid var(--border)',
                  padding:       '3px 9px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Regular card
  return (
    <div
      className="group h-full transition-colors duration-200 hover:border-[var(--accent)]"
      style={{
        border:     '1px solid var(--border)',
        background: 'var(--surface)',
        padding:    '24px',
      }}
    >
      <div className="flex items-start justify-between mb-5">
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
            aria-label={`Open ${project.title}`}
            className="transition-colors hover:text-[var(--accent)]"
            style={{
              color:          'var(--text-subtle)',
              fontSize:       '14px',
              textDecoration: 'none',
            }}
          >
            ↗
          </a>
        )}
      </div>

      <h3
        style={{
          fontFamily:   'var(--font-sans)',
          fontSize:     '17px',
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
