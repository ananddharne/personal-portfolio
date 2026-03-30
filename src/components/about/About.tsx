import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { bio } from '@/lib/content'

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Text column */}
          <ScrollReveal>
            <SectionLabel>About</SectionLabel>
            <h2
              className="font-serif font-bold leading-tight tracking-[-0.02em] mt-2 mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text)' }}
            >
              Engineer by training,<br />builder by instinct.
            </h2>
            <div className="my-4 h-px w-8" style={{ background: 'var(--border)' }} />
            {bio.about.map((para, i) => (
              <p
                key={i}
                className="text-sm leading-[1.8] mb-3"
                style={{ color: 'var(--text-muted)' }}
              >
                {para}
              </p>
            ))}
          </ScrollReveal>

          {/* Photo column */}
          <ScrollReveal delay={0.15}>
            <div
              className="relative w-full border"
              style={{ aspectRatio: '4/5', borderColor: 'var(--border)' }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest"
                style={{ color: 'var(--text-subtle)', background: 'var(--bg-secondary)' }}
              >
                Photo
              </div>
              {/* Uncomment when photo is available:
              <Image
                src="/photo.jpg"
                alt="Anand Dharne"
                fill
                className="object-cover"
                priority={false}
              />
              */}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
