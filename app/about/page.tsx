'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
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
  { label: 'Reading', emoji: '📚', desc: 'Psychology, design pattern systems — and the irrational behaviour I can\'t put down.', image: '/images/hobby-reading.jpg' },
  { label: 'Cycling', emoji: '🚴', desc: 'My favourite way to explore a city and clear my head at the same time.', image: '/images/hobby-cycling.jpg' },
  { label: 'Dogs', emoji: '🐶', desc: 'Pure, unconditional joy. No experience needed.', image: '/images/hobby-dogs.jpg' },
  { label: 'Good Food', emoji: '🍜', desc: 'New restaurants. New travel. Memories worth every bite.', image: '/images/hobby-food.jpg' },
]

function FlipCards() {
  const [flipped, setFlipped] = useState<number | null>(null)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {interests.map((item, i) => (
        <div
          key={item.label}
          className="relative h-64 cursor-pointer"
          style={{ perspective: '1000px' }}
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: 'preserve-3d',
              transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-card" style={{ backfaceVisibility: 'hidden' }}>
              <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-2xl">{item.emoji}</span>
                <h4 className="font-display text-lg text-white mt-1">{item.label}</h4>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                <p className="font-sans text-[10px] text-white">tap to flip</p>
              </div>
            </div>
            <div
              className="absolute inset-0 rounded-2xl bg-primary flex flex-col items-center justify-center p-6 text-center shadow-card"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <span className="text-3xl mb-4">{item.emoji}</span>
              <h4 className="font-display text-xl text-white mb-3">{item.label}</h4>
              <p className="font-sans text-xs text-white/85 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20">
        <div className="container-inner section-padding">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-sans text-sm text-text-secondary">Open to opportunities</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.05}>
              <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6">
                Hi, I&apos;m {siteConfig.name}.<br />
                <em>I design products<br />people actually use.</em>
              </h1>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-md">
                Product designer with 2+ years shipping AI-informed SaaS products — from first research question to production-ready interface. Based in Philadelphia. Built with architecture. Powered by curiosity.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Philadelphia, PA', 'Open to relocation', 'SaaS · 0→1 · AI-native'].map((tag) => (
                  <span key={tag} className="font-sans text-xs text-text-secondary bg-surface border border-border rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href="/resume.pdf" download="Sweta_Devnani_Resume.pdf" className="btn-secondary inline-flex items-center gap-2">
                  <Download size={14} /> Resume
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 rounded-3xl border-2 border-primary/20 translate-x-4 translate-y-4" />
                <div className="relative bg-surface rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
                  <img src="/images/sweta.JPG" alt={siteConfig.fullName} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── MY STORY ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start mb-20">
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-3">My Story</p>
              <h2 className="section-title">From buildings<br />to interfaces.</h2>
            </div>
            <div>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I started my career as an architect and interior designer — spending years working across residential, commercial, and hospitality projects in India. Designing at that scale taught me to think in systems: how people move through environments, where friction builds, what makes a flow feel effortless.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Those instincts didn&apos;t leave when I moved into product design. I kept finding myself drawn to the digital side — the way interfaces shape behavior, build habits, and connect people. So I made a deliberate pivot: a Master&apos;s in UX and Interaction Design at Thomas Jefferson University in Philadelphia, graduating with a 3.9 GPA in December 2025.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                Different medium. Same problem. The job is always to make the experience feel right — even the parts that feel invisible.
              </p>
              <a href="/playground" className="font-sans text-sm text-primary underline underline-offset-4 hover:text-primary/70 transition-colors">
                See my architecture & interior work →
              </a>
            </div>
          </FadeIn>

          {/* Architecture photo */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
                <img src="/images/sweta-architecture.jpg" alt="Sweta on an architecture project site" className="w-full h-full object-cover object-center" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
                <img src="/images/about-space-3.jpg" alt="Farmhouse project" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── EDUCATION ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-3">Education</p>
              <h2 className="section-title">Always<br />learning.</h2>
            </div>
            <div>
              <div className="space-y-4 mb-10">
                {education.map((e, i) => (
                  <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                    <h3 className="font-display text-lg text-text mb-1">{e.degree}</h3>
                    <p className="font-sans text-sm text-text-secondary mb-1">{e.school}</p>
                    <p className="font-sans text-xs text-text-muted">{e.period} · {e.gpa}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-text-muted mb-4">Certifications that directly shape how I work:</p>
              <div className="flex flex-wrap gap-3">
                {['Google UX Design Professional Certificate', 'Design Thinking in the Age of AI · 2026', 'GenAI for UX Designers · 2026'].map((cert) => (
                  <span key={cert} className="tag-pill">{cert}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── EXPERIENCE ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-3">Experience</p>
              <h2 className="section-title">Shipping &<br />giving back.</h2>
            </div>
            <div className="divide-y divide-border">
              {timeline.map((item, i) => (
                <div key={i} className="py-8 first:pt-0">
                  <p className="font-sans text-xs text-text-muted mb-1">{item.period}</p>
                  <p className="font-sans text-sm font-semibold text-text mb-0.5">{item.role}</p>
                  <p className="font-sans text-xs text-primary mb-3">{item.company}</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── OUTSIDE WORK ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="mb-10">
            <p className="section-label mb-3">Outside Work</p>
            <h2 className="section-title mb-1">This is where<br />you&apos;ll find me.</h2>
            <p className="font-sans text-xs text-text-muted mt-3">Tap the cards ↓</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FlipCards />
          </FadeIn>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
