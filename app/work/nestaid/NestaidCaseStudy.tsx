'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Bot, TrendingUp, AlertTriangle, Lightbulb, RefreshCw } from 'lucide-react'
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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs font-semibold text-primary tracking-widest uppercase mb-4">
      {children}
    </p>
  )
}

function StatCard({
  value,
  label,
  sub,
  delay = 0,
}: {
  value: string
  label: string
  sub?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-background rounded-2xl p-6 border border-border"
    >
      <div className="font-display text-4xl text-primary mb-1">{value}</div>
      <div className="font-sans text-sm font-semibold text-text mb-1">{label}</div>
      {sub && <div className="font-sans text-xs text-text-muted">{sub}</div>}
    </motion.div>
  )
}

function InsightCard({
  icon: Icon,
  title,
  body,
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  body: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-background rounded-2xl p-7 border border-border"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon size={18} className="text-primary" />
      </div>
      <h4 className="font-display text-lg text-text mb-2 leading-snug">{title}</h4>
      <p className="font-sans text-sm text-text-secondary leading-relaxed">{body}</p>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NestaidCaseStudy() {
  return (
    <div className="bg-background min-h-screen">
      <CaseStudyHeader />

      {/* ── Hero ── */}
      <section className="pt-28 pb-0 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <FadeUp>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-primary transition-colors duration-200 mb-10"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
          </FadeUp>

          <FadeUp delay={0.05}>
            <p className="section-label mb-4">SaaS · AI Agents · Product Design · UX Research</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text leading-[1.08] mb-6 max-w-4xl">
              NestAid — Reimagining Caregiving Operations with AI
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="font-sans text-lg text-text-secondary leading-relaxed max-w-2xl mb-12">
              What started as a marketplace connecting elderly people with caregivers evolved — through research — into a B2B AI operations platform that helps existing caregiving agencies manage their workforce, scheduling, and tasks using AI agents.
            </p>
          </FadeUp>

          {/* Meta bar */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-16">
              {[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Timeline', value: 'Dec 2025 — Present' },
                { label: 'Type', value: 'SaaS · AI Agents' },
                { label: 'Status', value: 'Active · Ongoing' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-background px-6 py-5">
                  <p className="font-sans text-xs text-text-muted uppercase tracking-wider mb-1">{label}</p>
                  <p className="font-sans text-sm font-semibold text-text">{value}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Hero video — add file: public/images/nestaid-hero.mp4 */}
          <FadeUp delay={0.25}>
            <div className="w-full rounded-3xl overflow-hidden bg-surface aspect-[16/7] shadow-card mb-6">
              <video
                src="/images/nestaid-hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="NestAid product walkthrough"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── The Original Brief ── */}
      <section className="py-24 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-20 mb-6">
            <div className="pt-1">
              <SectionLabel>Where We Started</SectionLabel>
            </div>
            <div>
              <FadeUp>
                <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-6">
                  The original idea: connect elderly people directly with caregivers.
                </h2>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  NestAid was founded on a straightforward observation — aging adults need help with everyday tasks, and finding trusted, vetted caregivers is hard. The initial product concept was a two-sided marketplace: elderly individuals or their families could browse and book caregivers on-demand.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  I joined as the first Product Designer in December 2025, embedded with the founding team from day one. My first responsibility was to validate the market before any UI was built.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Secondary Research ── */}
      <section className="py-24 px-6 md:px-8 lg:px-12 bg-surface">
        <div className="container-inner">
          <FadeUp>
            <SectionLabel>Secondary Research</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4 max-w-2xl">
              Before designing anything, we looked at the industry from the outside.
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-16">
              Secondary research gave us a macro view of the home caregiving market — its scale, its players, and critically, where the cracks were showing.
            </p>
          </FadeUp>

          {/* Market stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <StatCard value="$130B+" label="US Home Care Market" sub="2023 valuation, growing at 7.5% CAGR" delay={0} />
            <StatCard value="64.3%" label="Annual Caregiver Turnover" sub="Industry average, Home Care Pulse 2023" delay={0.1} />
            <StatCard value="80%+" label="Agencies Using Manual Scheduling" sub="Spreadsheets and phone calls" delay={0.2} />
            <StatCard value="$2,600" label="Cost to Replace One Caregiver" sub="Recruitment, training, onboarding" delay={0.3} />
          </div>

          {/* Research insights */}
          <FadeUp className="mb-6">
            <h3 className="font-display text-2xl text-text mb-10">What the data kept pointing to</h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InsightCard
              icon={AlertTriangle}
              title="Established brands are struggling with operations"
              body="Companies like Home Instead, Visiting Angels, and Comfort Keepers — with thousands of clients — are still managing caregiver schedules through fragmented, legacy tools. Coordination is a constant fire-fight."
              delay={0}
            />
            <InsightCard
              icon={TrendingUp}
              title="The staffing crisis is an operational crisis"
              body="With 64%+ annual turnover, the problem isn't finding caregivers — it's managing, retaining, and scheduling them efficiently. Coordinators spend 30–40% of their time purely on scheduling admin."
              delay={0.1}
            />
            <InsightCard
              icon={RefreshCw}
              title="No-shows cascade into bigger failures"
              body="A single missed shift creates a chain reaction: urgent replacements, unhappy clients, caregiver burnout, and potential care quality issues — all because of a broken scheduling process."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ── The Pivot ── */}
      <section className="py-24 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <div className="pt-1">
              <SectionLabel>The Pivot</SectionLabel>
            </div>
            <div>
              <FadeUp>
                <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-6">
                  The market already has caregiving companies. The opportunity is in helping them operate better.
                </h2>
              </FadeUp>

              {/* Pivot diagram */}
              <FadeUp delay={0.1} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center my-10">
                  <div className="bg-surface rounded-2xl p-6 border border-border">
                    <p className="font-sans text-xs text-text-muted uppercase tracking-wider mb-3">Original Model (B2C)</p>
                    <p className="font-display text-xl text-text mb-2">Elderly → NestAid → Caregiver</p>
                    <p className="font-sans text-sm text-text-secondary">A marketplace connecting individuals directly with caregivers on-demand.</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <RefreshCw size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                    <p className="font-sans text-xs text-primary uppercase tracking-wider mb-3">New Model (B2B SaaS)</p>
                    <p className="font-display text-xl text-text mb-2">NestAid → Caregiving Agencies</p>
                    <p className="font-sans text-sm text-text-secondary">An AI-powered operations platform that gives existing agencies the infrastructure to scale with confidence.</p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  Instead of competing with established caregiving companies, NestAid would serve them. The gap wasn't in the number of caregivers — it was in the tools and infrastructure to coordinate them at scale. The real opportunity was in the backend: scheduling, task management, coordination, and communication.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  This pivot fundamentally changed the product. We weren't building a marketplace anymore — we were building an intelligent operations layer for an entire industry.
                </p>
              </FadeUp>
            </div>
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
              How might we help caregiving agencies eliminate scheduling chaos and reduce operational overhead — so coordinators can focus on delivering quality care?
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ── Before & After ── */}
      <section className="py-24 px-6 md:px-8 lg:px-12 bg-surface">
        <div className="container-inner">
          <FadeUp>
            <SectionLabel>Before & After</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4 max-w-2xl">
              Two websites. Two completely different businesses.
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-16">
              As the business model evolved, so did the product. Here's a glimpse of what was designed for the original B2C concept versus where the product is heading now.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <FadeUp delay={0}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-border text-text-secondary font-sans text-xs font-semibold uppercase tracking-wider">
                    Before
                  </span>
                  <span className="font-sans text-sm text-text-muted">B2C Marketplace</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3] bg-background">
                  <img
                    src="/images/nestaid-before.png"
                    alt="NestAid original B2C website"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-sans text-sm text-text-secondary mt-4 leading-relaxed">
                  Designed for families searching for caregivers — a consumer-facing marketplace with browsing, booking, and caregiver profiles.
                </p>
              </div>
            </FadeUp>

            {/* After */}
            <FadeUp delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-wider">
                    After
                  </span>
                  <span className="font-sans text-sm text-text-muted">B2B SaaS Platform</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-card aspect-[4/3] bg-background">
                  <img
                    src="/images/nestaid-after.png"
                    alt="NestAid new B2B platform"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-sans text-sm text-text-secondary mt-4 leading-relaxed">
                  Redesigned for caregiving agencies — an operations platform centered around Nessa, AI-powered scheduling, and workforce management.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Nessa ── */}
      <section className="py-24 px-6 md:px-8 lg:px-12 bg-surface">
        <div className="container-inner">
          <FadeUp>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-4 max-w-2xl">
              Meet Nessa — NestAid's AI agent.
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-16">
              Nessa is the core value proposition of the new NestAid. An AI agent purpose-built for caregiving operations — handling scheduling, task delegation, shift management, and real-time coordination so coordinators can focus on care quality, not spreadsheets.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: Bot,
                title: 'Intelligent Scheduling',
                body: 'Nessa understands caregiver availability, client needs, and location proximity to auto-generate conflict-free schedules — and adapt instantly when shifts change.',
              },
              {
                icon: RefreshCw,
                title: 'No-Show Recovery',
                body: 'When a caregiver cancels or doesn\'t show, Nessa proactively identifies a replacement and notifies all parties — without a coordinator lifting a finger.',
              },
              {
                icon: TrendingUp,
                title: 'Task & Care Plan Management',
                body: 'Coordinators can assign care tasks to caregivers through Nessa, who tracks completion and flags any gaps in care delivery.',
              },
              {
                icon: Lightbulb,
                title: 'Operational Intelligence',
                body: 'Nessa surfaces patterns: which caregivers are burning out, which clients need more attention, and where scheduling bottlenecks are forming — before they become problems.',
              },
            ].map(({ icon, title, body }, i) => (
              <InsightCard key={title} icon={icon} title={title} body={body} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── My Role ── */}
      <section className="py-24 px-6 md:px-8 lg:px-12">
        <div className="container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <div className="pt-1">
              <SectionLabel>My Role</SectionLabel>
            </div>
            <div>
              <FadeUp>
                <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-8">
                  End-to-end design ownership from day one.
                </h2>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { phase: '01', title: 'Discovery & Research', items: ['Secondary market research', 'Competitive analysis of existing caregiving platforms', 'Stakeholder interviews with the founding team', 'Business model validation'] },
                  { phase: '02', title: 'Problem Framing', items: ['Synthesizing research into insight themes', 'Defining the B2B pivot opportunity', 'Reframing the problem statement', 'Aligning design strategy with business goals'] },
                  { phase: '03', title: 'Product Design', items: ['Nessa agent UX — conversation flows & task UI', 'Coordinator dashboard design', 'Scheduling interface', 'Wireframes & hi-fi prototypes'] },
                  { phase: '04', title: 'Ongoing', items: ['Iterating based on user feedback', 'Design system creation', 'Working directly with engineering', 'Participating in product strategy discussions'] },
                ].map(({ phase, title, items }, i) => (
                  <FadeUp key={phase} delay={i * 0.1}>
                    <div className="bg-surface rounded-2xl p-7 border border-border h-full">
                      <div className="font-sans text-xs text-primary font-semibold tracking-widest mb-2">{phase}</div>
                      <h4 className="font-display text-lg text-text mb-4">{title}</h4>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2 font-sans text-sm text-text-secondary">
                            <span className="text-primary mt-1">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ongoing banner ── */}
      <section className="py-16 px-6 md:px-8 lg:px-12 bg-primary/5 border-y border-primary/15">
        <div className="container-inner">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-primary mb-1">This is a live, ongoing project.</p>
                <p className="font-sans text-base text-text-secondary max-w-2xl">
                  NestAid is an active startup I&apos;m currently part of. This case study reflects the work done so far — research, pivot discovery, and early design. More to come as the product evolves.
                </p>
              </div>
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
              <h3 className="font-display text-3xl text-text">Usher Mobile App</h3>
              <p className="font-sans text-sm text-text-secondary mt-2">
                AI/ML · User Research · Mobile Design
              </p>
            </div>
            <Link
              href="/work/usher"
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
