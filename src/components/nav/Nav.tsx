'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
]

export function Nav() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    })
  }, [scrollY])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}
      >
        <div className="max-w-[1100px] mx-auto px-[clamp(20px,5vw,80px)] h-14 flex items-center justify-between">
          <a href="#" aria-label="Home">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="text-[10px] px-3 py-1.5 tracking-wide transition-colors"
              style={{
                background: 'var(--text)',
                color: 'var(--bg)',
                letterSpacing: '0.04em',
              }}
            >
              Hire me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="p-1.5"
              style={{ color: 'var(--text-muted)' }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: 'var(--bg)' }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl font-bold"
              style={{ color: 'var(--text)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-2xl font-bold"
            style={{ color: 'var(--accent)' }}
          >
            Hire me
          </a>
        </div>
      )}
    </>
  )
}
