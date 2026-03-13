import type { Metadata } from 'next'
import UsherCaseStudy from './UsherCaseStudy'

export const metadata: Metadata = {
  title: 'Usher — AI-Powered Academic Resource App | Sweta Devnani',
  description:
    'A thesis capstone case study: designing an AI-powered mobile app that bridges Canvas coursework and university library resources to solve the academic discovery problem.',
}

export default function UsherPage() {
  return <UsherCaseStudy />
}
