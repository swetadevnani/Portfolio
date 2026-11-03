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

const images = [
  {
    src: '/images/amusement-park-overview.jpg',
    alt: 'Amusement park overview',
    caption: 'Project overview — site layout and entry experience',
    aspect: 'aspect-[16/7]',
    wide: true,
  },
  {
    src: '/images/amusement-park-fun-street.jpg',
    alt: 'Fun Street at dusk, lined with illuminated zone signage',
    caption:
      'Fun Street at dusk — the main spine, with zone signage stacked overhead so visitors can read the whole park from one spot',
    aspect: 'aspect-[4/3]',
    wide: true,
  },
  {
    src: '/images/amusement-park-entry-signage.jpg',
    alt: 'Backlit signage board above the arcade entrance',
    caption:
      'Entry signage — six zones named in one backlit board, sized to be read from the far end of the street',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/amusement-park-zone-planning.jpg',
    alt: 'Zone planning',
    caption: 'Zone planning and circulation study',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/amusement-park-arcade-hall.jpg',
    alt: 'Arcade hall under neon ceiling lighting, with a mezzanine above',
    caption:
      'Arcade hall — neon run along the ceiling to pull people through the depth of the room, with seating on the mezzanine above',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/amusement-park-arcade-floor.jpg',
    alt: 'Arcade floor with machines arranged around open circulation space',
    caption:
      'Arcade floor — machines held to the edges so the centre stays open and queues never block the route through',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/amusement-park-interior-detail.jpg',
    alt: 'Interior detail',
    caption: 'Interior detailing — rides zone',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/amusement-park-bowling.jpg',
    alt: 'Bowling alley washed in blue light, lane screens above the pins',
    caption:
      'Bowling alley — a single colour wash and converging ceiling lines aim attention down the lanes',
    aspect: 'aspect-[4/3]',
    wide: true,
  },
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
                src="/images/amusement-park-hero.jpg"
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
              <FadeIn key={img.src} delay={(i % 2) * 0.1} className={img.wide ? 'md:col-span-2' : ''}>
                <figure>
                  <div className={`relative rounded-2xl overflow-hidden bg-surface-dark shadow-card ${img.aspect}`}>
                    <img
                      src={img.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="font-sans text-xs text-text-secondary mt-2.5">
                    {img.caption}
                  </figcaption>
                </figure>
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
