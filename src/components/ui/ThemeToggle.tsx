'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const stored  = localStorage.getItem('theme') as 'light' | 'dark' | null
    const current = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null
    setTheme(stored || current || 'dark')
  }, [])

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-1.5 transition-opacity hover:opacity-60"
      style={{ color: 'var(--text-muted)' }}
    >
      {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
    </button>
  )
}
