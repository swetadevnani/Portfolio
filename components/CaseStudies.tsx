'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/lib/data'

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" className="section-padding bg-background" ref={ref}>
      <div className="container-inner">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-title mb-4"
            >
              Projects I&apos;m proud of
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-subtitle"
            >
              A handful of projects where I got to untangle hard problems and
              ship solutions that actually made a difference.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:inline-flex items-center gap-2 font-sans text-sm font-medium text-primary hover:text-primary-dark transition-colors group"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            See all work
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* Mobile "see more" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:hidden mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Want to see more? Let&apos;s chat
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
