'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/' + href)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/30 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.5)_inset]'
          : 'bg-background/30 backdrop-blur-lg shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]'
      }`}
    >
      <div className="container-inner px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a
            href="/"
            className="font-display text-xl text-text hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault()
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              } else {
                router.push('/')
              }
            }}
          >
            {siteConfig.name}
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Nav — only in-page links; Resume is the CTA button below */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.filter((link) => !link.external).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <a
              href={siteConfig.resumeViewUrl}
              className="btn-primary text-sm py-2.5 px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-5">
              {navLinks.filter((link) => !link.external).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-base font-medium text-text-secondary hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.resumeViewUrl}
                className="btn-primary w-fit text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
