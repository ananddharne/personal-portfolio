'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Work',       href: '#projects'   },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
]

export function Nav() {
  const [hidden, setHidden]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setHidden(y > lastY.current && y > 100)
      setScrolled(y > 20)
      lastY.current = y
    })
  }, [scrollY])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          height:       '56px',
          background:   scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition:   'background 0.3s, border-color 0.3s',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}
        >
          <a href="#" aria-label="Home" style={{ textDecoration: 'none' }}>
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--text)]"
                style={{
                  fontFamily:    'var(--font-sans)',
                  fontSize:      '13px',
                  fontWeight:    400,
                  color:         'var(--text-muted)',
                  textDecoration:'none',
                  letterSpacing: '0.01em',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden md:inline-block transition-colors hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:border-[var(--accent)]"
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                color:         'var(--accent)',
                letterSpacing: '0.06em',
                textDecoration:'none',
                padding:       '7px 14px',
                border:        '1px solid var(--accent)',
              }}
            >
              Hire me
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden p-1.5"
              aria-label="Toggle menu"
              style={{ color: 'var(--text-muted)', fontSize: '18px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-12 md:hidden"
          style={{ background: 'var(--bg)' }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:    'var(--font-display)',
                fontStyle:     'italic',
                fontWeight:    400,
                fontSize:      '36px',
                color:         'var(--text)',
                textDecoration:'none',
                letterSpacing: '-0.02em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '13px',
              color:         'var(--accent)',
              textDecoration:'none',
              letterSpacing: '0.06em',
            }}
          >
            Hire me
          </a>
        </div>
      )}
    </>
  )
}
