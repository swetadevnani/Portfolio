'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Replace image paths and text with your actual project content ──
const images = [
  { src: '/images/about-space-1.jpg', alt: 'Amusement park overview', caption: 'Project overview — site layout and entry experience' },
  { src: '/images/about-space-1.jpg', alt: 'Zone planning', caption: 'Zone planning and circulation study' },
  { src: '/images/about-space-1.jpg', alt: 'Interior detail', caption: 'Interior detailing — rides zone' },
]

export default function AmusementParkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── Back nav ─────────────────────────────────────── */}
      <div className="pt-24 pb-0">
        <div className="container-inner section-padding">
          <a
            href="/playground"
            className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-primary transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Playground
          </a>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-10 pb-24 border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-4">Spaces Design Work · Public</p>
            <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6 max-w-3xl">
              Amusement Park,<br />Ahmedabad
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-6 mb-12 pt-4 border-t border-border mt-8">
              {[
                { label: 'Type', value: 'Public Recreation Space' },
                { label: 'Location', value: 'Ahmedabad, India' },
                { label: 'Scale', value: 'Thousands of daily visitors' },
                { label: 'Role', value: 'Project Lead' },
              ].map((item) => (
                <div key={item.label} className="min-w-[120px]">
                  <p className="font-sans text-xs text-text-muted mb-1">{item.label}</p>
                  <p className="font-sans text-sm font-medium text-text">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Hero image */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden aspect-[16/7] bg-surface shadow-card mb-16">
              <img
                src="/images/about-space-1.jpg"
                alt="Amusement Park Ahmedabad"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Project description */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <p className="section-label mb-3">About the Project</p>
              </div>
              <div>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  One of Ahmedabad&apos;s largest amusement parks — a space visited by thousands of people every single day. As project lead, the challenge wasn&apos;t just design. It was designing for an entire population of experiences happening simultaneously: families with young children, thrill-seekers, groups on a day out.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  The work centred on circulation — how do you move thousands of people through a space without making it feel crowded, confusing, or stressful? Every zone transition, entry sequence, and wayfinding decision was designed to reduce decision fatigue and keep the energy of the experience high.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  What stayed with me: great design at this scale is invisible. People only notice it when it breaks. That principle — designing so the system disappears — is one I carry into every product I work on now.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Image gallery ────────────────────────────────── */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-10">Project Images</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                <div className={`relative rounded-2xl overflow-hidden bg-surface-dark shadow-card ${i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                    <p className="font-sans text-xs text-white/80">{img.caption}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-8 pt-8 border-t border-border">
            <p className="font-sans text-sm text-text-muted italic">
              Note: Replace placeholder images above with actual project photography.
            </p>
          </FadeIn>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
