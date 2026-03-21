'use client'

import { Linkedin, Mail } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

const socialIcons = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'Email', href: siteConfig.social.email, icon: Mail },
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
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:items-center">
          {/* Name + copyright */}
          <div className="w-full text-center md:w-auto md:text-left">
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

          {/* Nav links — wrap on small screens so nothing overflows */}
          <nav
            className="flex w-full max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 px-1 md:w-auto md:flex-nowrap md:gap-6 md:px-0"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-text-secondary transition-colors duration-200 hover:text-primary sm:text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xs text-text-secondary transition-colors duration-200 hover:text-primary sm:text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Social icons */}
          <div className="flex shrink-0 items-center justify-center gap-3 md:justify-end">
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
            Built in 48 hours. Claude Code. Cursor. Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}
