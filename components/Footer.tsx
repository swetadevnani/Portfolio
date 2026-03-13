'use client'

import { Linkedin, Twitter, BookOpen } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

const socialIcons = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'Dribbble', href: siteConfig.social.dribbble, icon: BookOpen },
  { label: 'Twitter', href: siteConfig.social.twitter, icon: Twitter },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-inner px-6 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name + copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-lg text-text hover:text-primary transition-colors duration-200 mb-1 block"
            >
              {siteConfig.name}
              <span className="text-primary">.</span>
            </button>
            <p className="font-sans text-xs text-text-muted">
              © {currentYear} {siteConfig.fullName} · All rights reserved
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-sans text-xs text-text-muted">
            Designed & built with care · Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
