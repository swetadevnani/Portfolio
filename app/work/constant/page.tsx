import type { Metadata } from 'next'
import ConstantCaseStudy from './ConstantCaseStudy'

export const metadata: Metadata = {
  title: 'Constant — Habit-Forming Journaling App | Sweta Devnani',
  description:
    'A 16-week UX design project: building a habit-forming journaling app that helps university students manage stress and build emotional resilience through guided reflections and mood tracking.',
}

export default function ConstantPage() {
  return <ConstantCaseStudy />
}
