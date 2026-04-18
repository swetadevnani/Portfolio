'use client'

import Link from 'next/link'
import { aboutContent, siteConfig } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-inner">
        <p className="section-label">About Me</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="section-title mb-8">{aboutContent.headline}</h2>
            {aboutContent.bio.map((paragraph, i) => (
              <p key={i} className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-4 font-sans text-sm font-medium text-primary underline underline-offset-4 hover:gap-3 transition-all duration-200"
            >
              The full story, if you&apos;re curious
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl border-2 border-primary/20 translate-x-4 translate-y-4"
              />
              <div className="relative bg-background rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
                <img
                  src="/images/sweta.JPG"
                  alt={`${siteConfig.name} — UX & Product Designer`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
