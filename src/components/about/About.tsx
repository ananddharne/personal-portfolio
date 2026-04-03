import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { bio } from '@/lib/content'

export function About() {
  return (
    <section
      id="about"
      style={{
        borderTop:    '1px solid var(--border)',
        paddingTop:   '80px',
        paddingBottom:'100px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        <ScrollReveal>
          <SectionLabel num="01">About</SectionLabel>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-20 items-start">

          {/* Text */}
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
                marginBottom:  '2rem',
              }}
            >
              Engineer by training,<br />builder by instinct.
            </h2>

            {bio.about.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily:   'var(--font-sans)',
                  fontSize:     '15px',
                  lineHeight:   1.8,
                  color:        'var(--text-muted)',
                  marginBottom: i < bio.about.length - 1 ? '1.25rem' : 0,
                }}
              >
                {para}
              </p>
            ))}
          </ScrollReveal>

          {/* Photo */}
          <ScrollReveal delay={0.15}>
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: '3/4',
                border:      '1px solid var(--border)',
              }}
            >
              <Image
                src="https://picsum.photos/seed/portrait42/600/800"
                alt="Anand Dharne"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
