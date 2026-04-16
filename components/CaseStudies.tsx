'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/lib/data'

export default function CaseStudies() {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <p className="section-label">Selected Work</p>
            <h2 className="section-title mb-4">Projects I&apos;m proud of</h2>
            <p className="section-subtitle">
              A handful of projects where I got to untangle hard problems and
              ship solutions that actually made a difference.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary hover:gap-3 transition-all duration-200"
          >
            See all work
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="md:hidden mt-10 text-center">
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
        </div>
      </div>
    </section>
  )
}
