'use client'
import { motion } from 'framer-motion'
import { bio } from '@/lib/content'

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight:      '90vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'flex-end',
        paddingBottom:  '80px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', width: '100%' }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '11px',
            color:         'var(--text-subtle)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom:  '2.5rem',
          }}
        >
          Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Full Stack&nbsp;&nbsp;·&nbsp;&nbsp;Open to roles
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily:    'var(--font-display)',
            fontWeight:    400,
            fontStyle:     'italic',
            fontSize:      'clamp(72px, 11vw, 148px)',
            lineHeight:    0.88,
            letterSpacing: '-0.03em',
            color:         'var(--text)',
            marginBottom:  '3.5rem',
          }}
        >
          Anand<br />Dharne
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width:      '100%',
            height:     '1px',
            background: 'var(--border)',
            marginBottom: '2.5rem',
          }}
        />

        {/* Bottom row: tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   '15px',
              lineHeight: 1.75,
              color:      'var(--text-muted)',
              maxWidth:   '48ch',
            }}
          >
            {bio.tagline}
          </p>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href="#projects"
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '12px',
                color:         'var(--text-muted)',
                textDecoration:'none',
                letterSpacing: '0.04em',
                transition:    'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              View work ↓
            </a>
            <a
              href={`mailto:${bio.email}`}
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '12px',
                color:         'var(--accent)',
                textDecoration:'none',
                letterSpacing: '0.04em',
                transition:    'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get in touch →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
