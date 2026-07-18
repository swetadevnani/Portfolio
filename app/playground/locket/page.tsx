'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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

const screens = [
  {
    name: 'Home',
    desc: 'Memories placed around you on a map — not in a timeline. You walk through them.',
  },
  {
    name: 'Preserve a Memory',
    desc: 'Capture a place with a photo, voice note, or text. Pin it to where it happened.',
  },
  {
    name: 'Gallery',
    desc: "A quiet archive. Every locket you've left, every memory you've walked past.",
  },
  {
    name: 'In Memory',
    desc: "When you're physically near a pinned memory, Locket surfaces it — unprompted.",
  },
  {
    name: 'Memory Ended',
    desc: 'A gentle goodbye. The memory fades like a polaroid left in the sun.',
  },
  {
    name: 'Setup',
    desc: "Onboarding that teaches the metaphor: you don't go to your memories. They come to you.",
  },
]

const insights = [
  {
    stat: '304M',
    label: 'people live outside their birth country',
  },
  {
    stat: '67%',
    label: 'of expats say they miss the feeling of a place, not just the people',
  },
  {
    stat: '1 week',
    label: 'take-home design assessment timeline',
  },
]

export default function LocketPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="pt-32 pb-24">
        <div className="container-inner section-padding">
          <FadeIn>
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Back to Playground
            </Link>
          </FadeIn>

          <div className="max-w-2xl mb-14">
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-sans text-sm text-text-secondary">Take-home design assessment · Figma</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-display text-5xl md:text-6xl text-text leading-tight mb-6">
                Locket
              </h1>
              <p className="font-sans text-lg text-text-secondary leading-relaxed mb-6">
                What if your memories stayed where they happened — and found you when you returned? Locket is a location-based memory app for people who carry two homes in their chest. Not a photo album. Not a map. A feeling.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Product Design', 'Take-home Assessment', 'Location-based', 'Diaspora', 'Figma'].map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Hero image */}
          <FadeIn delay={0.15}>
            <div className="rounded-3xl overflow-hidden bg-surface border border-border shadow-card w-full">
              <Image
                src="/images/locket-preview.jpg"
                alt="Locket app screens"
                width={1200} height={800} className="w-full h-auto block"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  const fallback = el.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div
                className="w-full items-center justify-center flex-col text-center p-16"
                style={{ display: 'none' }}
              >
                <p className="font-display text-5xl text-primary/30 mb-3">◎</p>
                <p className="font-display text-2xl italic text-primary/40">locket</p>
                <p className="font-sans text-xs text-text-muted mt-3">Screenshot coming soon</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── THE BRIEF ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn>
              <p className="section-label mb-3">The Brief</p>
              <h2 className="section-title">Design for people<br />who belong<br />to two places.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                This started as a take-home design assessment — one week, solo, from brief to screens. The prompt was open-ended: design a meaningful experience for diaspora communities. People who live away from where they grew up. People who carry the feeling of another place in their body, even when they can't get back to it.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I didn't want to design another social app or a glorified photo album. I wanted to find the emotional core of the problem: you can't go back — but sometimes you find yourself exactly where a memory happened, and you have nothing to hold it with.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                That's where Locket started. Not "store your memories." But — <em className="italic font-serif">place them where they belong, and let them find you</em>.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── STATS ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="mb-12">
            <p className="section-label mb-3">The context</p>
            <h2 className="section-title">304 million people<br />live outside their birth country.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {insights.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="bg-surface rounded-2xl p-6 text-center border border-border shadow-card h-full flex flex-col items-center justify-center">
                  <p className="font-display text-3xl md:text-4xl text-primary mb-2">{item.stat}</p>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="bg-surface rounded-2xl p-8 border border-border max-w-3xl">
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                Existing apps treat memories as <strong className="font-semibold text-text">content to be stored</strong> — not feelings to be encountered. The diaspora experience isn't about archiving the past. It's about the moments when the past unexpectedly finds you: the smell of rain that takes you back, the street corner you didn't expect to miss.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── THE CONCEPT ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn>
              <p className="section-label mb-3">The concept</p>
              <h2 className="section-title">Reverse<br />teleportation.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Every memory app moves you to a memory. You open the app, scroll the timeline, find the photo.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                Locket flips this. <strong className="font-semibold text-text">The memories come to you.</strong> You pin a feeling to a place — your grandmother's kitchen, the street you walked every morning, the airport gate where you said goodbye. When you (or someone you care about) physically enters that location, Locket surfaces the memory.
              </p>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                You're not teleported to the past. The past arrives where you are.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── THE SCREENS ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn className="mb-12">
            <p className="section-label mb-3">What I designed</p>
            <h2 className="section-title">6 screens.<br />Every decision earns its place.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {screens.map((screen, i) => (
              <FadeIn key={screen.name} delay={i * 0.07}>
                <div className="bg-surface rounded-2xl p-6 border border-border shadow-card h-full">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="font-sans text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-text mb-2">{screen.name}</h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{screen.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── VISUAL SYSTEM ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn>
              <p className="section-label mb-3">Visual system</p>
              <h2 className="section-title">Warm.<br />Earthy.<br />Nostalgic.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                The visual language came from the same emotional space as the product: terracotta reds, aged cream, soft textures. The palette of old letters, worn maps, Sunday afternoon light. Merriweather for the feeling of handwriting. Nunito Sans for clarity when it matters.
              </p>

              {/* Color swatches */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { color: '#C84B2F', name: 'Terracotta' },
                  { color: '#572C22', name: 'Deep Brown' },
                  { color: '#EDEBE6', name: 'Aged Cream' },
                  { color: '#CCC8C0', name: 'Stone Grey' },
                  { color: '#ECC0B6', name: 'Blush' },
                ].map(swatch => (
                  <div key={swatch.name} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-12 h-12 rounded-xl shadow-card border border-border"
                      style={{ backgroundColor: swatch.color }}
                    />
                    <p className="font-sans text-[10px] text-text-muted">{swatch.name}</p>
                  </div>
                ))}
              </div>

              {/* Logo */}
              <div className="bg-surface rounded-2xl p-8 border border-border shadow-card inline-block">
                <svg width="200" height="88" viewBox="0 0 574 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M95.2892 61.942V184.724C95.2892 185.475 95.4335 186.081 95.7221 186.543C96.0685 187.004 96.6169 187.293 97.3673 187.409L102.13 188.274C102.476 188.274 102.707 188.361 102.822 188.534C102.938 188.65 102.996 188.794 102.996 188.967C102.996 189.083 102.938 189.198 102.822 189.314C102.707 189.429 102.534 189.487 102.303 189.487H67.4077C67.2345 189.487 67.0614 189.429 66.8882 189.314C66.7727 189.198 66.715 189.083 66.715 188.967C66.715 188.794 66.8016 188.65 66.9748 188.534C67.1479 188.361 67.4366 188.246 67.8406 188.188L72.5164 187.409C73.2669 187.293 73.7864 187.004 74.075 186.543C74.4214 186.081 74.5945 185.504 74.5945 184.811V70.6008C74.5945 70.2545 74.508 69.9947 74.3348 69.8215C74.1616 69.5906 73.873 69.4752 73.4689 69.4752H67.8406C67.552 69.4752 67.35 69.4175 67.2345 69.302C67.1191 69.1865 67.0614 69.0422 67.0614 68.8691C67.0614 68.6382 67.1191 68.4938 67.2345 68.4361C67.4077 68.3207 67.5809 68.2341 67.7541 68.1764L92.6049 61.2493C93.1245 61.1338 93.4708 61.0761 93.644 61.0761C93.8749 61.0184 94.1058 60.9895 94.3367 60.9895C94.6253 60.9895 94.8562 61.0761 95.0294 61.2493C95.2026 61.4225 95.2892 61.6534 95.2892 61.942Z" fill="#C84B2F"/>
                  <path d="M274.943 132.079C274.943 135.138 274.048 137.591 272.259 139.439C270.527 141.286 268.16 142.209 265.158 142.209C262.041 142.209 259.588 141.257 257.798 139.352C256.009 137.447 255.114 134.705 255.114 131.126V124.805C255.114 121.168 254.133 118.34 252.17 116.319C250.265 114.241 247.668 113.202 244.377 113.202C240.971 113.202 237.97 114.415 235.372 116.839C232.832 119.264 230.869 122.727 229.484 127.23C228.099 131.675 227.406 136.956 227.406 143.075C227.406 150.695 228.503 157.131 230.696 162.385C232.89 167.58 235.863 171.534 239.615 174.247C243.425 176.903 247.725 178.23 252.517 178.23C257.77 178.23 262.272 177.047 266.024 174.68C269.776 172.313 272.316 168.619 273.644 163.597C273.702 163.366 273.788 163.222 273.904 163.164C274.019 163.048 274.135 163.02 274.25 163.077C274.423 163.077 274.539 163.164 274.597 163.337C274.654 163.452 274.654 163.626 274.597 163.857C273.5 169.629 271.451 174.565 268.449 178.663C265.505 182.704 261.781 185.792 257.279 187.928C252.834 190.064 247.754 191.132 242.039 191.132C235.516 191.132 229.657 189.689 224.462 186.802C219.324 183.916 215.255 179.644 212.253 173.987C209.251 168.33 207.75 161.374 207.75 153.12C207.75 145.211 209.367 138.169 212.599 131.992C215.89 125.758 220.392 120.822 226.107 117.185C231.88 113.549 238.518 111.73 246.022 111.73C252.257 111.73 257.51 112.625 261.781 114.415C266.053 116.204 269.315 118.629 271.566 121.688C273.817 124.747 274.943 128.211 274.943 132.079ZM283.614 189.487C283.441 189.487 283.268 189.429 283.095 189.314C282.979 189.198 282.922 189.083 282.922 188.967C282.922 188.794 283.008 188.65 283.182 188.534C283.355 188.361 283.643 188.246 284.047 188.188L288.723 187.409C289.474 187.293 289.993 187.004 290.282 186.543C290.628 186.081 290.801 185.504 290.801 184.811V70.6008C290.801 70.2545 290.715 69.9947 290.542 69.8215C290.368 69.5906 290.08 69.4752 289.676 69.4752H284.047C283.759 69.4752 283.557 69.4175 283.441 69.302C283.326 69.1865 283.268 69.0422 283.268 68.8691C283.268 68.6382 283.326 68.4938 283.441 68.4361C283.614 68.3207 283.788 68.2341 283.961 68.1764L308.812 61.2493C309.331 61.1338 309.678 61.0761 309.851 61.0761C310.082 61.0184 310.313 60.9895 310.543 60.9895C310.832 60.9895 311.063 61.0761 311.236 61.2493C311.409 61.4225 311.496 61.6534 311.496 61.942V184.724C311.496 185.475 311.64 186.081 311.929 186.543C312.275 187.004 312.824 187.293 313.574 187.409L318.336 188.274C318.914 188.39 319.202 188.621 319.202 188.967C319.202 189.314 318.971 189.487 318.51 189.487H283.614ZM308.206 160.566L341.542 126.883C344.197 124.286 345.179 121.89 344.486 119.696C343.793 117.445 341.831 116.002 338.598 115.367L335.221 114.761C334.875 114.645 334.615 114.559 334.442 114.501C334.326 114.386 334.269 114.241 334.269 114.068C334.269 113.837 334.326 113.693 334.442 113.635C334.615 113.52 334.817 113.462 335.048 113.462H365.96C366.249 113.462 366.451 113.52 366.566 113.635C366.739 113.693 366.826 113.837 366.826 114.068C366.826 114.241 366.739 114.386 366.566 114.501C366.393 114.617 366.104 114.703 365.7 114.761C361.486 115.627 357.474 117.099 353.664 119.177C349.912 121.255 346.362 123.997 343.014 127.403L309.158 161.692L308.206 160.566ZM334.182 135.196L362.15 183.599C363.016 185.1 363.911 186.167 364.834 186.802C365.758 187.38 366.941 187.87 368.385 188.274C368.789 188.448 369.048 188.592 369.164 188.707C369.279 188.765 369.337 188.881 369.337 189.054C369.337 189.169 369.279 189.285 369.164 189.4C369.048 189.458 368.875 189.487 368.644 189.487H331.065C330.892 189.487 330.719 189.458 330.545 189.4C330.43 189.285 330.372 189.14 330.372 188.967C330.372 188.794 330.459 188.65 330.632 188.534C330.805 188.361 331.036 188.274 331.325 188.274L335.135 187.668C336.52 187.437 337.386 186.976 337.732 186.283C338.079 185.532 337.934 184.551 337.299 183.339L319.375 150.435L334.182 135.196ZM443.533 144.72C443.533 145.24 443.36 145.644 443.013 145.933C442.725 146.221 442.234 146.366 441.541 146.366H387.943V144.894H421.453C422.434 144.894 422.925 144.345 422.925 143.248C422.925 132.973 421.539 125.382 418.769 120.476C416.056 115.569 412.736 113.116 408.811 113.116C405.578 113.116 402.779 114.241 400.412 116.493C398.045 118.686 396.198 122.063 394.87 126.624C393.6 131.184 392.965 136.985 392.965 144.028C392.965 155.919 395.448 164.838 400.412 170.784C405.376 176.729 411.899 179.702 419.981 179.702C425.927 179.702 430.949 178.057 435.047 174.767C439.204 171.419 441.513 166.916 441.974 161.259C442.032 161.028 442.119 160.884 442.234 160.826C442.35 160.71 442.436 160.653 442.494 160.653C442.609 160.653 442.725 160.71 442.84 160.826C442.956 160.941 443.013 161.143 443.013 161.432C442.667 167.147 440.993 172.256 437.991 176.758C435.047 181.203 431.122 184.724 426.215 187.322C421.366 189.92 415.911 191.218 409.85 191.218C402.692 191.218 396.4 189.631 390.974 186.456C385.605 183.281 381.391 178.836 378.332 173.121C375.272 167.349 373.743 160.624 373.743 152.946C373.743 144.749 375.272 137.563 378.332 131.386C381.449 125.209 385.836 120.389 391.493 116.926C397.15 113.462 403.76 111.73 411.322 111.73C417.845 111.73 423.502 113.173 428.293 116.06C433.142 118.888 436.894 122.785 439.55 127.749C442.205 132.714 443.533 138.371 443.533 144.72ZM458.197 116.319L450.663 114.761C450.317 114.703 450.086 114.617 449.971 114.501C449.855 114.386 449.798 114.241 449.798 114.068C449.798 113.895 449.855 113.751 449.971 113.635C450.086 113.52 450.231 113.462 450.404 113.462H458.023C458.37 113.462 458.658 113.404 458.889 113.289C459.178 113.173 459.438 112.971 459.669 112.683L476.38 96.231C476.669 95.9424 476.957 95.7115 477.246 95.5383C477.592 95.3651 477.91 95.2785 478.199 95.2785C478.545 95.2785 478.805 95.394 478.978 95.6249C479.209 95.8558 479.324 96.1733 479.324 96.5773V169.485C479.324 174.161 480.19 177.653 481.922 179.962C483.711 182.213 486.136 183.339 489.195 183.339C490.292 183.339 491.331 183.195 492.312 182.906C493.294 182.56 494.217 182.04 495.083 181.347C495.949 180.597 496.7 179.644 497.335 178.49C498.027 177.335 498.605 175.921 499.066 174.247C499.182 173.901 499.355 173.728 499.586 173.728C499.875 173.728 499.961 173.93 499.846 174.334C498.922 178.144 497.623 181.29 495.949 183.772C494.333 186.196 492.226 188.015 489.628 189.227C487.088 190.439 483.971 191.045 480.277 191.045C473.581 191.045 468.414 189.458 464.777 186.283C461.141 183.108 459.322 178.23 459.322 171.649V117.965C459.322 117.445 459.236 117.07 459.063 116.839C458.947 116.55 458.658 116.377 458.197 116.319ZM472.917 115.28L473.523 113.462H499.24C499.528 113.462 499.73 113.52 499.846 113.635C500.019 113.693 500.105 113.866 500.105 114.155C500.105 114.443 499.903 114.703 499.499 114.934C499.153 115.165 498.633 115.28 497.941 115.28H472.917Z" fill="#C84B2F"/>
                  <path d="M155.394 186.151C178.114 186.151 196.532 167.734 196.532 145.016C196.532 122.297 178.114 103.881 155.394 103.881C132.675 103.881 114.257 122.297 114.257 145.016C114.257 167.734 132.675 186.151 155.394 186.151Z" stroke="#C84B2F" strokeWidth="5.24778" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M155.395 171.801C170.189 171.801 182.182 159.809 182.182 145.016C182.182 130.222 170.189 118.23 155.395 118.23C140.6 118.23 128.607 130.222 128.607 145.016C128.607 159.809 140.6 171.801 155.395 171.801Z" stroke="#C84B2F" strokeWidth="2.62389" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.84 5.15"/>
                  <path d="M155.958 142.699L156.168 143.274L156.743 143.484L160.705 144.924L156.743 146.366L156.168 146.576L155.958 147.151L154.517 151.113L153.076 147.151L152.866 146.576L152.291 146.366L148.328 144.924L152.291 143.484L152.866 143.274L153.076 142.699L154.517 138.736L155.958 142.699Z" fill="#C84B2F" stroke="#C84B2F" strokeWidth="2.62389"/>
                  <path d="M158.013 102.06C160.068 100.969 161.468 98.8071 161.468 96.3184C161.468 92.7312 158.56 89.8232 154.973 89.8232C151.386 89.8232 148.478 92.7312 148.478 96.3184C148.478 98.9172 150.004 101.159 152.209 102.198" stroke="#C84B2F" strokeWidth="1.18638"/>
                </svg>
                <p className="font-sans text-xs text-text-muted mt-3">The "o" is a locket. Memory glowing inside.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-inner section-padding"><div className="border-t border-border" /></div>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="container-inner section-padding">
          <FadeIn>
            <div className="bg-surface rounded-3xl p-10 md:p-14 border border-border shadow-card max-w-3xl mx-auto text-center">
              <p className="section-label mb-6">What this is really about</p>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-snug mb-6">
                Designed in a week.<br />
                <em className="italic text-primary">Built from a feeling I know.</em>
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                I'm part of this community. I know what it feels like to walk past a place and realise you left something there — a version of yourself, a person you loved, a season of life that's gone. This assessment gave me a reason to design what I've always wanted to exist.
              </p>
              <p className="font-sans text-sm text-text-muted leading-relaxed mb-8">
                Figma · Merriweather + Nunito Sans · Terracotta & Cream · 6 screens · 1 week
              </p>
              <a
                href="https://www.figma.com/proto/im8z061u2cDELglU4eaokM/Locket-App-Documentation---Sweta-Devnani--Perpay-Assignmnet---Copy-?page-id=2127%3A1994&node-id=2127-3577&viewport=704%2C408%2C0.02&t=7EcYaJsmBKMNxXdK-1&scaling=contain&content-scaling=fixed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                View in Figma <ArrowUpRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
