import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrandShowcase from '@/components/BrandShowcase'
import { brandProjects, type BrandProject } from '@/lib/data'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return brandProjects.map((project: BrandProject) => ({ slug: project.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = brandProjects.find((p: BrandProject) => p.id === params.slug)
  if (!project) return { title: 'Not found — Sweta Devnani' }
  return {
    title: `${project.title} — Brand Identity | Sweta Devnani`,
    description: project.description,
  }
}

export default function BrandProjectPage({ params }: Props) {
  const project = brandProjects.find((p: BrandProject) => p.id === params.slug)
  if (!project) notFound()

  return (
    <div>
      <Header />
      <BrandShowcase project={project} />
      <Footer />
    </div>
  )
}
