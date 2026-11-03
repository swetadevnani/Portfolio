// ============================================================
// Portfolio Data — Edit this file to update your portfolio
// ============================================================

export const siteConfig = {
  name: 'Sweta',
  fullName: 'Sweta Devnani',
  role: 'Product Designer',
  tagline: 'I turn complex workflows into clear, usable products.',
  email: 'swetaux@gmail.com',
  location: 'Philadelphia, PA',
  availableForWork: true,
  resumeUrl: 'https://drive.google.com/file/d/1YRubZhLS_ZfCz1zraEPSOvsYk74ZOeT1/view?usp=share_link',
  resumeViewUrl: 'https://drive.google.com/file/d/1YRubZhLS_ZfCz1zraEPSOvsYk74ZOeT1/view?usp=share_link',
  // Usher mockup video: too large for GitHub when self-hosted. Set to a YouTube/Vimeo embed URL to show on live site, or leave '' to use local /images/usher-mockup.mp4 (only works after compress + remove from .gitignore).
  usherMockupVideoUrl: 'https://www.youtube.com/embed/PzlW5SrnGI8',
  social: {
    linkedin: 'https://www.linkedin.com/in/sweta-devnani/',
    email: 'mailto:swetaux@gmail.com',
    github: 'https://github.com/swetadevnani',
  },
}

export const aboutContent = {
  headline: 'I move fast without cutting corners.',
  bio: [
    "My background in architecture taught me to think about how people move through complex systems, where friction appears, and how individual decisions affect the whole experience. Today I apply that same lens to digital products, combining research, interaction design and rapid prototyping to make complicated workflows feel clear.",
    "I use Claude, Cursor, and rapid prototypes when they help me test ideas faster and stay closer to implementation, so important design decisions don't disappear during handoff.",
    "Outside work, I cycle, read obsessively, and occasionally build small tools with AI just to understand what I'm designing for.",
  ],
  highlights: [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Projects Shipped', value: '10+' },
    { label: 'Research Studies', value: '8+' },
    { label: 'Happy Clients', value: '15+' },
  ],
  // Replace with actual image path: /images/shweta.jpg
  imagePlaceholder: true,
}

export type CaseStudy = {
  id: string
  title: string
  context: string
  role: string
  description: string
  tags: string[]
  metrics?: string[]
  comingSoon?: boolean
  image: string      // filename in /images/, e.g. "nestaid.jpg"
  /** Bump this when you replace the image with the same filename (CDN/browser cache). */
  imageCacheBust?: string
  accentColor: string
  href: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'usher',
    title: 'Usher Mobile App',
    context: 'Thesis Capstone Project',
    role: 'UX Designer & Researcher',
    description:
      'Designed a course-connected academic resource discovery experience after research revealed that students struggled to find relevant library resources for their coursework.',
    tags: ['AI/ML', 'User Research', 'Mobile Design'],
    metrics: ['92% task success rate', '75% user preference over Google', '12 user interviews'],
    image: 'usher.jpg',
    accentColor: '#E8A87C',
    href: '/work/usher',
  },
  {
    id: 'nestaid',
    title: 'NestAid — AI-Powered Caregiving Operations',
    context: 'SaaS · AI Agents · Product Design',
    role: 'Product Designer',
    description:
      'Designed a multi-role scheduling experience for caregiving agencies, turning fragmented shift coordination into clear workflows for admins, care workers, and coordinators.',
    tags: ['SaaS', 'AI Agents', 'UX Research'],
    image: 'nestaid.jpg',
    imageCacheBust: '2',
    accentColor: '#C1694F',
    href: '/work/nestaid',
  },
  {
    id: 'constant',
    title: 'Constant Mobile App',
    context: 'UI/UX Design · Academic Project',
    role: 'UX Designer',
    description:
      'Boosted consistency in mental well-being practices by helping students build and sustain stress-management habits through a structured, low-friction experience.',
    tags: ['Mobile Design', 'Habit Design', 'Wellness'],
    metrics: ['88.9% task success rate', '6 usability test participants', '16-week project'],
    image: 'constant.jpg',
    accentColor: '#9E4E38',
    href: '/work/constant',
  },
  {
    id: 'sharp',
    title: 'Sharp Website Redesign',
    context: 'UX Design · Academic Project',
    role: 'UX Designer',
    description:
      'Minimized support queries and increased user confidence by making product functionality instantly understandable through an interactive virtual clock within a streamlined e-commerce experience.',
    tags: ['Design Systems', 'Responsive Design', 'Web Design'],
    metrics: ['40% projected reduction in customer support calls', '6 usability tests conducted', '16-week end-to-end product design'],
    image: 'sharp.jpg',
    accentColor: '#C1694F',
    href: '/work/sharp',
  },
]

export type SkillCategory = {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Research & Understand',
    skills: ['User interviews', 'Behavioral analytics', 'Usability testing', 'Competitive research', 'Information architecture', 'Visual Design'],
  },
  {
    name: 'Designing the experience',
    skills: ['User flows', 'Interaction design', 'Responsive UI', 'Prototyping', 'Design systems', 'Accessibility'],
  },
  {
    name: 'Design to delivery',
    skills: ['Developer handoff', 'Design QA', 'Figma', 'Framer', 'HTML/CSS', 'Claude + Cursor'],
  },
]

export type ResearchProject = {
  id: string
  title: string
  description: string
  tags: string[]
  metrics?: string[]
  href: string
  image: string
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'library-utilization',
    title: 'Study of Utilization of Library Resources',
    description:
      'Mixed-method UX research conducted for the Usher Project, examining how students at Thomas Jefferson University discover, access, and engage with library resources. The study identifies key friction points, usage gaps, and behavioral patterns to inform more accessible and student-centered library experiences.',
    tags: ['Mixed Methods', 'Behavioral Insights', 'Research Synthesis'],
    image: 'research-library.jpg',
    href: 'https://drive.google.com/file/d/1bXLizv_gp4I1xj57GtVQI7nkN1GxuRiX/view?usp=sharing',
  },
  {
    id: 'ai-chatbots-design',
    title: 'Usage of AI Chatbots in Design Ideation',
    description:
      'Collaborative research on how architecture students integrate AI tools into early-stage ideation. Synthesized insights from 12 students and 2 faculty to propose curriculum-level improvements for effective AI adoption.',
    tags: ['AI in Design', 'Opportunity Mapping', 'Stakeholder Alignment'],
    image: 'research-ai-chatbots.jpg',
    href: 'https://drive.google.com/file/d/1E8sz1nFck0HW3jt8b_Cy6ibEN63bOcD3/view?usp=sharing',
  },
]

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1YRubZhLS_ZfCz1zraEPSOvsYk74ZOeT1/view?usp=share_link', external: true },
]

export type CurrentlyEntry = {
  title: string
  note: string
  meta?: string
  href?: string
}

export const currentlyContent = {
  label: 'Off the clock',
  headline: 'Things that keep me human',
  subtitle: "What's on my mind and my nightstand, besides the job hunt.",
  updated: '23 October 2026',
  columns: [
    {
      kind: 'Writing',
      icon: 'writing',
      entries: [
        {
          title: 'In the Age of AI, Here\u2019s What I\u2019m Working On',
          note: 'Everyone is building. I\u2019m trying to stay human.',
          meta: 'Oct 2026',
          href: 'https://medium.com/@devnanishwetaa/in-the-age-of-ai-heres-what-i-m-working-on-b3257721f5b0',
        },
        {
          title: 'Graduating Into the Age of AI',
          note: 'Half-sentences from my notes app, finally written down.',
          meta: 'Oct 2026',
          href: 'https://medium.com/@devnanishwetaa/graduating-into-the-age-of-ai-a8f4063b6d31',
        },
      ] as CurrentlyEntry[],
    },
    {
      kind: 'Reading',
      icon: 'reading',
      entries: [
        {
          title: 'The Design of Everyday Things',
          note: 'Re-reading it now that I actually ship things.',
        },
        {
          title: 'The Midnight Library',
          note: 'Beautifully written. There is some quiet magic in this one.',
        },
      ] as CurrentlyEntry[],
    },
    {
      kind: 'Watching',
      icon: 'watching',
      entries: [
        {
          title: 'The Bear',
          note: 'A masterclass in how pressure gets designed into a system.',
        },
        {
          title: 'Ted Lasso',
          note: "One of those shows that makes you forget your phone exists. You just get lost in it.",
        },
      ] as CurrentlyEntry[],
    },
  ],
}

// ============================================================
// Brand / Graphic Design projects
// Shown only on /work (not the homepage). Pages live at
// /work/brand/<id>. Any image left as '' renders as a labelled
// placeholder frame instead of a broken image.
// ============================================================

export type BrandSwatch = {
  name: string
  hex: string
  /** Optional note, e.g. a contrast ratio. */
  note?: string
  /** Set for light swatches so the label stays readable. */
  dark?: boolean
}

export type BrandTypeface = {
  name: string
  role: string
  rationale: string
  /** CSS font-family used to render the specimen. */
  stack: string
}

export type BrandImage = {
  caption: string
  image: string
  span?: 'wide' | 'tall'
  /** Tailwind aspect class; set it when the artwork must not be cropped. */
  aspect?: string
}

export type BrandProject = {
  id: string
  title: string
  tagline: string
  context: string
  role: string
  year: string
  description: string
  tags: string[]
  image: string
  accentColor: string
  href: string
  intro: string[]
  deliverables: string[]
  attributes: { name: string; note: string }[]
  moodKeywords: string[]
  moodNote: string
  moodBoard: BrandImage[]
  palette: BrandSwatch[]
  paletteNote: string
  typography: BrandTypeface[]
  typeScale: { name: string; font: string; weight: string; size: string }[]
  typeNote: string
  logoNote: string
  logoConstruction: string
  /** Optional derivation strip shown above the logo variations. */
  logoEvolution?: BrandImage
  logoVariants: BrandImage[]
  systemNotes: { title: string; body: string }[]
  applications: BrandImage[]
  applicationsNote: string
  /** Full-bleed hero image; falls back to a wordmark plate when absent. */
  heroImage?: string
  /** The hero artwork's own background, so the plate meets it seamlessly. */
  heroBackground?: string
  /** Photographs crop well and fill the frame; flat artwork must not be
      cropped, so it is shown whole. Defaults to 'contain'. */
  heroFit?: 'cover' | 'contain'
  /** Override the large color blocks when palette names differ. */
  blockColors?: { primary?: string; deep?: string; base?: string; subtle?: string; grey?: string }
  /** Full-bleed image replacing the colour statement band before the logo
      section; the wordmark band is used when this is absent. */
  statementImage?: string
  /** Crop ratio for the statement band; shown whole when absent. */
  statementAspect?: string
  /** Optional illustration / mascot section. */
  mascot?: { label: string; note: string; images: BrandImage[] }
  /** Optional link to a related product case study. */
  related?: { label: string; href: string }
  /** Closing reflection, matching the product case studies' structure. */
  reflection?: {
    worked: string[]
    differently: string[]
    next: string[]
    learning: string
  }
}

export const brandProjects: BrandProject[] = [
  {
    id: 'locket',
    title: 'Locket',
    tagline: 'Step into your Memories',
    context: 'Brand Identity · Visual System',
    role: 'Brand & Visual Designer',
    year: '2026',
    description:
      'A complete identity for a memory app built for diaspora communities — mood spectrum, palette, type pairing, a wordmark that opens, and the system applied across every surface.',
    tags: ['Brand Identity', 'Logo Design', 'Visual System'],
    image: 'locket-merch.webp',
    heroImage: 'locket-merch.webp',
    heroFit: 'cover',
    statementImage: 'locket-screens.webp',
    statementAspect: 'aspect-[21/9]',
    accentColor: '#C84B2F',
    href: '/work/brand/locket',
    intro: [
      'Locket is an app for people who live away from where they grew up — it leaves memories in the places they happened, so those places can find you again. The product idea was emotional and quiet, so the identity had to be too.',
      'I built the visual system from nothing: positioning the brand on a mood spectrum, deriving a palette from reference imagery, pairing type that felt warm without feeling dated, and drawing a wordmark that carries the central metaphor in a single letter.',
    ],
    deliverables: [
      'Brand attributes',
      'Mood spectrum & board',
      'Color system',
      'Type pairing & scale',
      'Logo & marks',
      'Components',
      'Brand applications',
    ],
    attributes: [
      { name: 'Light', note: 'Soft, unhurried, never heavy — even though the subject is loss.' },
      { name: 'Simple', note: 'One idea per screen. Nothing competing for attention.' },
      { name: 'Personal', note: 'Warm and hand-considered, not clinical or corporate.' },
    ],
    moodKeywords: ['Quiet', 'Light', 'Simple', 'Personal', 'Heritage-leaning', 'Subdued'],
    moodNote:
      'I positioned the brand on a mood spectrum — each row a visual axis, from Necessity/Luxury to Clinical/Personal. The chosen positions clustered consistently, and those clusters became the three attributes every later decision had to answer to.',
    moodBoard: [
      { caption: 'Reference imagery — golden hour, worn gold, pressed flowers and the light of a remembered afternoon', image: 'locket-moodboard.jpg', span: 'wide', aspect: 'aspect-[3/2]' },
    ],
    palette: [
      { name: 'Primary', hex: '#C84B2F', note: 'Contrast 4.66:1' },
      { name: 'Secondary', hex: '#572C22' },
      { name: 'Subtle', hex: '#ECC0B6', dark: true },
      { name: 'Base', hex: '#EDEBE6', dark: true },
      { name: 'Grey', hex: '#CCC8C0', dark: true },
      { name: 'Black', hex: '#151515' },
    ],
    paletteNote:
      'The color system came out of a full tonal spectrum derived from the mood board, then narrowed to the core values that best reinforced the three attributes. Terracotta carries the warmth; the deep brown grounds it; the near-neutrals keep everything quiet around them.',
    typography: [
      {
        name: 'Merriweather',
        role: 'Headings',
        rationale:
          'Designed for on-screen reading. Its bracketed serifs evoke editorial warmth without feeling dated, reinforcing the personal, nostalgic qualities of the brand.',
        stack: "'Merriweather', Georgia, serif",
      },
      {
        name: 'Nunito Sans',
        role: 'Body & UI',
        rationale:
          'Slightly rounded humanist terminals give it a warm, personal feel where most sans-serifs read as cold or corporate. Holds clarity at small sizes.',
        stack: "'Nunito Sans', system-ui, sans-serif",
      },
    ],
    typeScale: [
      { name: 'Header 1', font: 'Merriweather', weight: 'Semibold', size: '26' },
      { name: 'Header 2', font: 'Merriweather', weight: 'Medium', size: '22' },
      { name: 'Header 3', font: 'Nunito Sans', weight: 'Medium', size: '18' },
      { name: 'Header 4', font: 'Nunito Sans', weight: 'Medium', size: '16' },
      { name: 'Body', font: 'Nunito Sans', weight: 'Light', size: '16' },
      { name: 'Tag', font: 'Nunito Sans', weight: 'Regular', size: '20' },
      { name: 'Button', font: 'Nunito Sans', weight: 'Regular', size: '18' },
    ],
    typeNote:
      'One serif, one sans — chosen to balance emotional warmth against screen-friendly clarity. I shortlisted from a longer set (Lora, Playfair Display, EB Garamond, Crimson Pro, Spectral) and chose on personality first, legibility second.',
    logoNote:
      "The logo embeds the brand's central metaphor directly into the wordmark. The letter “o” is replaced with an illustration of a locket — treating the logo itself as a small ritual object you open to reach your memories.",
    logoEvolution: {
      caption:
        'A real Victorian locket, reduced to a mark that keeps its hinge, rim and starburst, then set in place of the letter it replaces',
      image: 'locket-logo-evolution.webp',
      aspect: 'aspect-[2000/549]',
    },
    logoConstruction:
      'Built on a circular grid to hold proportional integrity at every scale, with a small radial dot inside the locket suggesting the memory glowing within.',
    logoVariants: [
      {
        caption:
          'Primary, secondary, white and outline lockups, the construction grid, and the simplified mark for favicon and app icon',
        image: 'locket-logo-sheet.webp',
        span: 'wide',
        aspect: 'aspect-[2000/1191]',
      },
    ],
    systemNotes: [
      {
        title: 'Buttons',
        body: 'Three tiers — primary, secondary, tertiary — for clear hierarchy, each with a disabled state. Generous corner radii and warm fills carry the inviting, hand-considered quality through to the interface.',
      },
      {
        title: 'Spacing',
        body: "A four-column grid with generous padding and consistent gutters, so every screen keeps its breathing room and the brand's quiet, unhurried pace survives contact with real content.",
      },
    ],
    applications: [
      { caption: 'Stationery \u2014 cards, letterhead, wax seal, postcard', image: 'locket-stationery.webp', span: 'wide', aspect: 'aspect-[3/2]' },
      { caption: 'Tote \u2014 the mark carried out into the day', image: 'locket-tote.webp', aspect: 'aspect-[3/2]' },
      { caption: 'Web presence \u2014 the system on screen', image: 'locket-website.webp', aspect: 'aspect-[3/2]' },
    ],
    applicationsNote:
      'I applied the finished system to real surfaces to test whether it held together across scales — from a wax seal and a letterhead to a canvas tote and a full web page.',
    related: { label: 'See the product design behind Locket', href: '/playground/locket' },
    reflection: {
      worked: [
        'Fixing the brand on a mood spectrum before touching colour kept every later decision answerable to one question: does this feel like a kept thing, or a new one?',
        'Deriving the palette from reference photography rather than picking swatches gave the terracotta and cream a reason to sit together.',
        'Putting the metaphor inside the wordmark \u2014 the locket in place of the \u201co\u201d \u2014 meant the logo does the explaining, so the rest of the system could stay quiet.',
        'Testing the mark at a 25 mm tag before a shop window caught the detail loss early, while the drawing was still cheap to change.',
      ],
      differently: [
        'I designed the palette for light surfaces first and retrofitted the dark UI later; building both from the start would have avoided re-deriving half the tints.',
        'The type scale was set on desktop widths and squeezed on small screens \u2014 I would set the mobile end of the ramp first next time.',
        'I drew the illustration pieces as finished artwork rather than as a kit, which made them harder to recombine for surfaces I had not anticipated.',
      ],
      next: [
        'Write the system up as a usable set of rules rather than a showcase \u2014 what to do with the mark at small sizes, on photography, and in a single colour.',
        'Extend the palette into states the product needs but the brand did not: error, disabled, and the quiet confirmation of something saved.',
        'Test the wordmark with people who would actually use the app, to find out whether the locket reads as a locket without the name beside it.',
      ],
      learning:
        'This started as a very open brief. There was no spec, no client, and no clear edge to the problem, which made it tempting to design everything at once. What actually moved it forward was narrowing: deciding what this brand had to do before deciding what it should look like. Once I had pinned down the few things that were genuinely required, the rest of the system almost chose itself. I came away trusting that part of the process more than any single design decision in it.',
    },
  },
]
