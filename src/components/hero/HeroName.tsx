'use client'
import { motion } from 'framer-motion'

export function HeroName({ name }: { name: string }) {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  }
  const char = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="font-serif font-bold leading-none tracking-[-0.03em] overflow-hidden"
      style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
      aria-label={name}
    >
      {name.split('').map((letter, i) => (
        <motion.span
          key={i}
          variants={char}
          style={{ display: 'inline-block', color: 'var(--text)' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}
