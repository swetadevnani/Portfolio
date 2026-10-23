'use client'

import { motion } from 'framer-motion'
import { PenLine, BookOpen, Tv } from 'lucide-react'
import { currentlyContent, type CurrentlyEntry } from '@/lib/data'

const columnIcons: Record<string, React.ReactNode> = {
  writing: <PenLine size={16} strokeWidth={2} aria-hidden />,
  reading: <BookOpen size={16} strokeWidth={2} aria-hidden />,
  watching: <Tv size={16} strokeWidth={2} aria-hidden />,
}

function Entry({ entry }: { entry: CurrentlyEntry }) {
  const heading = entry.href ? (
    <a
      href={entry.href}
      className="font-sans font-semibold text-base text-text underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors duration-200"
    >
      {entry.title}
    </a>
  ) : (
    <h4 className="font-sans font-semibold text-base text-text">{entry.title}</h4>
  )

  return (
    <li className="relative pl-5">
      <span
        className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/40"
        aria-hidden="true"
      />
      {heading}
      <p className="font-sans text-sm text-text-secondary leading-relaxed mt-1">
        {entry.note}
      </p>
      {entry.meta && (
        <p className="font-sans text-xs text-text-muted mt-1.5">{entry.meta}</p>
      )}
    </li>
  )
}

export default function Currently() {
  return (
    <section id="currently" className="section-padding bg-background">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl border border-border bg-surface/60 p-8 md:p-12 lg:p-14"
        >
          <p className="section-label">{currentlyContent.label}</p>
          <h2 className="section-title mb-4">{currentlyContent.headline}</h2>
          <p className="section-subtitle max-w-xl">{currentlyContent.subtitle}</p>

          <span className="inline-flex items-center gap-2 mt-6 px-3.5 py-1.5 rounded-full border border-border bg-background font-sans text-xs text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Last updated {currentlyContent.updated}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 mt-12">
            {currentlyContent.columns.map((column) => (
              <div key={column.kind}>
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-border">
                  <span className="text-primary flex-shrink-0">
                    {columnIcons[column.icon]}
                  </span>
                  <h3 className="font-sans font-medium text-xs tracking-widest uppercase text-text-secondary">
                    {column.kind}
                  </h3>
                </div>
                <ul className="space-y-7">
                  {column.entries.map((entry) => (
                    <Entry key={entry.title} entry={entry} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
