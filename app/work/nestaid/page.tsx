import type { Metadata } from 'next'
import NestaidCaseStudy from './NestaidCaseStudy'

export const metadata: Metadata = {
  title: 'NestAid — AI-Powered Caregiving Operations | Sweta Devnani',
  description:
    'How secondary research pivoted NestAid from a B2C caregiving marketplace to a B2B AI operations platform — powered by Nessa, an AI scheduling agent.',
}

export default function NestaidPage() {
  return <NestaidCaseStudy />
}
