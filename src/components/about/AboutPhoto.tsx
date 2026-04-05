'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function AboutPhoto() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Greyscale when entering/leaving, full color when centred in viewport
  const grayscale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, 100]
  )
  const filter = useTransform(grayscale, v => `grayscale(${v}%)`)

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '3/4', border: '1px solid var(--border)' }}
    >
      <motion.div className="absolute inset-0" style={{ filter }}>
        <Image
          src="/about.jpeg"
          alt="Anand Dharne"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </motion.div>
    </div>
  )
}
