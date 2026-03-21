'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import CaseStudyHeader from '@/components/CaseStudyHeader'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/data'

/** Convert YouTube watch/shorts URL to embed URL for iframe; adds autoplay, mute, and loop. */
function toYouTubeEmbedUrl(url: string): string {
  if (!url) return ''
  try {
    const u = new URL(url)
    const id =
      u.searchParams.get('v') ||
      (u.pathname.startsWith('/shorts/') && u.pathname.split('/shorts/')[1]?.split('/')[0]) ||
      (u.pathname.startsWith('/embed/') && u.pathname.split('/embed/')[1]?.split('/')[0])
    if (!id) return url
    const params = new URLSearchParams({ autoplay: '1', mute: '1', loop: '1', playlist: id })
    return `https://www.youtube.com/embed/${id}?${params.toString()}`
  } catch {
    return url
  }
}

// ─── Reusable animation helpers ────────────────────────────────────────────

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

// Two-column editorial layout: sticky label + content
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

// ─── Stat card ──────────────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  delay = 0,
}: {
  value: string
  label: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-background rounded-2xl p-6 border border-border"
    >
      <div className="font-display text-4xl text-primary mb-2">{value}</div>
      <div className="font-sans text-sm text-text-secondary leading-snug">{label}</div>
    </motion.div>
  )
}

// ─── Pull quote ─────────────────────────────────────────────────────────────
function PullQuote({
  quote,
  participant,
  delay = 0,
}: {
  quote: string
  participant: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="border-l-2 border-primary/40 pl-6 py-2"
    >
      <p className="font-sans text-base text-text-secondary leading-relaxed italic mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      <cite className="font-sans text-xs font-semibold text-primary uppercase tracking-wider not-italic">
        {participant}
      </cite>
    </motion.blockquote>
  )
}

// ─── Insight card ───────────────────────────────────────────────────────────
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

// ─── Design decision card ────────────────────────────────────────────────────
function DecisionCard({
  number,
  title,
  body,
  why,
  delay = 0,
}: {
  number: string
  title: string
  body: string
  why: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-background rounded-2xl overflow-hidden border border-border"
    >
      <div className="p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm flex-shrink-0 mt-0.5">
            {number}
          </div>
          <h4 className="font-display text-xl text-text leading-snug">{title}</h4>
        </div>
        <p className="font-sans text-sm text-text-secondary leading-relaxed">{body}</p>
      </div>
      <div className="bg-surface border-t border-border px-8 py-5">
        <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          Why this decision
        </p>
        <p className="font-sans text-sm text-text-secondary leading-relaxed">{why}</p>
      </div>
    </motion.div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function UsherCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <CaseStudyHeader />

      {/* ── Hero ── */}
      <section className="pt-28 pb-0 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          {/* Breadcrumb */}
          <FadeUp>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-primary transition-colors duration-200 mb-10"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
          </FadeUp>

          {/* Label */}
          <FadeUp delay={0.05}>
            <p className="section-label mb-4">Thesis Capstone · Mobile Design</p>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text leading-tight mb-6 max-w-4xl text-balance">
              Usher — AI-Powered{' '}
              <span className="text-primary">Academic Resource</span> App
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.15}>
            <p className="font-sans text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Bridging the gap between Canvas coursework and university library resources — so students stop Googling and start discovering.
            </p>
          </FadeUp>

          {/* Metadata strip */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-border">
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Role</p>
                <p className="font-sans text-sm text-text">End-to-end UX Design</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Timeline</p>
                <p className="font-sans text-sm text-text">8 Months</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Type</p>
                <p className="font-sans text-sm text-text">Thesis Capstone</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Tools</p>
                <p className="font-sans text-sm text-text">Figma · Miro · ChatGPT · Gemini</p>
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
                src="/images/usher-hero.mp4"
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
                Universities invest millions in academic resources. Students still Google everything.
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Despite world-class library databases and curated academic collections, students consistently default to Reddit, Google, and unreliable online sources for homework help. This isn&apos;t a laziness problem — it&apos;s a{' '}
                <strong className="text-text font-semibold">discovery and navigation problem</strong>.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                The current system requires students to leave their existing workflow, navigate complex search interfaces, evaluate unfamiliar databases, and decode academic jargon — all before finding a single relevant resource. Usher was designed to eliminate that entire journey.
              </p>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── Secondary research stats ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp>
            <p className="section-label mb-2">The Gap</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4 max-w-2xl">
              The data revealed a troubling pattern
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Before talking to students, I reviewed existing research on how students approach academic work today. What I found set the stage for deeper investigation.
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard value="78%" label="of students struggle to identify credible academic sources online" delay={0} />
            <StatCard value="89%" label="begin research with search engines like Google" delay={0.08} />
            <StatCard value="6%" label="actively use university library databases" delay={0.16} />
            <StatCard value="20%" label="seek help from librarians when they face challenges" delay={0.24} />
          </div>
          <FadeUp delay={0.3} className="mt-8">
            <p className="font-sans text-sm text-text-muted italic max-w-xl">
              These patterns highlight a growing gap between available academic resources and how students actually search for information — setting the stage for deeper primary research.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section className="section-padding">
        <div className="container-inner space-y-12">
          <SectionRow label="The Solution">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4">
                Don&apos;t redesign the library. Rethink how students{' '}
                <em className="not-italic text-primary">access</em> it.
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-2xl">
                Usher is an AI-powered mobile companion that automatically connects Canvas assignments to library resources — eliminating the search step entirely. Instead of asking students to adapt to complex systems, Usher meets them within their existing academic flow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                      </svg>
                    ),
                    title: 'Canvas Sync',
                    desc: 'Direct integration pulls assignment titles, descriptions, and due dates — no manual input required.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    ),
                    title: 'AI Matching',
                    desc: 'Algorithm analyzes assignment requirements and matches library metadata — without students writing a single search query.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    ),
                    title: 'Smart Notifications',
                    desc: 'Push alerts deliver contextual resource recommendations with relevance scores — exactly when students need them.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                      </svg>
                    ),
                    title: 'Mobile-to-Desktop Flow',
                    desc: 'Discover on your phone, access on your laptop. Email and text links on every resource bridge the gap seamlessly.',
                  },
                ].map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.08}>
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

      {/* ── Solution Mockup ── */}
      <section className="bg-text py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="container-inner">
          {/* Heading */}
          <FadeUp className="text-center mb-16">
            <p className="font-sans text-xs font-semibold text-primary-light uppercase tracking-widest mb-3">
              The App in Action
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-background leading-snug max-w-xl mx-auto">
              See how Usher removes the friction between students and the resources they need
            </h3>
          </FadeUp>

          {/* Video mockup — use external URL if set (for Vercel); else local file */}
          <FadeUp delay={0.15} className="flex justify-center">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ width: '280px', aspectRatio: '9 / 19.5' }}
            >
              {siteConfig.usherMockupVideoUrl ? (
                <iframe
                  src={toYouTubeEmbedUrl(siteConfig.usherMockupVideoUrl)}
                  title="Usher prototype walkthrough"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video
                  src="/images/usher-mockup.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              )}
            </div>
          </FadeUp>

          {/* Caption */}
          <FadeUp delay={0.3} className="text-center mt-10">
            <p className="font-sans text-sm text-background/40">
              Prototype walkthrough · Figma
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Research Approach ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner space-y-12">
          <SectionRow label="Research Approach">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl text-text leading-snug mb-6">
                12 students, 8 departments, and one library director
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                To move beyond assumptions, I conducted in-depth interviews with{' '}
                <strong className="text-text font-semibold">12 students across different departments</strong> — from Architecture to Medical to UX Design. These conversations revealed not just what students <em>do</em>, but why they avoid library resources despite needing them.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                I then shared synthesized findings with the <strong className="text-text font-semibold">Director of the University Library</strong>. This institutional perspective revealed operational constraints I needed to design around — limited IT resources for complex integrations and content licensing restrictions. Together, these dual perspectives formed the foundation for every design decision that followed.
              </p>

              {/* Research method tags */}
              <div className="flex flex-wrap gap-2">
                {['In-depth Interviews', 'Affinity Mapping', 'Secondary Research', 'Institutional Stakeholder Interview', 'Usability Testing (6 students)', '3 Pretotyping Experiments'].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── Key Insights ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Key Insights</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              What the research actually revealed
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <InsightCard
              number="01"
              title="Students use the library for everything except research"
              body="Only 2 out of 12 students actively used library literature resources for academic research — the core function libraries are designed for. Both belonged to the Medical program. The majority came for printing, group study, or IT support."
              delay={0}
            />
            <InsightCard
              number="02"
              title="Navigation was the real barrier — not awareness"
              body="After mapping student challenges, navigation emerged as the underlying factor — outweighing awareness gaps. Difficulty finding relevant resources and unclear search paths created friction that discouraged continued use. This reframed the entire design challenge."
              delay={0.1}
            />
          </div>

          {/* Student voices */}
          <FadeUp className="mb-6">
            <p className="section-label mb-6">Student Voices</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PullQuote
              quote="To go to the library, it like takes you an effort to walk all the way to the library… time is more valued when you're doing it digitally."
              participant="Participant 2"
              delay={0}
            />
            <PullQuote
              quote="I have sometimes spent maybe 1 or 2 hours just finding a book or maybe a thesis… it's time-consuming, so I prefer online."
              participant="Participant 1"
              delay={0.1}
            />
            <PullQuote
              quote="Even the website, it's kind of tricky. We are not able to easily find where the things are… it's very difficult to find out."
              participant="Participant 5"
              delay={0.2}
            />
          </div>
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
              How might we reduce the navigation friction university students face when trying to discover and engage with credible, course-aligned library resources?
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ── Design Decisions ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-16">
            <p className="section-label mb-2">Design Decisions</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              Every choice anchored in research
            </h2>
          </FadeUp>

          <div className="space-y-24">

            {/* Decision 1 — text left, video right */}
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <h4 className="font-display text-2xl text-text leading-snug">Meet students where they already are</h4>
                  </div>
                  <p className="font-sans text-base text-text-secondary leading-relaxed mb-6">
                    Students live in Canvas to track deadlines and assignments. Instead of expecting them to leave their workflow to search for resources, I designed a mobile-first experience that integrates with their daily habits — the library comes to them, not the other way around.
                  </p>
                  <div className="bg-surface border border-border rounded-2xl px-6 py-5">
                    <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Why this decision</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Students discover resources in micro-moments on their phones but need laptop access for deep research. The seamless mobile-to-desktop handoff bridges discovery to delivery, matching actual behavior patterns revealed in interviews.
                    </p>
                  </div>
                </div>
                {/* Video */}
                <div className="flex justify-center lg:justify-end">
                  <div className="overflow-hidden" style={{ width: '260px', aspectRatio: '9 / 19.5', borderRadius: '2.75rem' }}>
                    <video
                      src="/images/usher-decision-1.mp4"
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Decision 2 — video left, text right */}
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Video — shown first on mobile, left on desktop */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="overflow-hidden" style={{ width: '260px', aspectRatio: '9 / 19.5', borderRadius: '2.75rem' }}>
                    <video
                      src="/images/usher-decision-2.mp4"
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <h4 className="font-display text-2xl text-text leading-snug">Make resource availability visible at a glance</h4>
                  </div>
                  <p className="font-sans text-base text-text-secondary leading-relaxed mb-6">
                    10 out of 12 participants believed there were &ldquo;no resources&rdquo; available for their courses — factually incorrect. The interface needed to actively combat this &ldquo;resource blindness&rdquo; and prove its value immediately upon login through big quantitative counters (e.g., 232 Books, 125 Articles).
                  </p>
                  <div className="bg-surface border border-border rounded-2xl px-6 py-5">
                    <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Why this decision</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Perception shapes behavior. If students don&apos;t believe the library has relevant material, they won&apos;t try. High-level metrics serve as immediate visual proof of abundance, validating the library&apos;s utility before the student even searches.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Decision 3 — text left, video right */}
            <FadeUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <h4 className="font-display text-2xl text-text leading-snug">Redesign discovery to reduce cognitive load</h4>
                  </div>
                  <p className="font-sans text-base text-text-secondary leading-relaxed mb-6">
                    Initial concepts mimicking traditional database lists were failing — they required too much cognitive effort to parse, causing abandonment before search began. I shifted to a &ldquo;Netflix-style&rdquo; discovery model using cover art, horizontal scrolling, and bite-sized descriptions.
                  </p>
                  <div className="bg-surface border border-border rounded-2xl px-6 py-5">
                    <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Why this decision</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Students are accustomed to content-forward browsing patterns from streaming apps. Matching that familiar interaction model lowers the barrier to entry, encouraging exploration rather than intimidation from academic-looking interfaces.
                    </p>
                  </div>
                </div>
                {/* Video */}
                <div className="flex justify-center lg:justify-end">
                  <div className="overflow-hidden" style={{ width: '260px', aspectRatio: '9 / 19.5', borderRadius: '2.75rem' }}>
                    <video
                      src="/images/usher-decision-3.mp4"
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Outcomes</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-xl">
              Validated through testing
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StatCard value="92%" label="task success rate across usability testing sessions" delay={0} />
            <StatCard value="75%" label="of users preferred Usher over Google for academic research discovery" delay={0.08} />
            <StatCard value="12" label="in-depth student interviews across 8 departments" delay={0.16} />
          </div>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="section-padding">
        <div className="container-inner space-y-16">
          <SectionRow label="Reflection">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* What Worked */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">What Worked</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Interviewing across multiple departments gave genuinely diverse perspectives, not a narrow sample.',
                    'Validating student insights with the library director aligned user needs with institutional constraints early.',
                    'Anchoring every design decision in research prevented solution bias and feature overload.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-sans text-primary mt-1 flex-shrink-0">↗</span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Would Do Differently */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">Would Do Differently</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Test navigation concepts earlier using low-fidelity prototypes before committing to visual direction.',
                    'Involve institutional stakeholders sooner to surface technical and operational constraints earlier in the process.',
                    'Narrow solution scope faster through quicker validation cycles rather than polishing too early.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-sans text-accent mt-1 flex-shrink-0">↻</span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">Next Steps</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    'Expand usability testing with a larger and more diverse student population across universities.',
                    'Explore deeper integration with existing academic tools such as learning management systems.',
                    'Measure long-term engagement to evaluate whether improved navigation leads to sustained library usage.',
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

          {/* Biggest Learning callout */}
          <FadeUp>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Biggest Learning
              </p>
              <p className="font-display text-xl text-text leading-snug">
                What initially appeared to be an awareness problem was actually a navigation issue. Deep behavioral analysis revealed that friction in finding relevant resources — not lack of interest — was the primary barrier to library usage.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Next project ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12 border-t border-border">
        <div className="container-inner">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Next Project</p>
              <h3 className="font-display text-3xl text-text">Constant Mobile App</h3>
              <p className="font-sans text-sm text-text-secondary mt-2">
                Mobile Design · Habit Design · Wellness
              </p>
            </div>
            <Link
              href="/work/constant"
              className="btn-secondary inline-flex items-center gap-2 shrink-0"
            >
              View project
              <ArrowUpRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
