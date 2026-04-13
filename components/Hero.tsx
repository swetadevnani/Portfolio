'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import HeroAnimation from './HeroAnimation'
import LottieHero from './LottieHero'

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector('#work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center gradient-hero"
      aria-label="Hero section"
    >

      <div className="container-inner section-padding w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: text content */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-sans text-sm text-text-secondary">Available for new projects</span>
            </div>

            {/* Greeting */}
            <p className="font-sans text-text-secondary text-lg mb-4 flex items-center gap-2">
              Hi, I&apos;m
              <span className="font-medium text-text">{siteConfig.name}</span>
              <Sparkles size={16} className="text-primary" />
            </p>

            {/* Main heading */}
            <h1 className="font-display text-[44px] md:text-[56px] lg:text-[56px] text-text leading-[1.22] mb-6">
              I design, build, and ship products.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg text-text-secondary leading-relaxed mb-10 w-[90%]">
              Product designer with 2+ YOE building 0→1 products in fast-paced startups, focused on empathy-driven design, visual thinking, and rapid execution across SaaS, web, and mobile experiences.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); scrollToWork() }}
                className="btn-primary text-base inline-flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={16} />
              </a>
            </div>

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

          {/* Right: animated illustration */}
          <div className="hidden lg:block relative h-[680px] overflow-visible">
            {/* Temporarily swapped — revert to <HeroAnimation /> if needed */}
            <LottieHero />
            <p className="absolute bottom-20 left-0 right-0 text-center font-sans text-xs text-text-muted">
              This portfolio was crafted in 48 hours using Claude + Cursor
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
