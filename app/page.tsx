import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CaseStudies />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
