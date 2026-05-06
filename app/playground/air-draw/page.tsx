'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
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

export default function AirDrawPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-inner section-padding">
          <FadeIn>
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/40 hover:text-white/70 transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Back to Playground
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Computer Vision', 'Gesture UI', 'MediaPipe', 'Chrome Extension Concept'].map(t => (
                <span key={t} className="font-sans text-xs text-white/50 bg-white/8 border border-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
              Air Draw
            </h1>
            <p className="font-sans text-lg text-white/50 max-w-xl leading-relaxed">
              A gesture-controlled drawing tool built in the browser — and the problem it was actually designed to solve.
            </p>
          </FadeIn>

          {/* Preview image / live link */}
          <FadeIn delay={0.1} className="mt-12">
            <div className="relative rounded-3xl overflow-hidden border border-white/10" style={{ minHeight: 480 }}>
              <img
                src="/images/air-draw-preview.jpg"
                alt="Air Draw in action"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: 480 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <span className="flex items-center gap-1.5 font-sans text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full w-fit mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live experiment
                  </span>
                  <p className="font-sans text-sm text-white/40">Draw with just your index finger — no touch, no stylus.</p>
                </div>
                <a
                  href="https://air-draw-steel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white bg-primary hover:bg-primary/80 px-5 py-2.5 rounded-full transition-colors shrink-0"
                >
                  Try it live <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 border-t border-white/8">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <FadeIn>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Problem</p>
              <h2 className="font-display text-3xl text-white leading-snug">Presenting is harder than it looks.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-white/55 leading-relaxed mb-5">
                I present a lot — design reviews, research walkthroughs, stakeholder syncs. And every single time, I run into the same friction: I want to <em className="text-white/75 not-italic">point something out on screen</em>. Circle a specific UI element. Draw attention to one detail buried in a dense layout.
              </p>
              <p className="font-sans text-base text-white/55 leading-relaxed mb-5">
                The options are clunky. Laser pointer tools require extra software. Screen annotation apps slow everything down. Moving your mouse erratically doesn&apos;t communicate the same way a quick circle or underline does.
              </p>
              <p className="font-sans text-base text-white/55 leading-relaxed">
                I kept thinking: your hand is right there. Why can&apos;t you just point with it?
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Hypothesis */}
      <section className="py-20 border-t border-white/8">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <FadeIn>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Hypothesis</p>
              <h2 className="font-display text-3xl text-white leading-snug">What if you could draw on any screen with just your finger?</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-white/55 leading-relaxed mb-5">
                The concept I had in mind was a lightweight Chrome extension — something you&apos;d toggle on before a presentation. Your webcam would track your index finger in real time, and as you moved it in front of the screen, it would draw directly on top of whatever page or slide you had open.
              </p>
              <p className="font-sans text-base text-white/55 leading-relaxed mb-5">
                No extra hardware. No context switching. Just raise your hand, point, draw, and move on.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mt-8">
                <p className="font-sans text-sm text-white/40 mb-2 uppercase tracking-widest text-xs">The extension concept</p>
                <p className="font-display text-xl text-white mb-4">
                  Toggle on → finger tracked → draw on any page → toggle off, canvas clears.
                </p>
                <p className="font-sans text-sm text-white/40 leading-relaxed">
                  Clean. Invisible when you don&apos;t need it. Immediately useful when you do.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-20 border-t border-white/8">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <FadeIn>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3">What I Built</p>
              <h2 className="font-display text-3xl text-white leading-snug">A proof of concept. Fast.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-white/55 leading-relaxed mb-5">
                I built Air Draw as a browser-based prototype using MediaPipe for hand landmark detection. Your index fingertip is tracked in real time through the webcam, and as it moves, it leaves a trail on an HTML canvas layered over the page.
              </p>
              <p className="font-sans text-base text-white/55 leading-relaxed mb-5">
                The goal wasn&apos;t a polished product — it was a working answer to a specific question: <em className="text-white/75 not-italic">Is this technically feasible with browser APIs alone?</em> Turns out, yes. The latency is low enough, the tracking is accurate enough, and the overall feel is surprisingly natural.
              </p>
              <p className="font-sans text-base text-white/55 leading-relaxed">
                I used Claude and Cursor to accelerate the build — not to avoid thinking, but to collapse the time between idea and testable prototype. From hypothesis to live experiment: under 48 hours.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {['MediaPipe Hands', 'HTML Canvas API', 'Webcam / getUserMedia', 'Vanilla JS', 'Deployed on Vercel'].map(t => (
                  <span key={t} className="font-sans text-xs text-white/50 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 border-t border-white/8">
        <div className="container-inner section-padding">
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-white/4 p-10 md:p-14 text-center max-w-3xl mx-auto">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">What This Is Really About</p>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-snug mb-6">
                This isn&apos;t about vibe coding. It&apos;s about problem-solving.
              </h2>
              <p className="font-sans text-base text-white/50 leading-relaxed mb-5">
                Air Draw exists because I noticed a real friction point, formed a specific hypothesis, and then validated it by building the smallest possible thing that could answer my question.
              </p>
              <p className="font-sans text-base text-white/50 leading-relaxed mb-8">
                That&apos;s the part I want to be known for — not that I can ship fast with AI tools (though I can), but that I start from a genuine problem and stay focused on it through execution.
              </p>
              <a
                href="https://air-draw-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white bg-primary hover:bg-primary/80 px-6 py-3 rounded-full transition-colors"
              >
                Try Air Draw <ArrowUpRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
