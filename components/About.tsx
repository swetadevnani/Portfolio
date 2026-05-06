'use client'

import Link from 'next/link'
import { aboutContent, siteConfig } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-inner">
        <p className="section-label">About Me</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <h2 className="section-title mb-8">{aboutContent.headline}</h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              I&apos;m a product designer who specializes in <strong className="font-semibold text-text">SaaS</strong> — specifically the hard part: taking a vague problem, a demanding user, and a tight timeline, and turning all three into a <strong className="font-semibold text-text">shipped product</strong>. I come from a research background, which means I don&apos;t start with screens; I start with questions.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              My workflow is <strong className="font-semibold text-text">AI-native by design</strong> — not because it&apos;s trendy, but because it closes the gap between insight and execution. I use Claude and Cursor to compress discovery timelines, Figma Make to prototype faster, and stay in lockstep with engineers so <strong className="font-semibold text-text">nothing gets lost in handoffs</strong>.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              Outside work, I cycle, read obsessively, and occasionally <strong className="font-semibold text-text">build small tools with AI</strong> just to understand what I&apos;m designing for.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-4 font-sans text-sm font-medium text-primary underline underline-offset-4 hover:gap-3 transition-all duration-200"
            >
              The full story, if you&apos;re curious
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          {/* Right: presenting photo */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src="/images/sweta-presenting.jpg"
              alt="Sweta presenting at a design event"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
