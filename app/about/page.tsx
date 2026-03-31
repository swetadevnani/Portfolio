'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '@/components/Header'
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
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="pt-32 pb-24 container-inner section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl border-2 border-primary/20 translate-x-4 translate-y-4"
              />
              <div className="relative bg-surface rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
                <img
                  src="/images/aboutme.jpg"
                  alt={siteConfig.fullName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans text-xs text-primary font-semibold tracking-widest uppercase mb-5">
              About Me
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6">
              Hi, I&apos;m {siteConfig.name}.
            </h1>
            <p className="font-sans text-xl text-text-secondary leading-relaxed mb-6">
              A product designer who started by shaping physical spaces and found her way to designing digital ones.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              I care deeply about people — what they need, how they think, and what makes their lives a little easier. That empathy is the thread that runs through everything I design.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. THE DESIGNER ─────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="font-sans text-xs text-primary font-semibold tracking-widest uppercase mb-6">
              The Designer
            </p>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-text leading-snug max-w-4xl mb-12">
              &ldquo;I don&apos;t just make things look good — I make them work, feel right, and mean something to the people using them.&rdquo;
            </blockquote>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <FadeIn delay={0.1}>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                With 2+ years of experience across SaaS, mobile, and web, my process is rooted in empathy — understanding people deeply before touching a single frame. I take end-to-end ownership, from messy early research to polished handoffs.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                I thrive in fast-paced environments where design directly shapes product direction. I work closely with PMs to define strategy and with engineers to make sure what we ship actually reflects the intent.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. PHYSICAL SPACES ──────────────────────────── */}
      <section className="py-24 container-inner section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <p className="font-sans text-xs text-primary font-semibold tracking-widest uppercase mb-4">
              Where It Started
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-text leading-snug mb-8">
              Before pixels,<br />I designed spaces.
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
              My design journey didn&apos;t start on a screen — it started with floor plans, material palettes, and spatial flow. I spent years working in interior and architectural design, learning how space makes people feel, move, and behave.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Those years taught me that great design is invisible — people only notice it when it fails. That principle has followed me into everything I do, pixel by pixel.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-surface shadow-card">
              <img
                src="/images/about-space-1.jpg"
                alt="Interior design work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-surface shadow-card mt-10">
              <img
                src="/images/about-space-2.jpg"
                alt="Architectural design work"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. THE DIGITAL SHIFT ────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn delay={0.1} className="lg:order-2">
              <p className="font-sans text-xs text-primary font-semibold tracking-widest uppercase mb-4">
                The Shift
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-text leading-snug mb-8">
                What if the experience extended beyond the walls?
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I kept finding myself drawn to the digital side — the way apps and interfaces could shape behavior, build habits, and connect people. The overlap between physical and digital experience design felt deeply natural to me.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                That curiosity led me to pursue a Master&apos;s in UX Design — to go deeper into the psychology, research methods, and craft of designing for screens. It was a deliberate pivot, and one of the best decisions I&apos;ve made.
              </p>
            </FadeIn>
            <FadeIn className="lg:order-1">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-card">
                <img
                  src="/images/about-masters.jpg"
                  alt="Masters in UX Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. BEYOND THE SCREEN ────────────────────────── */}
      <section className="py-28 container-inner section-padding">
        <FadeIn className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-text">
            &amp; when I&apos;m not designing...
          </h2>
        </FadeIn>

        {/* Books */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <FadeIn>
            <div className="flex gap-5 items-end justify-center">
              {[
                { file: 'about-book-1.jpg', rotate: '-4deg' },
                { file: 'about-book-2.jpg', rotate: '2deg' },
                { file: 'about-book-3.jpg', rotate: '-2deg' },
              ].map(({ file, rotate }, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-card flex-1 aspect-[2/3] bg-surface"
                  style={{ transform: `rotate(${rotate})` }}
                >
                  <img
                    src={`/images/${file}`}
                    alt={`Book ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-sans text-xs text-primary font-semibold tracking-widest uppercase mb-4">
              Reading
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-text mb-5">
              Books are my best friend
            </h3>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Books are how I think through ideas I can&apos;t yet articulate. I gravitate towards psychology, design, human behavior, and the occasional novel I can&apos;t put down. There&apos;s usually one open on my nightstand and one on my phone.
            </p>
          </FadeIn>
        </div>

        {/* Dogs, Cycling, Food */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: 'about-dog.jpg',
              label: 'Dogs',
              text: 'Pure, unconditional joy. There is no explaining it — you either get it or you don\'t.',
            },
            {
              img: 'about-cycling.jpg',
              label: 'Cycling',
              text: 'My favorite way to explore a new city and clear my head at the same time.',
            },
            {
              img: 'about-food.jpg',
              label: 'Good Food',
              text: 'Trying new restaurants is basically a design research activity. Context, experience, and delight — all in one plate.',
            },
          ].map(({ img, label, text }, i) => (
            <FadeIn key={label} delay={i * 0.12}>
              <div className="rounded-3xl overflow-hidden bg-surface shadow-card group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/images/${img}`}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl text-text mb-2">{label}</h4>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
