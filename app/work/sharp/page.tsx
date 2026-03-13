import type { Metadata } from 'next'
import SharpCaseStudy from './SharpCaseStudy'

export const metadata: Metadata = {
  title: 'Sharp — E-commerce & Virtual Clock Feature | Sweta Devnani',
  description:
    'Redesigning the Sharp Clocks website with e-commerce functionality and an interactive virtual clock that guides users through setup and troubleshooting in real time.',
}

export default function SharpPage() {
  return <SharpCaseStudy />
}
