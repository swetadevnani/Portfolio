'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
              Usher — Personalized{' '}
              <span className="text-primary">Academic Discovery</span>
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.15}>
            <p className="font-sans text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              An 8-month master&apos;s thesis exploring why students underuse credible academic resources and how course-aware personalization could reduce the friction of discovery.
            </p>
          </FadeUp>

          {/* Metadata strip */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-border">
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Role</p>
                <p className="font-sans text-sm text-text">UX Researcher &amp; Product Designer</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Timeline</p>
                <p className="font-sans text-sm text-text">8 Months</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Team</p>
                <p className="font-sans text-sm text-text">Independent thesis project</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Methods</p>
                <p className="font-sans text-sm text-text">Interviews · Pretotyping · IA · Prototyping · Usability Testing</p>
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

      {/* ── Problem ── */}
      <section className="section-padding">
        <div className="container-inner space-y-16">
          <SectionRow label="Problem">
            <div className="max-w-3xl">
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                University libraries already provide students with credible academic content, but access alone does not make those resources easy to use.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Early research showed a gap between what universities offered and how students actually behaved. Students regularly turned to Google Scholar and other external tools because they felt faster, more familiar, and easier to navigate.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-12">
                Even among students who described themselves as library users, interviews revealed that many primarily used the library for studying, printing, IT support, or other non-research activities.
              </p>

              {/* Stat strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {[
                  { value: '23 / 27', label: 'reported difficulty finding relevant library resources' },
                  { value: '27 / 27', label: 'used Google Scholar or other external platforms for research' },
                  { value: '2 / 12', label: 'interview participants consistently used academic library resources' },
                ].map((s, i) => (
                  <FadeUp key={i} delay={i * 0.08} className="h-full">
                    <div className="bg-surface rounded-2xl border border-border p-6 h-full">
                      <p className="font-display text-3xl text-primary mb-2">{s.value}</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{s.label}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <p className="font-sans text-sm text-text-muted leading-relaxed mt-6 italic">
                The thesis&apos;s recruitment survey showed 23/27 struggling to find relevant resources and all 27 using external research platforms; deeper interviews then found only two of twelve consistently used academic research materials.
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
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', inset: 0 }}
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
                  className="object-cover object-center"
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

      {/* ── Primary Research ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-3">Primary Research</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              I started broad, then looked for the gap between what students said and what they actually did.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

            {/* Left: copy */}
            <FadeUp delay={0.05}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I conducted structured interviews with 12 students across six disciplines, focusing on four questions:
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                How are students currently using library resources? Where does the experience break down? What tools do they use instead? And what would make credible academic resources easier to incorporate into their existing workflow?
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                The interviews were organized around awareness, current usage, barriers, and opportunities. I documented each session immediately afterward so that explicit comments, hesitation, workarounds, and behavioral patterns could be compared consistently during synthesis.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                One pattern appeared early: <strong className="text-text font-semibold">&ldquo;using the library&rdquo; did not always mean using library resources.</strong>
              </p>
            </FadeUp>

            {/* Right: participant distribution + quote */}
            <FadeUp delay={0.1}>
              <div className="bg-background rounded-3xl border border-border p-6">
                <p className="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider mb-5">Participant Distribution</p>

                {/* Discipline groups */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Architecture', ids: ['P-2'], color: 'bg-primary/10 text-primary' },
                    { label: 'Medical', ids: ['P-3', 'P-10'], color: 'bg-rose-100 text-rose-700' },
                    { label: 'UX Design', ids: ['P-4', 'P-5'], color: 'bg-violet-100 text-violet-700' },
                    { label: 'Industrial Design', ids: ['P-11', 'P-12'], color: 'bg-amber-100 text-amber-700' },
                    { label: 'Textile Design', ids: ['P-1', 'P-6'], color: 'bg-teal-100 text-teal-700' },
                    { label: 'Construction Mgmt', ids: ['P-7', 'P-8', 'P-9'], color: 'bg-sky-100 text-sky-700' },
                  ].map((group) => (
                    <div key={group.label} className="bg-surface rounded-xl p-3 border border-border">
                      <p className="font-sans text-[10px] text-text-muted mb-2">{group.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.ids.map((id) => (
                          <span key={id} className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 font-sans text-[11px] font-semibold ${group.color}`}>
                            {id}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote card */}
                <div className="bg-surface rounded-2xl border border-border p-5">
                  <p className="font-sans text-sm text-text leading-relaxed mb-3">
                    &ldquo;Even the website… it&apos;s kind of tricky. We are not able to easily find where the things are.&rdquo;
                  </p>
                  <p className="font-sans text-xs text-text-muted italic">
                    Interview feedback consistently pointed toward effort, navigation and relevance.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── Synthesis / The Reframe ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Synthesis</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              I thought awareness was the problem. The evidence changed the problem.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

            {/* Left: narrative */}
            <FadeUp delay={0.05}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Affinity mapping initially made awareness look like the dominant issue. Students often did not know about specific databases, workshops, or digital tools.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                But awareness did not translate into use.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                When I compared what students knew with what they actually did, a stronger pattern emerged: even students who knew resources existed often avoided them because navigation felt difficult, logins added effort, results felt disconnected from coursework, and external tools offered a faster starting point.{' '}
                <strong className="text-text font-semibold">That changed the problem I was solving.</strong>
              </p>

              {/* From / To reframe */}
              <div className="bg-background rounded-2xl border border-border p-6 mb-8 space-y-4">
                <div>
                  <p className="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">From</p>
                  <p className="font-display text-lg text-text-secondary leading-snug">
                    &ldquo;How might we make students more aware of library resources?&rdquo;
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">To</p>
                  <p className="font-display text-lg text-text leading-snug">
                    &ldquo;How might we reduce the friction university students face when trying to discover and engage with credible, course-aligned library resources?&rdquo;
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right: before/after frame + Awareness vs Navigation chart */}
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3 mb-3">
                <div className="bg-surface rounded-2xl border border-border p-6 text-center">
                  <p className="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                    Initial assumption
                  </p>
                  <p className="font-display text-2xl text-text-secondary">Awareness</p>
                </div>
                <span aria-hidden="true" className="font-display text-3xl text-primary text-center hidden sm:block">
                  →
                </span>
                <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                  <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    Evidence-based problem
                  </p>
                  <ul className="font-display text-base text-text leading-snug space-y-1">
                    <li>Discovery friction</li>
                    <li>Navigation</li>
                    <li>Course relevance</li>
                    <li>Workflow disconnect</li>
                  </ul>
                </div>
              </div>
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider text-center mb-8">
                Research changed the frame →
              </p>

              <div className="bg-background rounded-2xl border border-border p-6">
                <p className="font-sans text-xs font-semibold text-text-muted uppercase tracking-wider mb-5">
                  Awareness vs. Navigation — Data from Participant Interviews
                </p>
                <div className="space-y-5">
                  {[
                    { known: 'Introduced to resources during orientation', used: 'Actually went to use them', pct: 33 },
                    { known: 'Professors encouraged resource use', used: 'Actually went to use them', pct: 22 },
                    { known: 'Aware of Tuesdays with Librarian', used: 'Actually attended the workshop', pct: 10 },
                  ].map((row) => (
                    <div key={row.known}>
                      <div className="flex items-center justify-between gap-4 mb-1.5">
                        <p className="font-sans text-xs text-text-secondary">{row.known}</p>
                        <p className="font-display text-sm text-primary font-semibold flex-shrink-0">{row.pct}%</p>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${row.pct}%` }} />
                      </div>
                      <p className="font-sans text-[11px] text-text-muted mt-1">{row.used}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

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

      {/* ── Exploring the Solution ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Product Direction</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug">
              Canvas was the strongest workflow fit. It was not feasible to prototype.
            </h2>
          </FadeUp>

          <FadeUp delay={0.05} className="mb-10">
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              I explored several ways to reduce discovery friction, including physical wayfinding, a standalone mobile companion, and surfacing resources directly inside students&rsquo; course workflow.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              The strongest conceptual direction was Canvas integration.{' '}
              <strong className="text-text font-semibold">
                It removed an entire discovery step: instead of asking students to remember that library resources existed, relevant materials could appear beside the assignments they were already working on.
              </strong>
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              But an early technical review exposed a real constraint. A functioning Canvas/Blackboard integration required institutional approvals, restricted system access, secure data exchange, and LTI 1.3 compliance—well beyond the timeline and access available for this thesis.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Rather than present a fake integration as functional, I used a mobile prototype as a vehicle for testing the underlying discovery experience. This direction was also supported by the research:{' '}
              <strong className="text-text font-semibold">8 of 12 students described mobile searching as convenient and accessible.</strong>
            </p>
          </FadeUp>

          {/* Concepts explored */}
          <FadeUp delay={0.1} className="mb-6">
            <p className="section-label">Concepts Explored</p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              <div className="bg-background rounded-2xl border border-border p-6">
                <p className="font-display text-lg text-text mb-2">Physical wayfinding</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Useful for in-library navigation
                </p>
                <span className="tag-pill">Secondary opportunity</span>
              </div>

              <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
                <p className="font-display text-lg text-text mb-2">Mobile companion</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Testable within thesis constraints
                </p>
                <span className="inline-flex items-center px-3 py-1 bg-primary text-background rounded-full text-xs font-sans font-medium">
                  Chosen prototype vehicle
                </span>
              </div>

              <div className="bg-background rounded-2xl border border-border p-6">
                <p className="font-display text-lg text-text mb-2">Canvas integration</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Best aligned with existing workflow
                </p>
                <span className="tag-pill">Strongest long-term fit</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Design (lo-fi → UI → hi-fi) — mirrors Sharp case study structure ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-14">
            <p className="section-label mb-2">Design</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              From lo-fi sketches to a polished mobile experience
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FadeUp>
              <div className="bg-background rounded-2xl border border-border overflow-hidden">
                <div className="relative aspect-[4/3] bg-surface border-b border-border">
                  <Image
                    src="/images/usher-lofi.jpg"
                    alt="Usher lo-fi wireframes"
                      fill
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Lo-fi Wireframes
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    Low-fidelity wireframes helped map navigation patterns, search flows, and core
                    screens before committing to visual polish — validating structure against
                    student mental models from research.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="bg-background rounded-2xl border border-border overflow-hidden">
                <div className="relative aspect-[4/3] bg-surface border-b border-border">
                  <Image
                    src="/images/usher-ui-kit.jpg"
                    alt="Usher UI kit and components"
                      fill
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    UI Exploration
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    Defined typography, color, and component patterns for a mobile-first companion
                    that feels academic yet approachable — balancing clarity, trust, and scanability
                    for quick discovery between classes.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              <div className="relative aspect-[16/7] bg-surface border-b border-border">
                <Image
                  src="/images/usher-hifi.jpg"
                  alt="Usher hi-fi screens"
                      fill
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 max-w-2xl">
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Hi-fi Wireframes
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  High-fidelity screens translated research into tangible interactions — from
                  discovery and handoff to engaging with course-aligned resources — with clear
                  hierarchy, affordances, and a consistent system across key flows.
                </p>
              </div>
            </div>
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
