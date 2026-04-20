'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const MAGIC_WORDS = ['magic', 'chaos', 'ideas', 'fun', 'work', 'magic']

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

const spacesProjects = [
  {
    title: 'Amusement Park',
    category: 'Public · Recreation',
    image: '/images/about-space-1.jpg',
    href: '/playground/spaces/amusement-park',
    accent: '#C0305E',
  },
  {
    title: 'Residential Interior',
    category: 'Residential',
    image: '/images/about-space-2.jpg',
    href: '/playground/spaces/residential',
    accent: '#8B4513',
  },
  {
    title: 'Farm House Architecture',
    category: 'Recreational',
    image: '/images/about-space-3.jpg',
    href: '/playground/spaces/bogota-cafe',
    accent: '#2D6A4F',
  },
]

export default function PlaygroundPage() {
  // Word swap
  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % MAGIC_WORDS.length), 2000)
    return () => clearInterval(t)
  }, [])

  // Blob cursor
  const [blob, setBlob] = useState({ x: -300, y: -300 })
  const heroRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setBlob({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-32 pb-28 border-b border-border overflow-hidden">

        {/* Blob that follows cursor */}
        <div
          className="pointer-events-none absolute z-0 w-[420px] h-[420px] rounded-full bg-primary/15 blur-[100px] transition-transform duration-75"
          style={{ left: blob.x - 210, top: blob.y - 210 }}
        />

        {/* Scattered floating tags — decorative */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[
            { label: 'Architecture',    top: '22%', left: '12%',  rotate: -6, delay: 0.40 },
            { label: 'AI Experiments',  top: '18%', right: '12%', rotate:  4, delay: 0.55 },
            { label: 'Interior Design', bottom: '28%', left: '10%', rotate:  3, delay: 0.65, mdOnly: true },
            { label: 'Side Projects',   bottom: '32%', right: '10%', rotate: -3, delay: 0.75, mdOnly: true },
            { label: 'Hospitality',     top: '44%', left: '7%',   rotate: -5, delay: 0.85, lgOnly: true },
            { label: 'Built with AI',   top: '42%', right: '7%',  rotate:  6, delay: 0.90, lgOnly: true },
          ].map(({ label, delay, rotate, mdOnly, lgOnly, ...pos }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10, rotate }}
              animate={{ opacity: 1, y: 0, rotate }}
              transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              style={pos as React.CSSProperties}
              className={`absolute font-sans text-xs font-medium text-text-secondary bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full shadow-card ${mdOnly ? 'hidden md:block' : ''} ${lgOnly ? 'hidden lg:block' : ''}`}
            >
              {label}
            </motion.div>
          ))}
        </div>

        {/* Centered content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-[340px]">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-6xl md:text-7xl lg:text-[88px] text-text leading-[0.92] max-w-3xl"
          >
            Where the<br />
            <motion.em
              key={wordIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-primary inline-block"
            >
              {MAGIC_WORDS[wordIdx]}
            </motion.em>{' '}happens.
          </motion.h1>
        </div>
      </section>

      {/* ── 2. SPACES DESIGN WORK ────────────────────────── */}
      <section className="py-24 border-b border-border">
        <div className="container-inner section-padding">

          {/* Section header */}
          <FadeIn className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-3">01 — Spaces</p>
              <h2 className="font-display text-4xl md:text-5xl text-text leading-tight">
                Before pixels,<br />I designed spaces.
              </h2>
            </div>
            <p className="font-sans text-sm text-text-muted max-w-xs text-right leading-relaxed hidden md:block">
              Five years of architecture + interiors across India. The instincts still show up in every product I design.
            </p>
          </FadeIn>

          {/* Asymmetric bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

            {/* Big card — takes 7 cols, full height */}
            <FadeIn delay={0} className="md:col-span-7">
              <a
                href={spacesProjects[0].href}
                className="group relative block rounded-3xl overflow-hidden bg-surface shadow-card border border-border hover:shadow-card-hover transition-all duration-500 h-full min-h-[420px]"
              >
                <img
                  src={spacesProjects[0].image}
                  alt={spacesProjects[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Top badge */}
                <div className="absolute top-5 left-5">
                  <span className="font-sans text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                    {spacesProjects[0].category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight size={15} className="text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-3xl text-white leading-tight">{spacesProjects[0].title}</h3>
                </div>
              </a>
            </FadeIn>

            {/* Two stacked cards — 5 cols */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
              {[spacesProjects[1], spacesProjects[2]].map((project, i) => (
                <FadeIn key={project.title} delay={(i + 1) * 0.12} className="flex-1">
                  <a
                    href={project.href}
                    className="group relative block rounded-3xl overflow-hidden bg-surface shadow-card border border-border hover:shadow-card-hover transition-all duration-500 h-full min-h-[195px]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="font-sans text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight size={13} className="text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl text-white leading-tight">{project.title}</h3>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SIDE EXPERIMENTS ──────────────────────────── */}
      <section className="py-24 bg-[#0E0E0E] border-b border-white/10">
        <div className="container-inner section-padding">

          {/* Section header — light on dark */}
          <FadeIn className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-3">02 — Side Experiments</p>
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
                Things I build<br />to understand.
              </h2>
            </div>
            <p className="font-sans text-sm text-white/40 max-w-xs text-right leading-relaxed hidden md:block">
              AI-native isn&apos;t a buzzword. I ship small experiments — sometimes to test an idea, sometimes just for fun.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Air Draw — wide card */}
            <FadeIn delay={0} className="md:col-span-7">
              <a
                href="https://air-draw-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-black"
                style={{ minHeight: 420 }}
              >
                {/* Screenshot */}
                <img
                  src="/images/air-draw-preview.jpg"
                  alt="Air Draw experiment"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 font-sans text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live experiment
                  </span>
                </div>

                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight size={15} className="text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>

                {/* Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Computer Vision', 'Gesture UI', 'MediaPipe'].map(t => (
                      <span key={t} className="font-sans text-xs text-white/50 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-3xl text-white mb-1">Air Draw</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed max-w-md">
                    Draw in the air with just your index finger — no touch, no stylus. Point, draw, create.
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* Right column — Dino + Coming Soon */}
            <div className="md:col-span-5 flex flex-col gap-5">

              {/* Dino Game */}
              <FadeIn delay={0.12} className="flex-1">
                <a
                  href="https://sweta-dino-game.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-white"
                  style={{ minHeight: 195 }}
                >
                  <img
                    src="/images/dino-preview.jpg"
                    alt="Dino Game experiment"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Light gradient — since this is a light-bg screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 font-sans text-xs font-medium text-white/90 bg-black/30 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live experiment
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ArrowUpRight size={13} className="text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl text-white mb-1">Dino Game</h3>
                    <p className="font-sans text-xs text-white/60">The Chrome offline game, rebuilt & shipped.</p>
                  </div>
                </a>
              </FadeIn>

              {/* More coming soon */}
              <FadeIn delay={0.22} className="flex-1">
                <div
                  className="relative block rounded-3xl border border-dashed border-white/15 flex flex-col items-center justify-center text-center p-8"
                  style={{ minHeight: 195 }}
                >
                  {/* Subtle dot grid */}
                  <div className="absolute inset-0 rounded-3xl opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(192,48,94,0.6) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full border border-dashed border-white/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white/30 text-xl leading-none">+</span>
                    </div>
                    <p className="font-display text-xl text-white/40 mb-1">Next experiment</p>
                    <p className="font-sans text-xs text-white/25 leading-relaxed">
                      Always tinkering.<br />Something&apos;s in progress.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. THE THREAD ────────────────────────────────── */}
      <section className="py-24 border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-3">03 — The Thread</p>
            <h2 className="section-title mb-8 max-w-2xl">
              Spatial thinking<br />travels well.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                from: 'Circulation Planning',
                to: 'Information Architecture',
                desc: 'Designing how people navigate a physical space maps directly to how they traverse a product. Both are about removing wrong turns.',
              },
              {
                from: 'Zoning & Hierarchy',
                to: 'Visual Hierarchy & Layout',
                desc: 'Every building has zones: public, semi-public, private. Every screen has the same hierarchy — if the designer does their job.',
              },
              {
                from: 'Scale for People',
                to: 'Designing for Volume',
                desc: "My largest project served thousands of visitors daily. Designing at that scale taught me that edge cases aren't edge cases — they're just low-frequency users.",
              },
            ].map((item, i) => (
              <FadeIn key={item.from} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl p-7 shadow-card border border-border h-full">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-sans text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.from}</span>
                    <span className="text-text-muted text-xs">→</span>
                    <span className="font-sans text-xs font-medium text-text-secondary bg-background border border-border px-2.5 py-1 rounded-full">{item.to}</span>
                  </div>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.desc}</p>
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
