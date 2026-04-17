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
  { src: '/images/about-space-3.jpg', alt: 'Café exterior and entrance', caption: 'Entry experience — the first impression sets the tone' },
  { src: '/images/about-space-3.jpg', alt: 'Seating zones', caption: 'Seating zones — designed for different dwell times' },
  { src: '/images/about-space-3.jpg', alt: 'Material and lighting', caption: 'Material palette and lighting mood' },
]

export default function BogotaCafePage() {
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
            <p className="section-label mb-4">Spaces Design Work · Hospitality</p>
            <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6 max-w-3xl">
              Bogota Café,<br />Ahmedabad
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-6 mb-12 pt-4 border-t border-border mt-8">
              {[
                { label: 'Type', value: 'Hospitality Interior' },
                { label: 'Location', value: 'Ahmedabad, India' },
                { label: 'Scale', value: 'Full café interior' },
                { label: 'Role', value: 'Interior Designer' },
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
                alt="Bogota Café Ahmedabad"
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
                  Bogota Café was a hospitality interior project in Ahmedabad — designing a space built entirely around the natural rhythm of a café visit. Arrival. Ordering. Choosing a seat. Settling in. Leaving. Every spatial decision was made in service of that sequence.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                  Hospitality design taught me something product design reinforced later: people don&apos;t experience a space (or a product) all at once. They experience it moment to moment, decision to decision. The job of the designer is to make each of those moments feel right — even the ones that feel invisible.
                </p>
                <p className="font-sans text-base text-text-secondary leading-relaxed">
                  The lighting, the acoustic zoning, the way seating encouraged some conversations and protected others — these were deliberate UX decisions, just in a different medium. When I moved into digital design, the vocabulary changed. The logic didn&apos;t.
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
                <div className={`relative rounded-2xl overflow-hidden bg-surface-dark shadow-card ${i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
                  <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                    <p className="font-sans text-xs text-white/80">{img.caption}</p>
                  </div>
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
