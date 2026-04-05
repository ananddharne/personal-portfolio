'use client'
import { motion } from 'framer-motion'

interface HeroNameProps {
  firstName: string
  lastName:  string
}

const charVariants = {
  hidden:  { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

function AnimatedLine({
  text,
  delay = 0,
  accent = false,
}: {
  text:    string
  delay?:  number
  accent?: boolean
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03, delayChildren: delay } } }}
      className="overflow-hidden"
      style={{ textAlign: 'center' }}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          style={{
            display:       'inline-block',
            color:         'var(--text)',
            fontFamily:    'var(--font-display)',
            fontWeight:    900,
            lineHeight:    0.88,
            fontSize:      'clamp(68px, 11vw, 148px)',
            letterSpacing: '-0.02em',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {accent && (
        <motion.span
          variants={charVariants}
          style={{
            display:    'inline-block',
            color:      'var(--accent)',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            lineHeight: 0.88,
            fontSize:   'clamp(68px, 11vw, 148px)',
          }}
        >
          .
        </motion.span>
      )}
    </motion.div>
  )
}

export function HeroName({ firstName, lastName }: HeroNameProps) {
  return (
    <h1 style={{ display: 'block' }}>
      <AnimatedLine text={firstName} delay={0.1} />
      <AnimatedLine text={lastName}  delay={0.28} accent />
    </h1>
  )
}
