import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/content'

export function Projects() {
  const featured    = projects.filter(p => p.featured)
  const notFeatured = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      style={{ borderTop: '1px solid var(--border)', paddingTop: '80px', paddingBottom: '100px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        <ScrollReveal>
          <SectionLabel num="03">Projects</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    400,
              fontStyle:     'italic',
              fontSize:      'clamp(30px, 4vw, 44px)',
              letterSpacing: '-0.025em',
              lineHeight:    1.15,
              color:         'var(--text)',
              marginBottom:  '3rem',
            }}
          >
            Projects
          </h2>
        </ScrollReveal>

        {/* Featured */}
        {featured.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.05}>
            <div style={{ marginBottom: '16px' }}>
              <ProjectCard project={project} />
            </div>
          </ScrollReveal>
        ))}

        {/* Grid */}
        {notFeatured.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '12px', marginTop: '12px' }}
          >
            {notFeatured.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
