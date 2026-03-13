'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import CaseStudyHeader from '@/components/CaseStudyHeader'
import Footer from '@/components/Footer'

// ─── iPhone 14 phone frame ────────────────────────────────────────────────────
// The screen fills the entire interior — notch + home bar are both overlaid ON
// TOP of the image so there is zero dead space anywhere inside the frame.

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: '230px',
        flexShrink: 0,
        background: '#1a1a1a',
        borderRadius: '46px',
        padding: '7px',
        boxShadow: '0 0 0 1px #555, 0 0 0 3px #1a1a1a, 0 24px 52px rgba(0,0,0,0.28)',
      }}
    >
      {/* Screen — image fills this completely, overlays sit on top */}
      <div
        style={{
          borderRadius: '39px',
          overflow: 'hidden',
          lineHeight: 0,
          position: 'relative',
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />

        {/* Notch — overlaid at top centre */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '108px',
            height: '25px',
            background: '#1a1a1a',
            borderRadius: '0 0 16px 16px',
            pointerEvents: 'none',
          }}
        />

        {/* Home indicator — overlaid at bottom centre */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            background: 'rgba(0,0,0,0.25)',
            borderRadius: '4px',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

// ─── Annotated After phone ───────────────────────────────────────────────────
// Dashed terracotta highlight boxes only — no text labels.
// top/height: px from frame top. left/right: px from frame edges (default 10px).
// Scale ref: 390×844 original → 216px screen width → factor ≈ 0.5538.

function AnnotatedPhone({
  src,
  alt,
  highlights,
}: {
  src: string
  alt: string
  highlights: Array<{ top: number; height: number; left?: string; right?: string }>
}) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <PhoneFrame src={src} alt={alt} />
      {highlights.map((h, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: `${h.top}px`,
            left: h.left ?? '10px',
            right: h.right ?? '10px',
            height: `${h.height}px`,
            border: '2px dashed #C1694F',
            borderRadius: '10px',
            pointerEvents: 'none',
            zIndex: 20,
          }}
        />
      ))}
    </div>
  )
}

// ─── Animation helpers ──────────────────────────────────────────────────────

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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-background rounded-2xl p-6 border border-border"
    >
      <div className="font-display text-4xl text-primary mb-2">{value}</div>
      <div className="font-sans text-sm text-text-secondary leading-snug">{label}</div>
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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

// ─── Main component ──────────────────────────────────────────────────────────

export default function ConstantCaseStudy() {
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
            <p className="section-label mb-4">Academic Project · Mobile Design</p>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text leading-tight mb-6 max-w-4xl text-balance">
              Constant — A journaling app{' '}
              <span className="text-primary">built for stressed students</span>
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.15}>
            <p className="font-sans text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              A habit-forming journaling app designed to help students manage stress and build
              emotional resilience — through guided reflections, mood tracking, and small daily wins.
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
                <p className="font-sans text-sm text-text">16 Weeks</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Type</p>
                <p className="font-sans text-sm text-text">Academic Project</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Tools</p>
                <p className="font-sans text-sm text-text">Figma · Miro · ChatGPT · Gemini</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Hero video ── */}
      <FadeUp delay={0.05} className="mt-0">
        <div className="px-6 md:px-8 lg:px-12 mt-12">
          <div className="container-inner">
            <div className="rounded-3xl overflow-hidden aspect-[16/7] bg-surface border border-border">
              <video
                src="/images/constant-hero.mp4"
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
                Students are overwhelmed — and they deserve better support.
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                As academic demands continue to rise, students are experiencing record levels of
                stress — often without the time, tools, or support to manage their mental
                well-being. <strong className="text-text font-semibold">87% of college students report feeling overwhelmed</strong> by
                their academic workload.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                The opportunity isn&apos;t just awareness — it&apos;s accessibility. Students need
                tools that feel{' '}
                <strong className="text-text font-semibold">supportive rather than clinical</strong>,
                and that fit naturally into their already-busy routines. Constant was designed
                to be that — a gentle daily companion that meets students where they are.
              </p>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── The Gap ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp>
            <p className="section-label mb-2">The Gap</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4 max-w-2xl">
              The data confirmed a mental health crisis hiding in plain sight
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Secondary research surfaced a troubling pattern: students are struggling in large
              numbers, but the support infrastructure isn&apos;t reaching them.
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard value="87%" label="of college students feel overwhelmed by their academic workload" delay={0} />
            <StatCard value="76%" label="experience moderate to severe psychological distress" delay={0.08} />
            <StatCard value="33%" label="received any mental health services in the past year" delay={0.16} />
            <StatCard value="7%" label="seek help when actively experiencing stress or depression" delay={0.24} />
          </div>
          <FadeUp delay={0.3} className="mt-8">
            <p className="font-sans text-sm text-text-muted italic max-w-xl">
              The gap between need and access is enormous. Professional therapy isn&apos;t always
              reachable — students need a low-stakes, daily tool that meets them where they are.
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
                Don&apos;t add to their load.{' '}
                <em className="not-italic text-primary">Reduce it.</em>
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-2xl">
                Constant makes stress management approachable through three core experiences —
                each designed around one principle: the smallest possible action that creates
                meaningful change.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    ),
                    title: 'Guided Reflections',
                    desc: 'Morning and evening prompts reduce cognitive load and make journaling feel effortless — no blank page, no pressure.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    ),
                    title: 'Mood & Pattern Tracking',
                    desc: 'Simple mood check-ins that help users identify emotional patterns and triggers over time — turning data into self-awareness.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    ),
                    title: 'Rewards & Growth',
                    desc: 'Positive reinforcement through streaks and insights encourages consistency without guilt — progress that feels earned, not forced.',
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

      {/* ── Solution Mockup ── */}
      <section className="bg-text py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="container-inner">
          {/* Heading */}
          <FadeUp className="text-center mb-16">
            <p className="font-sans text-xs font-semibold text-primary-light uppercase tracking-widest mb-3">
              The App in Action
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-background leading-snug max-w-xl mx-auto">
              See how Constant turns a stressful moment into a quiet, meaningful habit
            </h3>
          </FadeUp>

          {/* Video mockup */}
          <FadeUp delay={0.15} className="flex justify-center">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ width: '280px', aspectRatio: '9 / 19.5' }}
            >
              <video
                src="/images/constant-mockup.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </FadeUp>

          {/* Caption + CTA */}
          <FadeUp delay={0.3} className="text-center mt-10 flex flex-col items-center gap-5">
            <p className="font-sans text-sm text-background/40">
              Prototype walkthrough · Figma
            </p>
            <a
              href="https://www.figma.com/proto/U21Yd5sla7LqXzbqRwyjpf/Constant--Copy-?page-id=1079%3A3219&node-id=1401-4429&viewport=964%2C176%2C0.13&t=0OKroGyFJDmdtd7l-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1401%3A4429"
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

      {/* ── Design Strategy: Hooked Model ── */}
      <section className="bg-text py-24 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-16">
            <p className="font-sans text-xs font-semibold text-primary-light uppercase tracking-widest mb-3">
              Design Strategy
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-background leading-snug max-w-2xl mb-4">
              Designing for habit formation, not just task completion
            </h2>
            <p className="font-sans text-base text-background/60 leading-relaxed max-w-2xl">
              I applied Nir Eyal&apos;s Hooked Model as a design framework — not to make the app
              addictive, but to build genuine, healthy habits. Each product element maps to a
              stage that creates a positive feedback loop.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                stage: 'Trigger',
                color: 'bg-primary/20 text-primary-light',
                headline: 'What brings the user back?',
                body: 'Internal trigger: feeling stressed, anxious, or lonely. External trigger: gentle, well-timed push notifications and reflection reminders — never intrusive.',
              },
              {
                stage: 'Action',
                color: 'bg-primary/20 text-primary-light',
                headline: 'The simplest possible behavior',
                body: 'Low-friction journaling with guided prompts. Morning check-in takes under 2 minutes. The barrier to start is deliberately minimal.',
              },
              {
                stage: 'Variable Reward',
                color: 'bg-primary/20 text-primary-light',
                headline: 'Fulfilling, yet leaves them wanting more',
                body: 'Curated content, mood insights, streak milestones, and a Rewards Market with affiliated brand discounts. Each session reveals something new.',
              },
              {
                stage: 'Investment',
                color: 'bg-primary/20 text-primary-light',
                headline: 'What makes the next session better',
                body: 'Mood data, journal entries, and reflection history accumulate over time — creating a richer, more personalized experience with every use.',
              },
            ].map((item, i) => (
              <FadeUp key={item.stage} delay={i * 0.08}>
                <div className="bg-background/5 border border-background/10 rounded-2xl p-7 h-full">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full font-sans text-xs font-semibold uppercase tracking-wider mb-4 ${item.color}`}>
                    {item.stage}
                  </span>
                  <h4 className="font-sans font-semibold text-base text-background mb-2">{item.headline}</h4>
                  <p className="font-sans text-sm text-background/60 leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Insights ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Research Insights</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              Three findings that shaped every design decision
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <InsightCard
              number="01"
              title="Stigma prevents early help-seeking"
              body="Students wait until they're in crisis before seeking support. They need low-stakes, everyday tools that don't feel clinical or therapeutic — something they can reach for before things spiral."
              delay={0}
            />
            <InsightCard
              number="02"
              title="Support should feel personal, not like another task"
              body="Students shared that they were more likely to engage when an experience felt designed around their emotional state. The design needed to feel like genuine support — rewarding and personal, not a wellness checklist."
              delay={0.1}
            />
            <InsightCard
              number="03"
              title="Value must arrive in session one"
              body="Students abandon apps within 3 days if they don't see personal benefit. The app needed to deliver immediate, tangible value in the first session while laying the groundwork for long-term habits."
              delay={0.2}
            />
          </div>

          {/* Expert quote */}
          <FadeUp>
            <div className="bg-surface rounded-2xl p-8 border border-border max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Institutional Insight
              </p>
              <blockquote className="border-l-2 border-primary/40 pl-6 py-2">
                <p className="font-sans text-lg text-text-secondary leading-relaxed italic mb-3">
                  &ldquo;35% of students here at Thomas Jefferson University seek stress-related help.&rdquo;
                </p>
                <cite className="font-sans text-xs font-semibold text-primary uppercase tracking-wider not-italic">
                  Zoe Ann Gingold — Director, Office of Accessibility Services
                </cite>
              </blockquote>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mt-5">
                This conversation with the university&apos;s accessibility director grounded the
                research in real institutional data — and confirmed that student mental health
                support has a significant reach problem, not just an awareness one.
              </p>
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
              How might we help university students build emotional resilience through small,
              consistent daily actions — without adding to their mental load?
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ── Ideation ── */}
      <section className="section-padding">
        <div className="container-inner space-y-16">
          <SectionRow label="Ideation">
            <div>
              <h2 className="font-display text-3xl text-text leading-snug mb-6">
                Prioritizing features by impact, not excitement
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-2xl">
                After understanding user needs and constraints, I used a MoSCoW framework to
                prioritize features — separating what the app needed to be credible from what
                would make it remarkable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Must Have */}
                <div className="bg-surface rounded-2xl p-7 border border-border">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">Must Have</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Personalized reminders via push notifications',
                      'Notepad to freely write about feelings',
                      'Progress tracking through streaks and milestones',
                      'Mood tracking to log emotional well-being over time',
                      'AI-driven pattern insights after multiple entries',
                      'Onboarding guidance to orient new users',
                      'Clear and transparent privacy policy',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0 text-xs">→</span>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Should Have */}
                <div className="bg-surface rounded-2xl p-7 border border-border">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-text-muted" />
                    <h4 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">Should Have</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Streaks for daily journaling consistency',
                      'Pre-written prompts for quicker, guided entries',
                      'Photo attachments to enrich daily logs',
                      'Morning and evening structured reflections',
                      'Audio journaling for hands-free entries',
                      'Offline journaling when not connected',
                      'Flashbacks from this day last year',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-text-muted font-bold mt-0.5 flex-shrink-0 text-xs">→</span>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionRow>
        </div>
      </section>

      {/* ── Design Process ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-14">
            <p className="section-label mb-2">Design Process</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              From lo-fi to launch-ready in five stages
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              {
                step: '01',
                phase: 'Discover',
                items: ['Screener survey', 'Secondary research', 'Competitive analysis', 'Stakeholder interview'],
              },
              {
                step: '02',
                phase: 'Define',
                items: ['Affinity mapping', 'SWOT analysis', 'MoSCoW prioritization', 'Hooked Model mapping'],
              },
              {
                step: '03',
                phase: 'Design',
                items: ['Information architecture', 'User flows', 'Lo-fi wireframes', 'Style guide & UI kit'],
              },
              {
                step: '04',
                phase: 'Test',
                items: ['Hi-fi prototype', 'Usability testing (6 students)', '12 core tasks', 'Issue documentation'],
              },
              {
                step: '05',
                phase: 'Deliver',
                items: ['Iterated UI designs', 'Design system', 'Handoff-ready prototype', 'Before/after documentation'],
              },
            ].map((item, i) => (
              <FadeUp key={item.phase} delay={i * 0.07}>
                <div className="bg-background rounded-2xl p-6 border border-border h-full">
                  <div className="font-display text-2xl text-primary/30 mb-1">{item.step}</div>
                  <h4 className="font-sans font-semibold text-base text-text mb-4">{item.phase}</h4>
                  <ul className="space-y-2">
                    {item.items.map((task) => (
                      <li key={task} className="font-sans text-xs text-text-secondary leading-relaxed">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usability Testing ── */}
      <section className="section-padding">
        <div className="container-inner">
          <FadeUp className="mb-12">
            <p className="section-label mb-2">Usability Testing</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-xl">
              Validated with real students, not assumptions
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mt-4 max-w-2xl">
              To validate the experience, I conducted moderated usability testing focused on
              functionality, clarity, and ease of use — asking participants to complete core tasks
              like mood tracking, daily reflections, and browsing curated content.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '6', label: 'Participants' },
              { value: '88.9%', label: 'Task success rate' },
              { value: '81.5%', label: 'Confidence rating' },
              { value: '12', label: 'Core tasks tested' },
            ].map((item, i) => (
              <StatCard key={item.label} value={item.value} label={item.label} delay={i * 0.08} />
            ))}
          </div>

          <FadeUp>
            <div className="bg-surface rounded-2xl p-7 border border-border max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Additional Testing Data
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '30 min', label: 'Average session duration' },
                  { value: '37', label: 'Usability issues identified' },
                  { value: '21', label: 'Delighters noted by participants' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-display text-2xl text-text mb-1">{item.value}</div>
                    <div className="font-sans text-xs text-text-secondary leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Iterations ── */}
      <section className="bg-surface py-20 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp className="mb-14">
            <p className="section-label mb-2">Iterations</p>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug max-w-2xl">
              Three changes that made the biggest difference
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mt-4 max-w-2xl">
              I charted every usability issue by frequency and severity, then focused on changes
              that would resolve the most friction with the least disruption to the established
              design language.
            </p>
          </FadeUp>

          <div className="space-y-12">
            {[
              {
                number: '01',
                problem: 'Insights buried inside the profile section',
                insight: "Participants couldn't find their mood and journaling insights — they expected a dedicated space, not a settings-adjacent location.",
                fix: 'Separated Insights from the profile section and elevated it as its own navigation item, making it consistently discoverable from anywhere in the app.',
                before: { src: '/images/constant-before-1.png', alt: 'Before: Insights inside profile section' },
                after:  { src: '/images/constant-after-1.png',  alt: 'After: Insights as its own nav item' },
                // Insights nav item — taller box extending upward to include icon + label.
                highlights: [{ top: 418, height: 52, left: '86px', right: '84px' }],
              },
              {
                number: '02',
                problem: 'The "Journal" entry point wasn\'t prominent enough',
                insight: "Participants were uncertain what the floating action button did — several tapped it hesitantly or missed it entirely during task flows.",
                fix: 'The floating journal button was redesigned to be more visually prominent and explicitly labeled — removing ambiguity about its purpose and reducing time-to-first-entry.',
                before: { src: '/images/constant-before-2.png', alt: 'Before: Ambiguous floating journal button' },
                after:  { src: '/images/constant-after-2.png',  alt: 'After: Prominent, labeled journal button' },
                // Box 1: feature card CTA — moved up vs before. Box 2: Journal floating button (right side).
                // Journal btn ≈ x:255–355, y:650–690 in 390×844 → scaled: left≈148px, right≈14px, top≈367px.
                highlights: [
                  { top: 255, height: 60 },
                  { top: 392, height: 30, left: '140px', right: '12px' },
                ],
              },
              {
                number: '03',
                problem: 'No clear signal to switch between articles and videos',
                insight: "Users didn't recognise that the curated content section contained video content alongside articles — the toggle affordance wasn't obvious enough.",
                fix: 'Added clear visible text labels to indicate that users can switch to the videos section, replacing the icon-only pattern that tested poorly.',
                before: { src: '/images/constant-before-3.png', alt: 'Before: Icon-only content type toggle' },
                after:  { src: '/images/constant-after-3.png',  alt: 'After: Labelled article/video toggle' },
                // Articles/Videos tab — moved down a bit, taller. ~44–84px from screen top → top≈38, height≈26.
                highlights: [{ top: 38, height: 26 }],
              },
            ].map((item, i) => (
              <FadeUp key={item.number} delay={i * 0.06}>
                <div className="bg-background rounded-3xl overflow-hidden border border-border">

                  {/* ── Problem header ── */}
                  <div className="flex items-start gap-4 p-7 pb-6">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.number}
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-text leading-snug mb-1">{item.problem}</h4>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.insight}</p>
                    </div>
                  </div>

                  {/* ── Before / After screenshots ── */}
                  <div className="flex justify-center items-end gap-12 px-7 pb-7">
                    {/* Before */}
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-text-muted uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                        Before
                      </span>
                      <PhoneFrame src={item.before.src} alt={item.before.alt} />
                    </div>

                    {/* Arrow divider */}
                    <div className="flex items-center pb-6 text-primary text-xl">→</div>

                    {/* After — with themed highlight annotations */}
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-primary uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        After
                      </span>
                      <AnnotatedPhone
                        src={item.after.src}
                        alt={item.after.alt}
                        highlights={item.highlights}
                      />
                    </div>
                  </div>

                  {/* ── What changed ── */}
                  <div className="bg-primary/5 border-t border-border px-7 py-5">
                    <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">What changed</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.fix}</p>
                  </div>

                </div>
              </FadeUp>
            ))}
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
                    'Applying the Hooked Model structured the experience around sustainable habit formation, not shallow engagement.',
                    'Usability testing with students surfaced emotional and cognitive friction I wouldn\'t have found through solo review.',
                    'Keeping the interface intentionally minimal reduced overwhelm and made repeat use feel effortless.',
                    'Iterating based on real feedback strengthened the app\'s tone and approachability.',
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
                    'Test habit loops over a longer period to better understand where users drop off after the initial sessions.',
                    'Explore alternative notification triggers that feel more contextual and less intrusive.',
                    'Validate emotional impact with follow-up studies beyond initial usability sessions.',
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
                    'Expand testing to include students with different stress levels, schedules, and academic disciplines.',
                    'Explore deeper personalization based on mood patterns and usage history.',
                    'Measure long-term engagement to assess whether journaling habits are sustained beyond onboarding.',
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

          {/* Biggest Learning */}
          <FadeUp>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl">
              <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Biggest Learning
              </p>
              <p className="font-display text-xl text-text leading-snug">
                Behavior change happens through small, repeatable actions — not complex features.
                Designing for emotional well-being meant prioritizing consistency, trust, and
                low-effort interactions over productivity metrics or aggressive engagement tactics.
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
              <h3 className="font-display text-3xl text-text">Usher — AI Academic App</h3>
              <p className="font-sans text-sm text-text-secondary mt-2">
                Thesis capstone · Mobile design · 92% task success rate
              </p>
            </div>
            <Link
              href="/work/usher"
              className="btn-secondary inline-flex items-center gap-2 shrink-0"
            >
              View Case Study
              <ArrowUpRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
