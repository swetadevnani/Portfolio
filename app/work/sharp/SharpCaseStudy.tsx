'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import CaseStudyHeader from '@/components/CaseStudyHeader'
import Footer from '@/components/Footer'

// ─── Animation helpers ────────────────────────────────────────────────────────

function FadeUp({
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
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16"
    >
      <div className="pt-1">
        <span className="section-label block">{label}</span>
      </div>
      <div>{children}</div>
    </motion.div>
  )
}

function InsightCard({
  number,
  title,
  body,
  delay = 0,
}: {
  number: string
  title: string
  body: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-background rounded-2xl p-8 border border-border relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 font-display text-8xl text-primary/5 leading-none select-none pr-4 pt-2"
      >
        {number}
      </div>
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary font-sans font-bold text-sm mb-5">
        {number}
      </div>
      <h4 className="font-display text-xl text-text mb-3 leading-snug">{title}</h4>
      <p className="font-sans text-sm text-text-secondary leading-relaxed">{body}</p>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SharpCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <CaseStudyHeader />

      {/* ── Hero ── */}
      <section className="pt-28 pb-0 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-primary transition-colors duration-200 mb-10"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
          </FadeUp>

          <FadeUp delay={0.05}>
            <p className="section-label mb-4">Academic Project · Web & E-commerce Design</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text leading-tight mb-6 max-w-4xl text-balance">
              Sharp —{' '}
              <span className="text-primary">Making Setup Simple</span>{' '}
              Through Interactive Support
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="font-sans text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Redesigning the Sharp Clocks website with e-commerce functionality and a
              virtual interactive clock that guides users through setup and troubleshooting
              in real time — reducing returns, support calls, and user frustration.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-border">
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Role</p>
                <p className="font-sans text-sm text-text">End-to-end UX Design</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Timeline</p>
                <p className="font-sans text-sm text-text">16 Weeks</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Type</p>
                <p className="font-sans text-sm text-text">Academic Project</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Tools</p>
                <p className="font-sans text-sm text-text">Figma · Miro · ChatGPT · Claude</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Hero image ── */}
      <FadeUp delay={0.05} className="mt-0">
        <div className="px-6 md:px-8 lg:px-12 mt-12">
          <div className="container-inner">
            <div className="rounded-3xl overflow-hidden aspect-[16/7] bg-surface border border-border">
              <video
                src="/images/sharp-hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── Overview ── */}
      <section className="section-padding">
        <div className="container-inner space-y-16">
          <SectionRow label="Overview">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-6">
                A product people couldn&apos;t figure out — not because it was hard, but because the guidance wasn&apos;t there.
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Sharp sells digital alarm clocks primarily through Amazon and Target. While the
                team focused on redesigning the e-commerce experience, a deeper problem emerged:
                customers were abandoning their products or leaving negative reviews — not because
                the clocks were faulty, but because the{' '}
                <strong className="text-text font-semibold">text-heavy manual was confusing and hard to follow.</strong>
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                My focus: make technical support more accessible and visual — by designing an
                experience that meets users where they are and guides them through setup
                step by step.
              </p>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── The Gap ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">The Gap</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              Three pain points hiding in plain sight — in customer reviews
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mt-4 max-w-2xl">
              Research from Amazon and Target reviews revealed a consistent pattern: users
              were struggling with the same issues, repeatedly.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                ),
                number: '01',
                title: 'Low Manual Engagement',
                body: 'Users skipped the text-heavy manual entirely, leading to setup frustration and negative reviews like "Can\'t figure out how to set the time."',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                ),
                number: '02',
                title: 'Confusing Instructions',
                body: 'Non-tech-savvy users — the primary audience of seniors and parents — found instructions difficult to follow without any visual guidance.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
                number: '03',
                title: 'High Return & Support Volume',
                body: 'Customers contacted support or returned products for issues that could have been resolved with clear, guided setup instructions.',
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-7 border border-border h-full relative overflow-hidden">
                  <div aria-hidden className="absolute top-0 right-0 font-display text-8xl text-primary/5 leading-none select-none pr-4 pt-2">
                    {item.number}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    {item.icon}
                  </div>
                  <h4 className="font-sans font-semibold text-base text-text mb-2">{item.title}</h4>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section className="section-padding">
        <div className="container-inner space-y-12">
          <SectionRow label="The Solution">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4">
                An interactive product replica that{' '}
                <em className="not-italic text-primary">teaches by doing.</em>
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-2xl">
                The Virtual Clock lets users click buttons on a digital replica of their
                physical clock and immediately see what each button does — mirroring real-world
                interaction with contextual, step-by-step guidance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    ),
                    title: 'Clickable Buttons',
                    desc: 'Users click buttons on the virtual clock to see what each one does, mimicking real-world interaction without touching the physical product.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                      </svg>
                    ),
                    title: 'Contextual Guidance',
                    desc: 'Each button click reveals step-by-step instructions specific to that feature — e.g., "Night Light On" shows exactly how to toggle it.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    ),
                    title: 'Integrated Support',
                    desc: 'Quick access to video tutorials, FAQs, and customer support — all without leaving the page, reducing friction at every step.',
                  },
                ].map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.1}>
                    <div className="bg-surface rounded-2xl p-6 border border-border h-full">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-sans font-semibold text-base text-text mb-2">{item.title}</h4>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── Solution Showcase ── */}
      <section className="bg-text py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="container-inner">
          <FadeUp className="text-center mb-14">
            <p className="font-sans text-xs font-semibold text-primary-light uppercase tracking-widest mb-3">
              The Virtual Clock — In Action
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-background leading-snug max-w-2xl mx-auto">
              Click a button. See what it does. No manual required.
            </h3>
          </FadeUp>

          {/* Hero mockup video — Vimeo embed */}
          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden bg-background/5 border border-background/10 aspect-[16/9] max-w-4xl mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1043971502?autoplay=1&loop=1&muted=1&background=1&quality=1080p"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Sharp — Solution walkthrough"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="text-center mt-10 flex flex-col items-center gap-5">
            <p className="font-sans text-sm text-background/40">
              Interactive prototype · Figma
            </p>
            <a
              href="https://www.figma.com/proto/mLiNGdW9i0ScWuDP3Z68aL/Shweta_Sharp-final-for-web?page-id=0%3A1&node-id=2418-8208&viewport=1257%2C2501%2C0.13&t=7KUe1PxaLWPY5pxO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2418%3A8208&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-background/20 text-background font-sans text-sm font-semibold hover:bg-background/10 transition-colors duration-200"
            >
              View Interactive Prototype
              <ArrowUpRight size={14} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding">
        <div className="container-inner space-y-12">
          <SectionRow label="Process">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4">
                Double Diamond — from broad problem to focused solution
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-2xl">
                I followed the Double Diamond framework — Discover, Define, Develop, and
                Deliver — to guide the process from initial research to implementation.
                Each phase helped narrow a broad set of pain points into one clear, purposeful opportunity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  {
                    step: '01', phase: 'Discover',
                    items: ['Sharp website audit', 'Mobile experience review', 'Amazon & Target review analysis', 'Manual evaluation'],
                  },
                  {
                    step: '02', phase: 'Define',
                    items: ['User personas', 'MoSCoW prioritisation', 'Value proposition', 'Journey mapping'],
                  },
                  {
                    step: '03', phase: 'Design',
                    items: ['Information architecture', 'Sitemap', 'Lo-fi wireframes', 'UI kit & style guide'],
                  },
                  {
                    step: '04', phase: 'Test',
                    items: ['Prototype walkthrough', 'Usability testing', 'Task analysis', 'Issue identification'],
                  },
                  {
                    step: '05', phase: 'Deliver',
                    items: ['Hi-fi wireframes', 'Design system', 'Iterated UI', 'Handoff documentation'],
                  },
                ].map((phase, i) => (
                  <FadeUp key={phase.phase} delay={i * 0.07}>
                    <div className="bg-surface rounded-2xl p-5 border border-border h-full">
                      <div className="font-sans text-xs font-bold text-primary uppercase tracking-widest mb-1">{phase.step}</div>
                      <div className="font-display text-lg text-text mb-4">{phase.phase}</div>
                      <ul className="space-y-1.5">
                        {phase.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-primary text-xs mt-1 flex-shrink-0">→</span>
                            <span className="font-sans text-xs text-text-secondary leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── Discover ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Discover</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              The problem wasn&apos;t just online — it was in every review
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mt-4 max-w-2xl">
              Analysing Sharp&apos;s existing website revealed limited brand presence, missing
              product listings, and no social media activity. But the most telling research
              came from the customer Q&amp;A sections on Amazon and Target.
            </p>
          </FadeUp>

          {/* Website analysis insight */}
          <FadeUp>
            <div className="bg-background rounded-2xl p-7 border border-border mb-8 max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-4">Website Audit Findings</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { finding: 'Limited brand information', detail: 'The site provided almost no context about Sharp as a company or brand.' },
                  { finding: 'Incomplete product catalogue', detail: 'Many Sharp products were entirely absent from the website listing.' },
                  { finding: 'No social media presence', detail: 'Zero active social channels — a missed opportunity for user engagement.' },
                ].map((item) => (
                  <div key={item.finding} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-text mb-1">{item.finding}</p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Customer voice — Q&As from Amazon */}
          <FadeUp delay={0.1} className="mb-4">
            <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Real Customer Questions — Amazon &amp; Target
            </p>
            <p className="font-sans text-sm text-text-secondary max-w-xl">
              These are real questions posted by Sharp clock customers. The pattern was
              impossible to ignore.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { q: 'When you set the time, can you go forward or backwards to easily just go earlier a little without having to go all the way around?', name: 'Phil', date: 'Dec 2017' },
              { q: 'How do you adjust the LED dimmer?', name: 'JC', date: 'Jul 2018' },
              { q: 'How do you set the time?', name: 'Sho', date: 'Dec 2017' },
              { q: 'Can the night light be turned off?', name: 'IGP', date: 'Jun 2020' },
              { q: 'Does the red dot mean PM or AM?', name: 'Sleepy Head', date: 'Mar 2020' },
              { q: 'Can I manually turn the alarm on/off during weekends without waking up to turn it off?', name: 'llc812', date: 'Mar 2021' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="bg-background rounded-2xl p-5 border border-border h-full flex flex-col gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <p className="font-sans text-sm text-text leading-relaxed flex-1">&ldquo;{item.q}&rdquo;</p>
                  <p className="font-sans text-xs text-text-muted">— {item.name}, {item.date}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Existing manual image */}
          <FadeUp delay={0.1} className="mt-12">
            <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              The Existing User Manual
            </p>
            <div className="rounded-3xl overflow-hidden border border-border bg-surface">
              <img
                src="/images/sharp-manual.png"
                alt="Sharp existing user manual — text-heavy layout"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </FadeUp>

          {/* Manual analysis */}
          <FadeUp delay={0.15} className="mt-8">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7 max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-3">Existing Manual — Key Limitations</p>
              <ul className="space-y-2">
                {[
                  'Heavily text-based with no visual guidance',
                  'Instructions are difficult to follow, especially for non-tech-savvy users',
                  'Engagement is low — many users skip the manual entirely',
                  'Updates or revisions to printed content are slow and inefficient',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0 text-xs mt-1">→</span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HMW ── */}
      <section className="bg-primary py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="text-center max-w-3xl mx-auto">
            <p className="font-sans text-sm font-semibold text-background/60 uppercase tracking-widest mb-6">
              Design Challenge
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-background leading-snug text-balance">
              How might we help Sharp customers successfully set up and use their products —
              without relying on a printed manual?
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ── Research Insights ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Research Insights</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              Three insights that shaped the design direction
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard
              number="01"
              title="Users learn by doing, not by reading"
              body="Customers interacted with their clocks first and consulted instructions only when stuck. Any support solution needed to meet them in that moment — not before it."
              delay={0}
            />
            <InsightCard
              number="02"
              title="Visual guidance dramatically reduces confusion"
              body="Non-tech-savvy users — seniors, parents — needed to see, not just read. A visual, interactive approach would serve the actual audience far better than text alone."
              delay={0.1}
            />
            <InsightCard
              number="03"
              title="Support should live where the product lives"
              body="Users searched for help on Amazon and Target product pages. Centralising support within the product experience meant they would find answers where they already were."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-14">
            <p className="section-label mb-2">Design</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              From lo-fi sketches to a polished, on-brand experience
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Lo-fi */}
            <FadeUp>
              <div className="bg-background rounded-2xl border border-border overflow-hidden">
                <div className="aspect-[4/3] bg-surface flex items-center justify-center border-b border-border">
                  <img
                    src="/images/sharp-lofi.png"
                    alt="Sharp lo-fi wireframes"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Lo-fi Wireframes</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    Low-fidelity wireframes helped quickly explore layout ideas and task
                    flows before committing to visual direction.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* UI Kit */}
            <FadeUp delay={0.08}>
              <div className="bg-background rounded-2xl border border-border overflow-hidden">
                <div className="aspect-[4/3] bg-surface flex items-center justify-center border-b border-border">
                  <img
                    src="/images/sharp-uikit.png"
                    alt="Sharp UI kit"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">UI Kit</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    Built on Sharp&apos;s existing brand colours and typography, restructured
                    to feel clean, consistent, and modern across all screen sizes.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Hi-fi full width */}
          <FadeUp delay={0.1}>
            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[16/7] bg-surface flex items-center justify-center border-b border-border">
                <img
                  src="/images/sharp-hifi.png"
                  alt="Sharp hi-fi wireframes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 max-w-2xl">
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Hi-fi Wireframes</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  High-fidelity screens brought the experience to life with final visuals, refined
                  interactions, and real content — aligned to the UI kit for visual consistency across
                  desktop and mobile.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Key Features Delivered ── */}
      <section className="section-padding">
        <div className="container-inner space-y-12">
          <SectionRow label="Deliver">
            <div>
              <h2 className="font-display text-3xl text-text leading-snug mb-4">
                Three features that bring it all together
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-2xl">
                The final experience centred on reducing confusion at every touchpoint —
                from the first button click to finding a specific answer.
              </p>

              <div className="space-y-5">
                {[
                  {
                    number: '01',
                    title: 'Virtual Interactive Clock',
                    desc: 'A digital replica of the physical product. Users click any button and immediately see what it does, in real time. All buttons on the product are supported.',
                    image: '/images/sharp-feature-1.png',
                  },
                  {
                    number: '02',
                    title: 'Curated Video Support with Timestamps',
                    desc: 'Access to YouTube tutorials directly within the page. Key moments are highlighted at the bottom so users can jump straight to the answer for their specific question — no scrubbing required.',
                    image: '/images/sharp-feature-2.png',
                  },
                  {
                    number: '03',
                    title: 'Contextual FAQs',
                    desc: 'Frequently asked questions are surfaced directly alongside the virtual clock, answering the most common queries without requiring a support call.',
                    image: '/images/sharp-feature-3.png',
                  },
                ].map((item, i) => (
                  <FadeUp key={item.number} delay={i * 0.07}>
                    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0">
                        <div className="p-7 flex flex-col justify-center">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm mb-4">
                            {item.number}
                          </div>
                          <h4 className="font-display text-xl text-text leading-snug mb-3">{item.title}</h4>
                          <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="aspect-[16/9] md:aspect-auto bg-background border-t md:border-t-0 md:border-l border-border overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="bg-surface section-padding">
        <div className="container-inner space-y-16">
          <SectionRow label="Reflection">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">What Worked</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Grounding the solution in real Amazon and Target reviews gave the design credibility and focus.',
                    'The click-based virtual clock let users learn by doing — closely mirroring real-world interaction.',
                    'Step-by-step contextual guidance reduced cognitive load and addressed the most common confusion points.',
                    'Integrating video support with timestamps made self-service feel immediate and genuinely useful.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-sans text-primary mt-1 flex-shrink-0">↗</span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">Would Do Differently</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Focus more on making interactions intuitive so users can understand key actions with minimal guidance.',
                    'Refine visual affordances to reduce reliance on explanatory prompts.',
                    'Rely more on natural interaction patterns rather than instructional overlays.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-sans text-accent mt-1 flex-shrink-0">→</span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">Next Steps</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Expand usability testing to a broader and more diverse user group.',
                    'Explore progressive disclosure to reduce onboarding dependency.',
                    'Measure long-term effectiveness by tracking reduction in customer support inquiries.',
                    'Extend the virtual clock approach to other consumer devices with high support demand.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-sans text-text-muted mt-1 flex-shrink-0">→</span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionRow>

          {/* Biggest learning */}
          <FadeUp>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Biggest Learning
              </p>
              <p className="font-display text-xl text-text leading-snug">
                Product confusion is directly tied to support burden. What appeared to be a
                simple physical product became difficult to use because users lacked clear,
                guided instruction. This project reinforced how digital experiences can serve
                as effective extensions of physical products — reducing frustration while
                minimising dependency on customer support.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 border-t border-border">
              <div>
                <p className="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Next Project</p>
                <h3 className="font-display text-2xl text-text">Usher — AI-Powered Academic Resource App</h3>
              </div>
              <Link
                href="/work/usher"
                className="btn-secondary inline-flex items-center gap-2 text-sm flex-shrink-0"
              >
                View Case Study
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
