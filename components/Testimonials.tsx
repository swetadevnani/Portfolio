'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Beyond their technical proficiency, Sweta possesses a rare, innate empathy that transforms complex research into deeply human experiences. They were a standout, consistently balancing disciplined design process with a heart for the end-user.",
    name: 'Neil Harner',
    role: 'Design Director',
    company: 'Inverse Paradox',
    relation: 'Supervisor',
  },
  {
    quote:
      "Sweta consistently demonstrated strong engagement, initiative, and a deep commitment to mastering the full design process. Her standout work included a Wizard of Oz experiment that simulated autonomous monitoring — so effective that I've since shared it as an example with other students. Sweta takes on complex challenges with confidence and care, and I highly recommend her to any design team seeking a designer who is both strategic and technically strong.",
    name: 'Mike Begley',
    role: 'Senior Experience Consultant',
    company: 'EPAM Systems',
    relation: 'Professor',
  },
  {
    quote:
      "She has a knack for quickly understanding client needs and translating them into clear, actionable designs while keeping the team aligned. Her focus, energy, and problem-solving mindset make her a joy to collaborate with. Sweta is also a powerhouse when it comes to innovation — one of the few on the team fully leveraging cutting-edge AI design tools. I would strongly recommend her for any UX or product design role that values creativity, deep understanding, and forward-thinking solutions.",
    name: 'Eswar Uppalapati',
    role: 'Senior Product Designer',
    company: 'Inverse Paradox',
    relation: 'Colleague',
  },
]

// Card = 45vw wide, offset = (100 - 45) / 2 = 27.5vw so active card is always centered
const CARD_VW = 45
const GAP_PX = 24
const OFFSET_VW = (100 - CARD_VW) / 2

export default function Testimonials() {
  // Start with Mike (index 1) active
  const [current, setCurrent] = useState(1)

  const go = (i: number) =>
    setCurrent(Math.max(0, Math.min(testimonials.length - 1, i)))

  return (
    <section id="testimonials" className="section-padding bg-background overflow-hidden">
      <div className="container-inner">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div className="max-w-xl">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title mb-4">What others say</h2>
            <p className="section-subtitle">
              Kind words from the people I have had the pleasure of working and learning alongside.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(current + 1)}
              disabled={current === testimonials.length - 1}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track — no padding, offset baked into translate */}
      <div className="overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)' }}>
        <motion.div
          className="flex"
          style={{ gap: `${GAP_PX}px` }}
          animate={{
            x: `calc(-${current} * (${CARD_VW}vw + ${GAP_PX}px) + ${OFFSET_VW}vw)`,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              onClick={() => go(i)}
              style={{ width: `${CARD_VW}vw`, flexShrink: 0 }}
              className={`bg-surface rounded-2xl p-8 md:p-10 shadow-card flex flex-col cursor-pointer transition-opacity duration-400 select-none ${
                i === current ? 'opacity-100' : 'opacity-35 hover:opacity-55'
              }`}
            >
              <div className="font-display text-5xl leading-none text-primary mb-5 select-none" aria-hidden>
                &ldquo;
              </div>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed flex-1 mb-8">
                {t.quote}
              </p>
              <div className="w-10 h-px bg-border mb-5" />
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-sans font-semibold text-sm text-text">{t.name}</p>
                  <p className="font-sans text-xs text-text-muted mt-0.5">{t.role}, {t.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-medium">
                  {t.relation}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div
        className="flex items-center gap-2 mt-8"
        style={{ paddingLeft: `${OFFSET_VW}vw` }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-primary' : 'w-1.5 bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
