'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector('#work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
      aria-label="Hero section"
    >
      {/* Soft blurred pink blobs */}
      <div className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[90px] pointer-events-none" />

      <div className="container-inner section-padding w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center py-20">

          {/* Left: text */}
          <div className="flex flex-col justify-center">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-sans text-sm text-text-secondary">Open to opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-sans text-text-secondary text-lg mb-4 flex items-center gap-2"
            >
              Hi, I&apos;m
              <span className="font-medium text-text">{siteConfig.name}</span>
              <Sparkles size={16} className="text-primary" />
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-[44px] md:text-[56px] lg:text-[60px] text-text leading-[1.15] mb-6"
            >
              The product designer<br />
              for the AI era.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-sans text-lg text-text-secondary leading-relaxed mb-10 max-w-xl"
            >
              I specialize in SaaS, from early research through shipped UI. I use AI tools natively across the full design process: faster discovery, tighter iteration, better outcomes.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); scrollToWork() }}
                className="btn-primary text-base inline-flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <div className="mt-16 hidden md:flex items-center gap-3 text-text-muted text-sm font-sans">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-5 h-8 border border-border rounded-full flex items-start justify-center pt-1.5"
              >
                <div className="w-1 h-1.5 bg-text-muted rounded-full" />
              </motion.div>
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right: circular photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Dashed outer ring */}
              <div className="absolute inset-[-18px] rounded-full border border-dashed border-primary/20" />
              {/* Soft glow */}
              <div className="absolute inset-0 rounded-full bg-primary/8 scale-110" />
              {/* Circle photo */}
              <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-2 border-primary/15 shadow-lg relative z-10">
                <img
                  src="/images/sweta-cutout.png"
                  alt={siteConfig.fullName}
                  className="w-full h-full object-cover object-top scale-125 translate-y-4"
                />
              </div>
              {/* Small accent dot */}
              <div className="absolute bottom-4 right-0 w-4 h-4 rounded-full bg-primary/40 z-20" />
              <div className="absolute top-6 left-2 w-2.5 h-2.5 rounded-full bg-primary/25 z-20" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
