import { HeroName } from './HeroName'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { bio } from '@/lib/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="py-16 md:py-24 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)]">
        {/* Top meta row */}
        <p
          className="text-[9px] uppercase tracking-[0.14em] mb-4"
          style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}
        >
          Portfolio — 2026
        </p>

        {/* Name */}
        <HeroName name={bio.name.split(' ')[0]} />

        {/* Divider */}
        <div className="my-5 h-px w-full" style={{ background: 'var(--border)' }} />

        {/* Bottom row */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              {bio.tagline}
            </p>
            <div className="flex gap-5 items-center">
              <a
                href="#projects"
                className="text-[11px] underline underline-offset-3 transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--accent)' }}
              >
                View work ↓
              </a>
              <span style={{ color: 'var(--border)' }}>·</span>
              <a
                href="#contact"
                className="text-[11px] underline underline-offset-3 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
