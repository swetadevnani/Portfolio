import { caseStudies, researchProjects } from '@/lib/data'
import CaseStudyCard from '@/components/CaseStudyCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Work — Sweta Devnani',
  description: 'Case studies and research projects by Sweta Devnani, Product Designer.',
}

export default function WorkPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container-inner section-padding">

          {/* Page header */}
          <div className="mb-16">
            <h1 className="font-display text-5xl md:text-6xl text-text mb-4">Work</h1>
            <p className="font-sans text-lg text-text-secondary max-w-2xl">
              This is a curated selection of projects that reflect how I think, research, and design. Each case study highlights a different aspect of my approach, from problem framing and research to iteration and reflection.
            </p>
          </div>

          {/* Case Studies */}
          <section className="mb-24">
            <h2 className="font-sans text-xs font-semibold text-primary uppercase tracking-widest mb-8">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
          </section>

          {/* Research Projects */}
          <section>
            <h2 className="font-sans text-xs font-semibold text-primary uppercase tracking-widest mb-8">
              Research Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-surface">
                    <img
                      src={`/images/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-text/0 group-hover:bg-text/5 transition-colors duration-300" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-2xl text-text leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary uppercase tracking-wider group-hover:gap-3 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Project
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
