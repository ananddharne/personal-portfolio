import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ExperienceItem } from './ExperienceItem'
import { experience } from '@/lib/content'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-20 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)]">
        <ScrollReveal>
          <SectionLabel>Experience</SectionLabel>
          <h2
            className="font-serif font-bold tracking-[-0.02em] mt-2 mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text)' }}
          >
            Where I&apos;ve worked.
          </h2>
        </ScrollReveal>
        {experience.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.08}>
            <ExperienceItem item={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
