import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { bio } from '@/lib/content'

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop:    '1px solid var(--border)',
        paddingTop:   '100px',
        paddingBottom:'120px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '640px' }}>

            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                color:         'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom:  '1.5rem',
              }}
            >
              05 / Contact
            </p>

            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    400,
                fontStyle:     'italic',
                fontSize:      'clamp(36px, 6vw, 72px)',
                letterSpacing: '-0.03em',
                lineHeight:    0.95,
                color:         'var(--text)',
                marginBottom:  '2rem',
              }}
            >
              Let&apos;s work<br />together.
            </h2>

            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '15px',
                lineHeight:   1.75,
                color:        'var(--text-muted)',
                marginBottom: '3rem',
                maxWidth:     '46ch',
              }}
            >
              I&apos;m actively looking for my next role. If you&apos;re building something
              interesting, I&apos;d love to hear about it.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={`mailto:${bio.email}`}
                className="transition-opacity hover:opacity-75"
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '13px',
                  color:         'var(--bg)',
                  letterSpacing: '0.05em',
                  padding:       '14px 28px',
                  background:    'var(--text)',
                  textDecoration:'none',
                  display:       'inline-block',
                }}
              >
                Send an email →
              </a>

              <div className="flex items-center gap-6">
                {[
                  { label: 'LinkedIn', href: bio.linkedin  },
                  { label: 'GitHub',   href: bio.github    },
                  { label: 'Resume',   href: bio.resumeUrl },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--text)]"
                    style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '11px',
                      color:         'var(--text-subtle)',
                      textDecoration:'none',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
