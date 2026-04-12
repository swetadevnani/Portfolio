'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { CaseStudy } from '@/lib/data'

type Props = {
  study: CaseStudy
  index: number
}

function CardContent({ study }: { study: CaseStudy }) {
  return (
    <>
      <div className="relative overflow-hidden aspect-[16/10] bg-surface">
        <img
          src={`/images/${study.image}${study.imageCacheBust ? `?v=${study.imageCacheBust}` : ''}`}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {study.comingSoon && (
          <div className="absolute inset-0 bg-text/30 flex items-center justify-center">
            <span className="bg-background text-text font-sans text-xs font-semibold px-4 py-1.5 rounded-full shadow">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-text/0 group-hover:bg-text/5 transition-colors duration-300" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="font-sans text-xs font-semibold text-primary uppercase tracking-wider leading-relaxed">
            {study.context}
          </span>
          <span className="font-sans text-xs text-text-muted shrink-0">{study.role}</span>
        </div>
        <h3 className="font-display text-xl text-text leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
          {study.title}
        </h3>
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5 flex-1">
          {study.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        {study.metrics && study.metrics.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-1 pt-4 border-t border-border mb-5">
            {study.metrics.map((metric) => (
              <span key={metric} className="font-sans text-xs text-text-secondary">
                {metric}
              </span>
            ))}
          </div>
        )}
        {study.comingSoon ? (
          <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-text-muted">
            Coming Soon
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
            <span className="underline underline-offset-4 decoration-primary/40 group-hover:decoration-primary transition-colors duration-200">
              View Case Study
            </span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </span>
        )}
      </div>
    </>
  )
}

export default function CaseStudyCard({ study, index }: Props) {
  return (
    <article className="group bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
      {study.comingSoon ? (
        <CardContent study={study} />
      ) : (
        <Link
          href={study.href}
          className="flex flex-col flex-1"
          aria-label={`View case study: ${study.title}`}
        >
          <CardContent study={study} />
        </Link>
      )}
    </article>
  )
}
