'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/data'

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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const stats = [
  { value: '91%', desc: 'Reduction in manual scheduling coordination', project: 'NestAid' },
  { value: '18%', desc: 'Faster time-to-primary-CTA', project: 'Inverse Paradox' },
  { value: '92%', desc: 'Task success rate', project: 'Usher thesis project' },
]

const education = [
  {
    degree: 'M.S. User Experience & Interaction Design',
    school: 'Thomas Jefferson University · Philadelphia, PA',
    period: 'Jan 2024 – Dec 2025',
    gpa: 'GPA 3.9 / 4.0',
  },
  {
    degree: 'Bachelor of Architecture',
    school: 'Gujarat Technological University · India',
    period: 'Aug 2014 – May 2019',
    gpa: 'GPA 3.6 / 4.0',
  },
]

const timeline = [
  {
    period: 'Dec 2025 – Present',
    role: 'Product Designer',
    company: 'NestAid · Remote',
    desc: 'First designer on a B2B AI operations platform for caregiving agencies. Shipped a full web platform in one week using vibe coding with Claude and Cursor. Built scheduling flows that cut manual coordination by 91%.',
  },
  {
    period: 'Aug – Dec 2025',
    role: 'UX Design Intern',
    company: 'Inverse Paradox · Remote',
    desc: 'Designed 30+ responsive screens across 3 client verticals. Restructured navigation architecture using Hotjar data, reducing time-to-primary-CTA by 18% within the first release cycle.',
  },
  {
    period: 'Jan 2026 – Present',
    role: 'Volunteer UX Researcher',
    company: 'Code for Philly · Philadelphia',
    desc: 'Recruited 6 hard-to-reach users with bipolar disorder through zero-budget grassroots outreach. Produced structured product requirements that directly shaped MVP design decisions for a civic mental health tool.',
  },
]

const interests = [
  { label: 'Reading', desc: 'Psychology, design pattern systems — and the irrational behavior I can\'t put down.' },
  { label: 'Cycling', desc: 'My favorite way to explore a city and clear my head at the same time.' },
  { label: 'Dogs', desc: 'Pure, unconditional joy. No experience needed.' },
  { label: 'Good Food', desc: 'New restaurants. New travel. Memories worth every bite.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section className="pt-32 pb-24 border-b border-border">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-sans text-sm text-text-secondary">Open to full-time Product Design roles</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6">
                Hi, I&apos;m {siteConfig.name}.<br />
                <em>I design products<br />people actually use.</em>
              </h1>

              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-md">
                Product designer with 2+ years shipping AI-informed SaaS products — from first research question to production-ready interface. Based in Philadelphia. Built with architecture. Powered by curiosity.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['Philadelphia, PA', 'Open to relocation', 'SaaS · 0→1 · AI-native'].map((tag) => (
                  <span key={tag} className="font-sans text-xs text-text-secondary bg-surface border border-border rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <a
                  href="/resume.pdf"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Download Resume
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 rounded-3xl border-2 border-primary/20 translate-x-4 translate-y-4" />
                <div className="relative bg-surface rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
                  <img
                    src="/images/sweta.JPG"
                    alt={siteConfig.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 2. THE DESIGNER ──────────────────────────────── */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-6">The Designer</p>
            <h2 className="section-title mb-10 max-w-xl">
              I think in systems.<br />I ship in sprints.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-3xl">
              I don&apos;t start with screens. I start with questions — who is this for, what are they actually trying to do, and where is the current experience failing them? That research-first instinct shapes every decision I make before I open Figma.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <blockquote className="border-l-2 border-primary pl-6 mb-8 max-w-2xl">
              <p className="font-display text-xl text-text leading-relaxed italic">
                &ldquo;I don&apos;t just make things look good — I make them work, feel right, and mean something to the people using them.&rdquo;
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-6 max-w-3xl">
              My workflow is AI-native by design. I use Claude and Cursor to compress discovery timelines and ship production-ready interfaces faster — at NestAid, I shipped a fully functional web platform in one week without engineering support, eliminating the design-to-handoff cycle entirely. That&apos;s not a shortcut. That&apos;s a new way of owning the full stack of design.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-14 max-w-3xl">
              I take end-to-end ownership — from messy early research through polished handoff — and I stay close to engineering so what gets shipped actually reflects the intent. I&apos;ve worked across 0→1 products, multi-user SaaS platforms, and data-driven redesigns with measurable outcomes.
            </p>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-border">
            {stats.map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.1}>
                <p className="font-display text-4xl text-text mb-2">{s.value}</p>
                <p className="font-sans text-sm text-text-muted leading-snug">{s.desc} — <span className="text-primary">{s.project}</span></p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHERE IT STARTED ──────────────────────────── */}
      <section className="py-24 border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-6">Where It Started</p>
            <h2 className="section-title mb-6 max-w-3xl">
              Before pixels, I designed spaces people walked through every day.
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-4 max-w-2xl">
              My design journey didn&apos;t begin on a screen — it began with floor plans, material palettes, and spatial flow. I earned a Bachelor of Architecture from Gujarat Technological University, and spent years working across residential, commercial, and hospitality projects.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-12 max-w-2xl">
              The most formative of them: one of Ahmedabad&apos;s largest amusement parks — a space visited by thousands of people every single day. Designing for that kind of scale taught me something that never left: great design is invisible. People only notice it when it breaks.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="grid grid-cols-2 gap-5 mb-8">
            {/* Left: large image */}
            <div className="rounded-2xl overflow-hidden bg-surface shadow-card row-span-2 relative aspect-[3/4] flex items-end p-5">
              <img src="/images/about-space-1.jpg" alt="Amusement Park, Ahmedabad" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="font-sans text-xs font-semibold text-text">Project lead at Ahmedabads biggest Amusement park project</p>
              </div>
            </div>
            {/* Right top */}
            <div className="rounded-2xl overflow-hidden bg-surface shadow-card relative aspect-[4/3] flex items-end p-4">
              <img src="/images/about-space-2.jpg" alt="Commercial project" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="font-sans text-xs font-semibold text-text">Residential Project Image (Ahmedabad)</p>
              </div>
            </div>
            {/* Right bottom */}
            <div className="rounded-2xl overflow-hidden bg-surface shadow-card relative aspect-[4/3] flex items-end p-4">
              <img src="/images/about-space-3.jpg" alt="Hospitality / Residential space" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="font-sans text-xs font-semibold text-text">Hospitality Project Image (Bogota Cafe, Ahmedabad)</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a href="#" className="font-sans text-sm text-primary underline underline-offset-4 hover:text-primary/70 transition-colors mb-12 inline-block">
              See all architecture & interior work →
            </a>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mt-8">
              The spatial thinking I built over those years — how people move through environments, where friction accumulates, what makes a flow feel effortless — maps directly onto how I think about user journeys and product architecture today. Different medium. Same problem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. THE SHIFT ─────────────────────────────────── */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-6">The Shift</p>
            <h2 className="section-title mb-8 max-w-2xl">
              A deliberate pivot toward digital experience.
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5 max-w-2xl">
              I kept finding myself drawn to the digital side — the way interfaces could shape behavior, build habits, and connect people. The overlap between physical and digital design felt natural to me. I wanted to go deeper into the research methods, psychology, and craft of designing for screens.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-12 max-w-2xl">
              That curiosity led me to pursue a Master&apos;s in UX and Interaction Design at Thomas Jefferson University in Philadelphia — graduating with a 3.9 GPA in December 2025. It was a deliberate pivot, and one of the best decisions I&apos;ve made.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {education.map((e, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-7 shadow-card border border-border">
                  <h3 className="font-display text-lg text-text mb-1">{e.degree}</h3>
                  <p className="font-sans text-sm text-text-secondary mb-1">{e.school}</p>
                  <p className="font-sans text-xs text-text-muted">{e.period} · {e.gpa}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="font-sans text-sm text-text-muted mb-5">
              I&apos;ve kept learning since. Certifications that directly shape how I work today:
            </p>
            <div className="flex flex-wrap gap-3">
              {['Google UX Design Professional Certificate', 'Design Thinking in the Age of AI · 2026', 'GenAI for UX Designers · 2026'].map((cert) => (
                <span key={cert} className="tag-pill">{cert}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. CURRENTLY ─────────────────────────────────── */}
      <section className="py-24 border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-4">Currently</p>
            <h2 className="section-title mb-14">
              Shipping products.<br />Giving back to the community.
            </h2>
          </FadeIn>

          <div className="divide-y divide-border">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-8">
                  <div>
                    <p className="font-sans text-xs text-text-muted mb-1">{item.period}</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text mb-0.5">{item.role}</p>
                    <p className="font-sans text-xs text-text-muted mb-3">{item.company}</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ACTIVE AREAS ──────────────────────────────── */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-4">Active Areas</p>
            <p className="section-subtitle mb-10">
              Lately, I&apos;m usually cycling around Philadelphia, alone or in a pack, or building:
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {interests.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="bg-background border border-border rounded-2xl p-6 shadow-card">
                  <h4 className="font-display text-lg text-text mb-3">{item.label}</h4>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  )
}
