import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { bio } from '@/lib/content'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)]">
        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h2
            className="font-serif font-bold tracking-[-0.02em] mt-2 mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text)' }}
          >
            Let&apos;s work together.
          </h2>
          <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--text-muted)' }}>
            I&apos;m actively looking for my next role. If you&apos;re building something interesting, I&apos;d love to hear about it.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={`mailto:${bio.email}`}
              className="text-[11px] px-4 py-2 tracking-wide transition-colors"
              style={{ background: 'var(--text)', color: 'var(--bg)', letterSpacing: '0.04em' }}
            >
              Send an email
            </a>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] underline underline-offset-3 transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              LinkedIn ↗
            </a>
            <a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] underline underline-offset-3 transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              GitHub ↗
            </a>
            <a
              href={bio.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] underline underline-offset-3 transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Resume ↓
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
