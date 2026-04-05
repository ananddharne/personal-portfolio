'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ExperienceItem as TExperienceItem } from '@/lib/types'

export function ExperienceItem({ item }: { item: TExperienceItem }) {
  const [open, setOpen] = useState(false)
  const hasAccomplishments = item.accomplishments.length > 0

  return (
    <div
      style={{
        borderTop:    '1px solid var(--border)',
        paddingTop:   '28px',
        paddingBottom:'28px',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 mb-4">

        {/* Period — left on desktop */}
        <div
          style={{ flexShrink: 0, minWidth: '120px' }}
        >
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '11px',
              color:         'var(--text-subtle)',
              letterSpacing: '0.04em',
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Role + company */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '18px',
              fontWeight:   600,
              letterSpacing:'-0.01em',
              color:        'var(--text)',
              lineHeight:   1.25,
              marginBottom: '4px',
            }}
          >
            {item.role}
          </h3>
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '12px',
              color:         'var(--accent)',
              letterSpacing: '0.02em',
              marginBottom:  '14px',
            }}
          >
            {item.company}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   '18px',
              lineHeight: 1.75,
              color:      'var(--text-muted)',
              maxWidth:   '64ch',
            }}
          >
            {item.description}
          </p>

          {hasAccomplishments && (
            <>
              <button
                onClick={() => setOpen(o => !o)}
                style={{
                  marginTop:     '14px',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--text-subtle)',
                  letterSpacing: '0.05em',
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '6px',
                  background:    'none',
                  border:        'none',
                  cursor:        'pointer',
                  padding:       0,
                  transition:    'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
              >
                {open ? '− Hide highlights' : '+ Key highlights'}
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden', marginTop: '16px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    {item.accomplishments.map((a, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize:   '16px',
                          lineHeight: 1.65,
                          color:      'var(--text-muted)',
                          paddingLeft:'16px',
                          position:   'relative',
                        }}
                      >
                        <span
                          style={{
                            position:   'absolute',
                            left:       0,
                            top:        '0.6em',
                            width:      '6px',
                            height:     '1px',
                            background: 'var(--accent)',
                            display:    'inline-block',
                          }}
                        />
                        {a}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
