'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { aboutContent, siteConfig } from '@/lib/data'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-surface" ref={ref}>
      <div className="container-inner">
        {/* Section label */}
        <motion.p
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="section-label"
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="section-title mb-8"
            >
              {aboutContent.headline}
            </motion.h2>

            {aboutContent.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                custom={i + 2}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="font-sans text-base text-text-secondary leading-relaxed mb-5"
              >
                {paragraph}
              </motion.p>
            ))}

          </div>

          {/* Image / Illustration Column */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Photo placeholder with decorative frame */}
            <div className="relative">
              {/* Decorative offset frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl border-2 border-primary/20 translate-x-4 translate-y-4"
              />
              {/* Main image container */}
              <div className="relative bg-background rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
                <img
                  src="/images/sweta.jpg"
                  alt={`${siteConfig.name} — UX & Product Designer`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-5 -left-5 bg-primary text-background rounded-2xl px-5 py-3 shadow-card">
                <div className="font-sans text-xs font-medium opacity-80 mb-0.5">Based in</div>
                <div className="font-sans text-sm font-semibold">{siteConfig.location}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
