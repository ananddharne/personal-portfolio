import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/content'

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)]">
        <ScrollReveal>
          <SectionLabel>Projects</SectionLabel>
          <h2
            className="font-serif font-bold tracking-[-0.02em] mt-2 mb-8"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text)' }}
          >
            Selected work.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
