'use client'

import { Search, Layers, Rocket } from 'lucide-react'
import { skillCategories } from '@/lib/data'

const categoryIcons: Record<string, React.ReactNode> = {
  'Research & Understand': <Search size={20} strokeWidth={2} aria-hidden />,
  'Designing the experience': <Layers size={20} strokeWidth={2} aria-hidden />,
  'Design to delivery': <Rocket size={20} strokeWidth={2} aria-hidden />,
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="container-inner">
        <div className="max-w-xl mb-14">
          <p className="section-label">Skills & Tools</p>
          <h2 className="section-title mb-4">How I get things done</h2>
          <p className="section-subtitle">
            The tools and methods I reach for across every stage of the design
            process — from first discovery call to final handoff.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-background rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {categoryIcons[category.name] || (
                    <div className="w-4 h-4 rounded-full bg-primary/30" />
                  )}
                </div>
                <h3 className="font-sans font-semibold text-base text-text">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 bg-surface border border-border rounded-full text-sm font-sans font-medium text-text-secondary hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-sans text-sm text-text-muted mt-10">
          Currently deepening: accessibility-first design systems and AI agent UX patterns.
        </p>
      </div>
    </section>
  )
}
