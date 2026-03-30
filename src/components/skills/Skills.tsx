import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SkillGroup } from './SkillGroup'
import { skillGroups } from '@/lib/content'

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)]">
        <ScrollReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2
            className="font-serif font-bold tracking-[-0.02em] mt-2 mb-8"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text)' }}
          >
            The toolkit.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.08}>
              <SkillGroup group={group} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
