import { ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/types'

export function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured

  return (
    <div
      className={`group relative border p-5 transition-all duration-200 cursor-default
        hover:border-[var(--accent)] hover:-translate-y-0.5
        ${isFeatured ? 'col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center' : ''}`}
      style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
    >
      {/* Content */}
      <div>
        <p className="text-[9px] tracking-[0.1em] mb-2" style={{ color: 'var(--text-subtle)' }}>
          {project.num}
        </p>
        <h3
          className="font-serif font-bold tracking-[-0.01em] leading-tight mb-2"
          style={{ fontSize: isFeatured ? 'clamp(20px, 2.5vw, 26px)' : '18px', color: 'var(--text)' }}
        >
          {project.title}
        </h3>
        <p className="text-[11px] leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[9px] px-1.5 py-0.5 tracking-wide"
              style={{ background: 'var(--accent-light)', color: 'var(--accent-text)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Featured visual OR external link icon */}
      {isFeatured ? (
        <div
          className="aspect-video flex items-center justify-center text-[10px] tracking-widest uppercase"
          style={{
            background: 'linear-gradient(135deg, var(--accent-light), var(--bg))',
            color: 'var(--text-subtle)',
            border: '1px solid var(--border)',
          }}
        >
          Preview
        </div>
      ) : (
        (project.liveUrl || project.githubUrl) && (
          <a
            href={project.liveUrl ?? project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute top-4 right-4 transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-subtle)' }}
          >
            <ExternalLink size={14} />
          </a>
        )
      )}
    </div>
  )
}
