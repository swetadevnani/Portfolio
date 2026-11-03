'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ImageIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { BrandProject, BrandImage } from '@/lib/data'

/* ------------------------------------------------------------------
   Editorial brand-showcase layout: full-bleed color blocks, a quiet
   margin label per section, and collage grids instead of cards.
   Page chrome (type, labels, links) stays in the portfolio system;
   the large blocks are painted in the project's own palette.
------------------------------------------------------------------ */

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  // Respect the OS "reduce motion" setting: content still appears,
  // it just does not travel or fade in.
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Small uppercase label that sits above a section, like a print caption. */
function MarginLabel({
  children,
  as: Tag = 'h2',
}: {
  children: React.ReactNode
  as?: 'h2' | 'p'
}) {
  return (
    <Tag className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary mb-5">
      {children}
    </Tag>
  )
}

/** Flat image plate, or a tinted placeholder while assets are pending. */
function Plate({
  item,
  ratio = 'aspect-[4/3]',
  bg,
  className = '',
}: {
  item: BrandImage
  ratio?: string
  bg: string
  className?: string
}) {
  // A composed image (a collage, a one-page sheet) carries its own ratio;
  // cropping it to the grid's would destroy its internal layout.
  ratio = item.aspect ?? ratio
  if (!item.image) {
    // Placeholder sits on a tinted block, so its label needs ink measured
    // against that block rather than the page's own muted grey.
    const fg = contrast('#151515', bg) >= contrast('#FFFFFF', bg) ? '#151515' : '#FFFFFF'
    return (
      <div
        className={`${ratio} ${className} w-full flex flex-col items-center justify-center gap-2`}
        style={{ backgroundColor: bg, color: fg }}
      >
        <ImageIcon size={20} strokeWidth={1.25} aria-hidden />
        <span className="font-sans text-[11px] tracking-wide px-5 text-center">
          {item.caption}
        </span>
      </div>
    )
  }
  return (
    <div className={`${ratio} ${className} w-full overflow-hidden`} style={{ backgroundColor: bg }}>
      {/* Caption is rendered as a visible <figcaption> beside every plate,
          so an alt that repeats it would just be announced twice. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/images/${item.image}`} alt="" className="w-full h-full object-cover" />
    </div>
  )
}

/** Relative luminance, used to pick readable ink for a color block. */
function luminance(hex: string) {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((x) => x + x).join('') : h
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** WCAG contrast ratio between two opaque hex colors. */
function contrast(a: string, b: string) {
  const la = luminance(a)
  const lb = luminance(b)
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

/* Sections alternate between the page background and the portfolio's grey
   surface, so the page reads as chapters rather than one long scroll. The
   band colours are the portfolio's own, never the project's. */
const Shell = ({
  children,
  className = '',
  tint = false,
}: {
  children: React.ReactNode
  className?: string
  tint?: boolean
}) => (
  <div className={tint ? 'bg-surface' : undefined}>
    <div className={`max-w-6xl mx-auto px-6 md:px-8 lg:px-12 ${className}`}>{children}</div>
  </div>
)

export default function BrandShowcase({ project }: { project: BrandProject }) {
  const c = (name: string, fallback: string) =>
    project.palette.find((s) => s.name === name)?.hex ?? fallback

  const blocks = project.blockColors
  const primary = blocks?.primary ?? project.accentColor
  const deep = blocks?.deep ?? c('Secondary', '#572C22')
  const base = blocks?.base ?? c('Base', '#EDEBE6')
  const subtle = blocks?.subtle ?? c('Subtle', '#ECC0B6')
  const grey = blocks?.grey ?? c('Grey', '#CCC8C0')
  const heroBg = project.heroBackground ?? base

  // Once a project has real photography, grids of empty plates read as
  // broken rather than deliberate, so a grid with no images is skipped.
  const hasArt = (items: BrandImage[]) => items.some((item) => item.image)

  // One composed sheet needs the full measure to stay readable; a set of
  // separate marks is fine in the narrower column beside the note.
  const logoSheet = project.logoVariants.length === 1 && hasArt(project.logoVariants)

  // Ink is chosen by measured contrast, not by guessing light vs dark.
  // A brand colour is used when it clears WCAG AA against the block;
  // otherwise we fall back to near-black or white, whichever wins.
  // `min` is 4.5 for body copy, 3 for large display type.
  const ink = (bg: string, min = 4.5) => {
    const rank = (list: string[]) =>
      list
        .map((hex) => ({ hex, ratio: contrast(hex, bg) }))
        .sort((a, b) => b.ratio - a.ratio)
    const brand = rank(project.palette.map((sw) => sw.hex))
    if (brand[0] && brand[0].ratio >= min) return brand[0].hex
    return rank(['#151515', '#FFFFFF'])[0].hex
  }

  return (
    <main className="bg-background pb-24">
      {/* ── Back link ── */}
      <Shell className="pt-28 pb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-primary hover:gap-3 transition-all duration-200"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>
      </Shell>

      {/* ── Full-bleed hero plate ── */}
      {project.heroImage ? (
        <FadeIn>
          <div className="w-full" style={{ backgroundColor: heroBg }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${project.heroImage}`}
              alt={`${project.title} identity`}
              className={
                project.heroFit === 'cover'
                  ? 'w-full h-[52vh] md:h-[72vh] object-cover'
                  : 'w-full h-auto max-h-[82vh] object-contain'
              }
            />
          </div>
        </FadeIn>
      ) : (
      <FadeIn>
        <div
          className="w-full py-28 md:py-40 flex flex-col items-center justify-center text-center px-6"
          style={{ backgroundColor: base }}
        >
          <span
            className="font-display text-6xl md:text-8xl lowercase leading-none tracking-tight mb-5"
            style={{ color: primary }}
          >
            {project.title}
          </span>
          <span
            className="font-sans text-base md:text-lg tracking-wide"
            style={{ color: ink(base) }}
          >
            {project.tagline}
          </span>
        </div>
      </FadeIn>
      )}

      {/* ── Title + meta ── */}
      <Shell className="pt-20 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-end">
          <FadeIn>
            <MarginLabel as="p">{project.context}</MarginLabel>
            <h1 className="font-display text-5xl md:text-6xl text-text leading-[1.05]">
              {project.title}
            </h1>
            <p className="font-sans text-lg text-text-secondary mt-4">{project.tagline}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-5">
              <div>
                <dt className="font-sans text-[11px] uppercase tracking-[0.18em] text-text-secondary mb-1.5">
                  Role
                </dt>
                <dd className="font-sans text-sm text-text">{project.role}</dd>
              </div>
              <div>
                <dt className="font-sans text-[11px] uppercase tracking-[0.18em] text-text-secondary mb-1.5">
                  Year
                </dt>
                <dd className="font-sans text-sm text-text">{project.year}</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </Shell>

      {/* ── About: two color blocks ── */}
      <Shell className="py-20" tint>
        <MarginLabel>About the project</MarginLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn>
            <div className="h-full p-9 md:p-11" style={{ backgroundColor: deep }}>
              <p
                className="font-sans text-base leading-relaxed"
                style={{ color: ink(deep) }}
              >
                {project.intro[0]}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="h-full p-9 md:p-11" style={{ backgroundColor: subtle }}>
              <p className="font-sans text-base leading-relaxed" style={{ color: ink(subtle) }}>
                {project.intro[1]}
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
            {project.deliverables.map((d) => (
              <span key={d} className="font-sans text-xs text-text-secondary">
                {d}
              </span>
            ))}
          </div>
        </FadeIn>
      </Shell>

      {/* ── Direction: attributes as blocks + keywords ── */}
      <Shell className="py-14">
        <MarginLabel>Direction</MarginLabel>
        <FadeIn>
          <h3 className="font-display text-3xl md:text-4xl text-text mb-4 max-w-2xl">
            Three attributes, decided first
          </h3>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-10">
            {project.moodNote}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {project.attributes.map((attr, i) => {
            const fills = [primary, deep, subtle]
            const texts = fills.map((fill) => ink(fill))
            return (
              <FadeIn key={attr.name} delay={i * 0.07}>
                <div
                  className="h-full p-9 flex flex-col justify-between min-h-[13rem]"
                  style={{ backgroundColor: fills[i % 3] }}
                >
                  <span
                    className="font-display text-4xl leading-none mb-6"
                    style={{ color: texts[i % 3] }}
                  >
                    {attr.name}
                  </span>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: texts[i % 3] }}
                  >
                    {attr.note}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.moodKeywords.map((word) => (
              <span
                key={word}
                className="font-sans text-xs px-3.5 py-2"
                style={{ backgroundColor: grey, color: ink(grey) }}
              >
                {word}
              </span>
            ))}
          </div>
        </FadeIn>
      </Shell>

      {/* ── Mood board: collage ── */}
      {hasArt(project.moodBoard) && (
      <Shell className="py-20" tint>
        <MarginLabel>Mood board</MarginLabel>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {project.moodBoard.map((item, i) => (
            <FadeIn
              key={item.caption}
              delay={i * 0.06}
              className={i === 0 ? 'md:col-span-12' : 'md:col-span-6'}
            >
              <Plate
                item={item}
                ratio={i === 0 ? 'aspect-[16/6]' : 'aspect-[4/3]'}
                bg={i % 2 === 0 ? subtle : grey}
              />
            </FadeIn>
          ))}
        </div>
      </Shell>
      )}

      {/* ── Palette: flat blocks, hex inside ── */}
      <Shell className="py-14">
        <MarginLabel>Color palette</MarginLabel>
        <FadeIn>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-10">
            {project.paletteNote}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {project.palette.map((swatch, i) => {
            // First two swatches get wide blocks; the rest sit in a row beneath.
            const wide = i < 2
            return (
              <FadeIn
                key={swatch.name + swatch.hex}
                delay={i * 0.05}
                className={wide ? 'md:col-span-6' : 'md:col-span-3'}
              >
                <div
                  className={`${wide ? 'aspect-[16/7]' : 'aspect-[4/3]'} p-7 flex flex-col justify-between`}
                  style={{ backgroundColor: swatch.hex }}
                >
                  <span
                    className="font-display text-2xl"
                    style={{ color: ink(swatch.hex, 3) }}
                  >
                    {swatch.name}
                  </span>
                  <span
                    className="font-sans text-xs uppercase tracking-widest"
                    style={{ color: ink(swatch.hex) }}
                  >
                    {swatch.hex}
                    {swatch.note ? ` · ${swatch.note}` : ''}
                  </span>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Shell>

      {/* ── Typography ── */}
      <Shell className="py-20" tint>
        <MarginLabel>Typography</MarginLabel>
        <FadeIn>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-10">
            {project.typeNote}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {project.typography.map((face, i) => (
            <FadeIn key={face.name} delay={i * 0.07}>
              <div
                className="h-full p-9 md:p-11"
                style={{ backgroundColor: i === 0 ? deep : base }}
              >
                <span
                  className="block leading-none mb-7"
                  style={{
                    fontFamily: face.stack,
                    fontSize: '5rem',
                    color: ink(i === 0 ? deep : base, 3),
                  }}
                  aria-hidden
                >
                  Aa
                </span>
                <p
                  className="font-sans text-lg font-semibold mb-1"
                  style={{ color: ink(i === 0 ? deep : base) }}
                >
                  {face.name}
                </p>
                <p
                  className="font-sans text-[11px] uppercase tracking-[0.18em] mb-4"
                  style={{ color: ink(i === 0 ? deep : base) }}
                >
                  {face.role}
                </p>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: ink(i === 0 ? deep : base) }}
                >
                  {face.rationale}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="overflow-x-auto" style={{ backgroundColor: grey }}>
            <table className="w-full text-left min-w-[32rem]">
              <caption className="sr-only">Type scale for {project.title}</caption>
              <thead>
                <tr>
                  {['Style', 'Typeface', 'Weight', 'Size'].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] px-7 pt-5 pb-2"
                      style={{ color: ink(grey) }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {project.typeScale.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b last:border-0"
                    style={{ borderColor: `${ink(grey)}26` }}
                  >
                    <th
                      scope="row"
                      className="font-sans text-sm font-semibold text-left px-7 py-3.5"
                      style={{ color: ink(grey) }}
                    >
                      {row.name}
                    </th>
                    <td className="font-sans text-sm px-7 py-3.5" style={{ color: ink(grey) }}>
                      {row.font}
                    </td>
                    <td className="font-sans text-sm px-7 py-3.5" style={{ color: ink(grey) }}>
                      {row.weight}
                    </td>
                    <td className="font-sans text-sm px-7 py-3.5" style={{ color: ink(grey) }}>
                      {row.size}px
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Shell>

      {/* ── Full-bleed statement: the project's own image, or a wordmark band ── */}
      <FadeIn>
        {project.statementImage ? (
          <div className="w-full my-14" style={{ backgroundColor: primary }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${project.statementImage}`}
              alt={`${project.title} applied across its core screens`}
              className={
                project.statementAspect
                  ? `w-full object-cover ${project.statementAspect}`
                  : 'w-full h-auto'
              }
            />
          </div>
        ) : (
          <div
            className="w-full py-24 md:py-32 flex items-center justify-center px-6 my-14"
            style={{ backgroundColor: primary }}
          >
            <span
              className="font-display text-5xl md:text-7xl lowercase leading-none tracking-tight"
              style={{ color: ink(primary) }}
            >
              {project.title}
            </span>
          </div>
        )}
      </FadeIn>

      <Shell className="py-6">
        <MarginLabel>Logo variations</MarginLabel>
        {project.logoEvolution && (
          <FadeIn className="mb-10">
            <h3 className="font-display text-3xl md:text-4xl text-text mb-4">
              Where the mark came from
            </h3>
            {project.logoNote && (
              <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-8">
                {project.logoNote}
              </p>
            )}
            <figure>
              <Plate item={project.logoEvolution} bg={base} />
              <figcaption className="font-sans text-xs text-text-secondary mt-2.5">
                {project.logoEvolution.caption}
              </figcaption>
            </figure>
          </FadeIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <FadeIn
            className={
              !hasArt(project.logoVariants) || logoSheet ? 'md:col-span-12' : 'md:col-span-5'
            }
          >
            <div className="h-full p-9 md:p-11" style={{ backgroundColor: deep }}>
              {project.logoNote && !project.logoEvolution && (
                <p className="font-sans text-base leading-relaxed" style={{ color: ink(deep) }}>
                  {project.logoNote}
                </p>
              )}
              <p
                className={`font-sans text-sm leading-relaxed${
                  project.logoNote && !project.logoEvolution ? ' mt-5' : ''
                }`}
                style={{ color: ink(deep) }}
              >
                {project.logoConstruction}
              </p>
            </div>
          </FadeIn>
          {hasArt(project.logoVariants) && (
          <div
            className={`${
              logoSheet ? 'md:col-span-12' : 'md:col-span-7'
            } grid grid-cols-1 sm:grid-cols-2 gap-5`}
          >
            {project.logoVariants.map((item, i) => (
              <FadeIn
                key={item.caption}
                delay={i * 0.05}
                className={item.span === 'wide' ? 'sm:col-span-2' : undefined}
              >
                <figure>
                  <Plate
                    item={item}
                    ratio={item.span === 'wide' ? 'aspect-[16/6]' : 'aspect-[16/10]'}
                    bg={i % 2 === 0 ? base : subtle}
                  />
                  <figcaption className="font-sans text-xs text-text-secondary mt-2.5">
                    {item.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
          )}
        </div>
      </Shell>

      {/* ── Mascot / illustration system (optional) ── */}
      {project.mascot && (
        <Shell className="py-14">
          <MarginLabel>{project.mascot.label}</MarginLabel>
          <FadeIn>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-8">
              {project.mascot.note}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {project.mascot.images.map((item, i) => (
              <FadeIn
                key={item.caption}
                delay={i * 0.06}
                className={item.span === 'wide' ? 'md:col-span-12' : 'md:col-span-6'}
              >
                <figure>
                  <Plate
                    item={item}
                    ratio={item.span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                    bg={i % 2 === 0 ? base : subtle}
                  />
                  <figcaption className="font-sans text-xs text-text-secondary mt-2.5">
                    {item.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </Shell>
      )}

      {/* ── System ── */}
      <Shell className="py-20" tint>
        <MarginLabel>System rules</MarginLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.systemNotes.map((note, i) => (
            <FadeIn key={note.title} delay={i * 0.07}>
              <div
                className="h-full p-9 md:p-11"
                style={{ backgroundColor: i === 0 ? subtle : grey }}
              >
                <h3
                  className="font-display text-2xl mb-3"
                  style={{ color: ink(i === 0 ? subtle : grey) }}
                >
                  {note.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: ink(i === 0 ? subtle : grey) }}
                >
                  {note.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Shell>

      {/* ── Applications: collage ── */}
      <Shell className="py-14">
        <MarginLabel>Brand in context</MarginLabel>
        <FadeIn>
          <p className="font-sans text-base text-text-secondary leading-relaxed max-w-2xl mb-10">
            {project.applicationsNote}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {project.applications.map((item, i) => {
            // Mosaic rhythm: wide, then 2-up, then a tall pair.
            // Four plates close the row differently from six, so the
            // mosaic is chosen by count rather than cycled blindly.
            const four = project.applications.length === 4
            const spans = four
              ? ['md:col-span-12', 'md:col-span-5', 'md:col-span-7', 'md:col-span-12']
              : ['md:col-span-12', 'md:col-span-5', 'md:col-span-7', 'md:col-span-7', 'md:col-span-5', 'md:col-span-12']
            const ratios = four
              ? ['aspect-[16/6]', 'aspect-[4/3]', 'aspect-[16/10]', 'aspect-[16/7]']
              : ['aspect-[16/6]', 'aspect-[4/3]', 'aspect-[16/10]', 'aspect-[16/10]', 'aspect-[4/3]', 'aspect-[16/7]']
            const fills = [base, subtle, grey, subtle, grey, base]
            return (
              <FadeIn key={item.caption} delay={i * 0.05} className={spans[i % spans.length]}>
                <figure>
                  <Plate item={item} ratio={ratios[i % ratios.length]} bg={fills[i % fills.length]} />
                  <figcaption className="font-sans text-xs text-text-secondary mt-2.5">
                    {item.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            )
          })}
        </div>
      </Shell>

      {/* ── Reflection ── */}
      {project.reflection && (
        <Shell className="py-20" tint>
          <MarginLabel>Reflection</MarginLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { title: 'What worked', items: project.reflection.worked, dot: primary, glyph: '\u2197' },
              { title: 'Would do differently', items: project.reflection.differently, dot: deep, glyph: '\u2192' },
              { title: 'Next steps', items: project.reflection.next, dot: '#666666', glyph: '\u2192' },
            ].map((col, i) => (
              <FadeIn key={col.title} delay={i * 0.05}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${col.dot}`} aria-hidden />
                  <h3 className="font-sans font-semibold text-sm text-text uppercase tracking-wider">
                    {col.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-sans text-text-secondary mt-0.5 flex-shrink-0" aria-hidden>
                        {col.glyph}
                      </span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl p-8 max-w-3xl border border-primary/20 bg-primary/5">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Biggest learning
              </h3>
              <p className="font-display text-xl text-text leading-snug">
                {project.reflection.learning}
              </p>
            </div>
          </FadeIn>
        </Shell>
      )}

      {/* ── Footer links ── */}
      <Shell className="pt-12">
        <div className="border-t border-border pt-10 flex flex-wrap items-center justify-between gap-5">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary underline underline-offset-4 hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft size={15} />
            See all work
          </Link>
          {project.related && (
            <Link
              href={project.related.href}
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary underline underline-offset-4 hover:gap-3 transition-all duration-200"
            >
              {project.related.label}
              <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
      </Shell>
    </main>
  )
}
