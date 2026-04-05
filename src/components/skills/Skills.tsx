import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SkillGroup } from './SkillGroup'
import { skillGroups } from '@/lib/content'

export function Skills() {
  return (
    <section
      id="skills"
      style={{ borderTop: '1px solid var(--border)', paddingTop: '80px', paddingBottom: '100px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        <ScrollReveal>
          <SectionLabel num="04">Skills</SectionLabel>
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
            The toolkit.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.06}>
              <SkillGroup group={group} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
