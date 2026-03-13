'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-header'
          : 'bg-transparent'
      }`}
    >
      <div className="container-inner px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <motion.a
            href="#"
            className="font-display text-xl text-text hover:text-primary transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {siteConfig.name}
            <span className="text-primary">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/1BDb24SKa61eZT7dn6BfbzG24wJ1aM0WS/view?usp=sharing"
              className="btn-primary text-sm py-2.5 px-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </motion.a>
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
              {navLinks.map((link) => (
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
                href="https://drive.google.com/file/d/1BDb24SKa61eZT7dn6BfbzG24wJ1aM0WS/view?usp=sharing"
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
