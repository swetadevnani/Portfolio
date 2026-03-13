'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Download } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container-inner">
        <div className="relative">
          {/* Decorative blob */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #C1694F 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          {/* Inner card */}
          <div className="relative bg-surface rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Subtle pattern */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-64 h-64 opacity-5"
            >
              <svg viewBox="0 0 200 200" fill="none">
                {[20, 50, 80, 110, 140].map((r) => (
                  <circle key={r} cx="200" cy="0" r={r} stroke="#C1694F" strokeWidth="1" />
                ))}
              </svg>
            </div>

            <div className="relative max-w-2xl mx-auto text-center">
              {/* Section label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label"
              >
                Contact
              </motion.p>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl text-text leading-tight mb-6 text-balance"
              >
                Let&apos;s make something{' '}
                <span className="text-primary">great</span> together
              </motion.h2>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-lg text-text-secondary leading-relaxed mb-10"
              >
                Whether you&apos;re building something new, improving what you have, or just want
                to swap ideas over coffee — I&apos;d love to hear from you. I&apos;m always open to
                the right collaboration.
              </motion.p>

              {/* Email CTA */}
              <motion.a
                href={`mailto:${siteConfig.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group inline-flex items-center gap-3 bg-primary text-background rounded-full px-8 py-4 font-sans font-medium text-lg hover:bg-primary-dark transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 mb-6"
              >
                <Mail size={20} />
                {siteConfig.email}
              </motion.a>

              {/* Resume download */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <a
                  href={siteConfig.resumeUrl}
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  aria-label="Download resume PDF"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
