# Product Designer_Sweta

Product Designer who turns research into high-impact, AI-enabled products, delivering measurable outcomes from concept to launch.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Run locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, OG tags
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Tailwind directives + base styles
├── components/
│   ├── Header.tsx          # Sticky nav with scroll blur effect
│   ├── Hero.tsx            # Full-height intro section
│   ├── About.tsx           # Bio + photo + stats
│   ├── CaseStudies.tsx     # Project grid section
│   ├── CaseStudyCard.tsx   # Individual project card component
│   ├── Skills.tsx          # Tools & skills by category
│   ├── Contact.tsx         # Contact CTA + social links
│   └── Footer.tsx          # Simple minimal footer
├── lib/
│   └── data.ts             # ALL content lives here — edit this!
├── tailwind.config.js      # Design system tokens
└── package.json
```

## How to Customize

### Update your content

All text, projects, and links live in **`lib/data.ts`**. Start here:

```ts
// Your basic info
export const siteConfig = {
  name: 'Shweta',
  fullName: 'Shweta Devnani',
  role: 'UX & Product Designer',
  tagline: '...',
  email: 'hello@shweta.design',
  // ...
}

// Your case studies
export const caseStudies: CaseStudy[] = [
  {
    title: 'Your Project Title',
    company: 'Company Name',
    // ...
  }
]
```

### Add a real photo

Replace the SVG illustration in `components/About.tsx` with a real `<Image>` component:

```tsx
import Image from 'next/image'

// Replace the placeholder SVG with:
<Image
  src="/images/shweta.jpg"
  alt="Shweta — UX Designer"
  fill
  className="object-cover"
  priority
/>
```

Place your photo at `public/images/shweta.jpg`.

### Change colors

All colors are defined in `tailwind.config.js` under `theme.extend.colors`. The semantic names are:

| Token | Default | Usage |
|-------|---------|-------|
| `primary` | Terracotta `#C1694F` | CTAs, links, highlights |
| `background` | Cream `#FAF7F2` | Page background |
| `surface` | Warm neutral `#F2EDE5` | Cards, sections |
| `text` | Warm charcoal `#2C2420` | Body text |
| `accent` | Warm amber `#E8A87C` | Decorative accents |

### Update project case study covers

The project cards use inline SVG illustrations. For real project covers:
1. Add images to `public/images/`
2. Update `CaseStudyCard.tsx` to use `next/image` with `fill` or fixed dimensions

## Deploy to Vercel

The easiest deployment — zero config needed:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Or via CLI:

```bash
npx vercel
```

### Add a favicon

Create a `favicon.ico` or `favicon.svg` and place it in the `app/` directory. Next.js will pick it up automatically. Recommended sizes: 32×32 and 180×180 (for Apple touch icon).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion (scroll-triggered fade/slide)
- **Fonts**: DM Serif Display + DM Sans (via `next/font/google`)
- **Icons**: Lucide React
- **Deploy**: Vercel
