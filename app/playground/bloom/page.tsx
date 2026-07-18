'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const stats = [
  { value: '1 in 10', label: 'women of reproductive age have PCOS' },
  { value: '70%', label: 'are undiagnosed or misdiagnosed' },
  { value: '~10 yrs', label: 'average time to receive a correct diagnosis' },
  { value: '#1', label: 'most common hormonal disorder in women globally' },
]

const features = [
  {
    title: 'Habit tracking built for PCOS',
    desc: 'Supplements, movement, sleep, diet — logged daily with PCOS-specific context. Not generic "health goals." Habits that are clinically relevant to managing insulin resistance and hormonal balance.',
  },
  {
    title: 'Ingredient scanner',
    desc: "The thing that shocked me most in my research: how many everyday products — skincare, food, household items — contain endocrine disruptors that silently worsen hormonal imbalance. Bloom lets you scan a product and see what's actually in it, flagged against a PCOS-relevant ingredient library.",
  },
  {
    title: 'Cycle awareness, not just tracking',
    desc: "PCOS cycles are irregular. Bloom doesn't just log dates — it tracks how you feel across phases and builds a picture of your patterns over time, so you start to understand your own rhythm instead of comparing yourself to a 28-day average that's never been yours.",
  },
]

export default function BloomPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="pt-32 pb-24">
        <div className="container-inner section-padding">
          <FadeIn>
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Back to Playground
            </Link>
          </FadeIn>

          {/* Text */}
          <div className="max-w-2xl mb-14">
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-sans text-sm text-text-secondary">Passion project · In progress</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6">
                Bloom
              </h1>
              <p className="font-sans text-lg text-text-secondary leading-relaxed mb-6">
                A mobile companion for women managing PCOS — built because I had it, because no existing app understood what I actually needed, and because the information that changed my life shouldn&apos;t have been this hard to find.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PCOS Management', 'Habit Tracking', 'Ingredient Scanner', 'iOS'].map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Full-width image */}
          <FadeIn delay={0.15}>
            <div className="rounded-3xl overflow-hidden bg-surface border border-border shadow-card w-full">
              <Image
                src="/images/bloom-preview.jpg"
                alt="Bloom app screens"
                width={1200} height={800} className="w-full h-auto block"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  const fallback = el.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div
                className="w-full items-center justify-center flex-col text-center p-16"
                style={{ display: 'none' }}
              >
                <p className="font-display text-5xl text-primary/30 mb-3">✿</p>
                <p className="font-display text-2xl italic text-primary/40">bloom</p>
                <p className="font-sans text-xs text-text-muted mt-3">Screenshot coming soon</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── THE PERSONAL STORY ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn>
              <p className="section-label mb-3">Where it started</p>
              <h2 className="section-title">I&apos;ve had PCOS<br />since I was<br />a teenager.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I was diagnosed young and handed a prescription for birth control. That was it. No explanation of what PCOS actually is, what&apos;s happening in my body, or what I could do about it. Birth control was the answer — except it&apos;s not really an answer. It doesn&apos;t treat PCOS. It masks the symptoms. The moment you stop, everything comes back.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                So I started researching on my own. I read studies, followed endocrinologists, dug into the connection between insulin resistance and PCOS, learned about inositol, about how movement timing matters, about which ingredients in everyday products are endocrine disruptors that quietly make everything worse. I learned more from six months of self-research than from years of doctor visits.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                And then I started tracking. Manually. In notes apps and spreadsheets. Because nothing I found was built for someone who wanted to actually <em className="italic font-serif">understand</em> their body — not just log their period.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── PCOS STATS ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="mb-12">
            <p className="section-label mb-3">The reality</p>
            <h2 className="section-title">This isn&apos;t a rare condition.<br />It just gets treated that way.</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 items-stretch">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="h-full">
                <div className="bg-surface rounded-2xl p-6 text-center border border-border shadow-card h-full flex flex-col items-center justify-center">
                  <p className="font-display text-3xl md:text-4xl text-primary mb-2">{s.value}</p>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="bg-surface rounded-2xl p-8 border border-border max-w-3xl">
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                PCOS is the most common hormonal disorder in women — and most of us spend years not knowing we have it, or knowing we have it but not understanding it. The standard advice is generic. The apps are either period trackers dressed up with PCOS labels, or clinical symptom logs that feel like filling out a form. Neither helps you actually <strong className="font-semibold text-text">connect the dots between your daily habits and how you feel</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── WHAT BLOOM IS ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn>
              <p className="section-label mb-3">What I built</p>
              <h2 className="section-title">The app I wish<br />I had at 17.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                Bloom started as a personal tool. I needed somewhere to track my supplements (inositol, magnesium, vitamin D — the things that actually moved the needle for me), my movement patterns, my meals, and how all of that correlated with my symptoms and cycle. I needed to see the relationships over time, not just log the days.
              </p>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <FadeIn key={feature.title} delay={i * 0.08}>
                    <div className="bg-surface rounded-2xl p-6 border border-border shadow-card">
                      <h3 className="font-display text-lg text-text mb-2">{feature.title}</h3>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── PROTOTYPE VIDEO ── */}
      <section className="py-8">
        <div className="container-inner section-padding">
          <FadeIn className="text-center mb-8">
            <p className="section-label mb-3">Prototype · In Action</p>
            <h2 className="font-display text-3xl text-text leading-snug max-w-2xl mx-auto">
              See how it feels to use it.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-sm mx-auto">
              <div className="rounded-3xl overflow-hidden bg-surface border border-border shadow-card" style={{ position: 'relative', paddingTop: '204.28%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1195410513?badge=0&autopause=0&autoplay=1&loop=1&muted=1&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Bloom App Video"
                />
              </div>
              <p className="font-sans text-xs text-text-muted text-center mt-5">Prototype · Bloom v1</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── HOW IT WAS BUILT ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn>
            <div className="bg-surface rounded-3xl p-10 md:p-14 border border-border shadow-card max-w-3xl mx-auto text-center">
              <p className="section-label mb-6">How it was built</p>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-6">
                Designed in Claude.<br />
                <em className="italic text-primary">Powered by years of living with it.</em>
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I used Claude to generate the full design system — color tokens, typography, component specs, iOS-ready screen designs — in a single session. The design brief came entirely from my own experience of what I needed and what had always felt missing.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                This is what vibe coding means to me: not just building faster, but compressing the distance between a real problem you&apos;ve lived with and a product that actually addresses it. The research is the years of figuring this out myself. The execution is AI.
              </p>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                The app is in progress. When it ships, it&apos;ll be free — because the information that changed my life shouldn&apos;t cost anyone anything.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
