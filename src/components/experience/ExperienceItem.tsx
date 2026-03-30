'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ExperienceItem as TExperienceItem } from '@/lib/types'

export function ExperienceItem({ item }: { item: TExperienceItem }) {
  const [open, setOpen] = useState(false)
  const hasAccomplishments = item.accomplishments.length > 0

  return (
    <div
      className="grid grid-cols-[140px_1fr] gap-5 py-5 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Left: meta */}
      <div>
        <span
          className="block font-serif font-bold text-sm mb-1"
          style={{ color: 'var(--text)' }}
        >
          {item.period}
        </span>
        <span className="text-[10px]" style={{ color: 'var(--text-subtle)' }}>
          {item.type}
        </span>
      </div>

      {/* Right: content */}
      <div>
        <h3 className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text)' }}>
          {item.role}
        </h3>
        <p className="text-[11px] mb-2" style={{ color: 'var(--accent)' }}>
          {item.company}
        </p>
        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {item.description}
        </p>

        {hasAccomplishments && (
          <>
            <button
              onClick={() => setOpen(o => !o)}
              className="text-[10px] mt-2 underline underline-offset-2 transition-colors"
              style={{ color: 'var(--text-subtle)' }}
            >
              {open ? 'Hide accomplishments ↑' : 'Show accomplishments ↓'}
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mt-3 space-y-1.5 overflow-hidden"
                  style={{ listStyleType: 'none' }}
                >
                  {item.accomplishments.map((a, i) => (
                    <li
                      key={i}
                      className="text-[11px] leading-relaxed pl-3 relative"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span
                        className="absolute left-0 top-[0.45em]"
                        style={{ color: 'var(--accent)', fontSize: '8px' }}
                      >
                        ◆
                      </span>
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
  )
}
