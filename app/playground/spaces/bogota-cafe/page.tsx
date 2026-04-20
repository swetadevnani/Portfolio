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
  { src: '/images/farmhouse-1.jpg', alt: 'Farmhouse aerial view', caption: 'Aerial view — 70,000 sq ft set within lush greenery' },
  { src: '/images/farmhouse-2.jpg', alt: 'Terracotta facade', caption: 'Bold terracotta facade contrasting the landscape' },
  { src: '/images/farmhouse-3.jpg', alt: 'Outdoor spaces', caption: 'Outdoor living — designed for leisure and retreat' },
]

export default function FarmhousePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

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

      <section className="pt-10 pb-24 border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-4">Spaces Design Work · Architecture & Interior</p>
            <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6 max-w-3xl">
              Farmhouse,<br />Ahmedabad
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-6 mb-12 pt-4 border-t border-border mt-8">
              {[
                { label: 'Type', value: 'Architecture & Interior Design' },
                { label: 'Location', value: 'Ahmedabad, India' },
                { label: 'Scale', value: '70,000 sq ft' },
                { label: 'Role', value: 'Architect & Interior Designer' },
              ].map((item) => (
                <div key={item.label} className="min-w-[120px]">
                  <p className="font-sans text-xs text-text-muted mb-1">{item.label}</p>
                  <p className="font-sans text-sm font-medium text-text">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden aspect-[16/7] bg-surface shadow-card mb-16">
              <img
                src="/images/about-space-3.jpg"
                alt="Farmhouse Ahmedabad"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <p className="section-label mb-3">About the Project</p>
              </div>
              <div>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  A weekend getaway on a 70,000 square-foot plot on the outskirts of Ahmedabad. The brief was simple: create a retreat that feels like an escape — from the city, from routine, from screens.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  The facade is finished in bold terracotta tones, a deliberate contrast against the verdant greenery that embraces the site. Rather than competing with the landscape, the earth tones anchor the structures within it — grounding the architecture in its surroundings while giving it a strong visual identity from a distance.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  Designing at this scale taught me to think in sequences and systems — how someone moves through a space, what they see first, where they slow down, where they linger. Those instincts didn&apos;t leave when I moved into product design. They just found a new medium.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border">
        <div className="container-inner section-padding">
          <FadeIn>
            <p className="section-label mb-10">Project Images</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                <div className={`relative rounded-2xl overflow-hidden bg-surface shadow-card ${i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
                  <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
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
