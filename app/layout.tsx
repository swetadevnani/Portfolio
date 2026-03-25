import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'



const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Sweta — UX & Product Designer',
  icons: {
    icon: '/icon.svg',
  },
  description:
    'Portfolio of Sweta Devnani, a UX and product designer based in Philadelphia. Crafting intuitive, human-centered digital experiences across mobile, web, and AI-powered products.',
  keywords: [
    'UX Designer',
    'Product Designer',
    'UI/UX',
    'Design Systems',
    'Mobile Design',
    'AI Design',
    'Sweta Devnani',
  ],
  authors: [{ name: 'Sweta' }],
  creator: 'Sweta',
  openGraph: {
    title: 'Sweta — UX & Product Designer',
    description:
      'Portfolio of Sweta, a UX and product designer specializing in SaaS web products.',
    url: 'https://shweta.design',
    siteName: "Sweta's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweta — UX & Product Designer',
    description:
      'Portfolio of Sweta, a UX and product designer specializing in SaaS web products.',
    creator: '@shweta',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="bg-background text-text font-sans antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FE82FK64YV"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FE82FK64YV');
          `}
        </Script>
        <Script
          src="https://t.contentsquare.net/uxa/b37124dc81173.js"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  )
}
