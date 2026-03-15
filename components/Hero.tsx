'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector('#work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
      aria-label="Hero section"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C1694F 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(30%, -20%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E8A87C 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(-30%, 20%)',
        }}
      />

      {/* Decorative geometric shape */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-16 w-64 h-64 opacity-5 pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#C1694F" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="55" stroke="#C1694F" strokeWidth="1" />
          <circle cx="100" cy="100" r="30" stroke="#C1694F" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#C1694F" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#C1694F" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-inner section-padding w-full relative z-20">
        <div className="max-w-4xl">
          {/* Available for work badge */}
          {siteConfig.availableForWork && (
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 text-sm font-sans font-medium text-text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for new projects
              </span>
            </div>
          )}

          {/* Greeting + name */}
          <p className="font-sans text-text-secondary text-lg mb-4 flex items-center gap-2">
            Hi, I&apos;m
            <span className="font-medium text-text">{siteConfig.name}</span>
            <Sparkles size={16} className="text-accent" />
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text leading-tight mb-6 text-balance">
            I help people get things done{' '}
            <span className="relative">
              <span className="relative z-10 text-primary">through design</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 4 150 2 298 8"
                  stroke="#E8A87C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-sans text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl text-balance">
            {siteConfig.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollToWork(); }} className="btn-primary text-base inline-flex items-center gap-2">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="btn-secondary text-base inline-flex items-center justify-center">
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 hidden md:flex items-center gap-3 text-text-muted text-sm font-sans">
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
      </div>
    </section>
  )
}
