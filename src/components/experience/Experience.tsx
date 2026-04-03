import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ExperienceItem } from './ExperienceItem'
import { experience } from '@/lib/content'

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        borderTop:    '1px solid var(--border)',
        paddingTop:   '80px',
        paddingBottom:'100px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        <ScrollReveal>
          <SectionLabel num="02">Experience</SectionLabel>
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
            Where I&apos;ve worked.
          </h2>
        </ScrollReveal>

        <div>
          {experience.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.06}>
              <ExperienceItem item={item} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
