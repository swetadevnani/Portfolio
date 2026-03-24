'use client'

import { Mail, Download } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
      <div className="container-inner">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #B46258 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          <div className="relative bg-surface rounded-3xl p-10 md:p-16 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-64 h-64 opacity-5"
            >
              <svg viewBox="0 0 200 200" fill="none">
                {[20, 50, 80, 110, 140].map((r) => (
                  <circle key={r} cx="200" cy="0" r={r} stroke="#B46258" strokeWidth="1" />
                ))}
              </svg>
            </div>
            <div className="relative max-w-2xl mx-auto text-center">
              <p className="section-label">Contact</p>
              <h2 className="font-display text-4xl md:text-5xl text-text leading-tight mb-6 text-balance">
                Let&apos;s make something <span className="text-primary">great</span> together
              </h2>
              <p className="font-sans text-lg text-text-secondary leading-relaxed mb-10">
                Whether you&apos;re building something new, improving what you have, or just want
                to swap ideas over coffee — I&apos;d love to hear from you. I&apos;m always open to
                the right collaboration.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group mx-auto mb-6 inline-flex max-w-full flex-row items-center justify-center gap-2 rounded-full bg-primary px-3 py-3 font-sans text-xs font-medium leading-none text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-card-hover sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
              >
                <Mail className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
                <span className="whitespace-nowrap">{siteConfig.email}</span>
              </a>
              <div className="mb-12">
                <a
                  href={siteConfig.resumeUrl}
                  download="Sweta_Devnani_Resume.pdf"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  aria-label="Download resume PDF"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
