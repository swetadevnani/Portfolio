// ============================================================
// Portfolio Data — Edit this file to update your portfolio
// ============================================================

export const siteConfig = {
  name: 'Sweta',
  fullName: 'Sweta Devnani',
  role: 'UX & Product Designer',
  tagline: 'UX & Product Designer focused on SaaS, web, and mobile products, where clarity, empathy, and intent drive every decision.',
  email: 'swetaux@gmail.com',
  location: 'Philadelphia, PA',
  availableForWork: true,
  resumeUrl: '#', // Replace with actual resume PDF URL
  social: {
    linkedin: 'https://linkedin.com/in/sweta-devnani',
    dribbble: 'https://dribbble.com/swetadevnani', // Update if different
    twitter: 'https://twitter.com/devnanisweta',
  },
}

export const aboutContent = {
  headline: 'Designing with intention, building with empathy.',
  bio: [
    "I'm a UX & Product Designer based in Philadelphia who tries to understand the \"why\" behind everything — both in design and in life. My work spans end-to-end product design: from research and ideation to interaction design and final handoff.",
    "I studied User Experience & Interaction Design at Thomas Jefferson University, where I also conducted research on AI chatbots to enhance the design ideation process. I've worked on projects ranging from e-commerce platforms and gaming events to mobile apps and design systems — and I'm currently open to new collaborations.",
    "When I'm not designing, I'm writing about UX on Medium, exploring how RTL design challenges our assumptions, or thinking about how AI is reshaping the creative process.",
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
  accentColor: string
  href: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'nestaid',
    title: 'NestAid — Caregiving SaaS Platform',
    context: 'Product Design · UX Research',
    role: 'UX Designer',
    description:
      'Led end-to-end discovery research for a caregiving platform serving elderly users and family caregivers. Defined MVP scope through comprehensive usability studies and competitive analysis.',
    tags: ['UX Research', 'Accessibility', 'WCAG 2.1 AA'],
    comingSoon: true,
    image: 'nestaid.png',
    accentColor: '#C1694F',
    href: '#nestaid',
  },
  {
    id: 'usher',
    title: 'Usher Mobile App',
    context: 'Thesis Capstone Project',
    role: 'UX Designer & Researcher',
    description:
      'Led UX research and design of an AI-powered academic resource app integrating Canvas and library systems. Validated through 12 interviews and 3 pretotyping experiments.',
    tags: ['AI/ML', 'User Research', 'Mobile Design'],
    metrics: ['92% task success rate', '75% user preference over Google', '12 user interviews'],
    image: 'usher.png',
    accentColor: '#E8A87C',
    href: '/work/usher',
  },
  {
    id: 'constant',
    title: 'Constant Mobile App',
    context: 'UI/UX Design · Academic Project',
    role: 'UX Designer',
    description:
      'Designed a habit-forming journaling app to help students manage stress and build emotional resilience. Applied the Hooked Model framework and validated through 6-participant usability testing.',
    tags: ['Mobile Design', 'Habit Design', 'Wellness'],
    metrics: ['88.9% task success rate', '6 usability test participants', '16-week project'],
    image: 'constant.png',
    accentColor: '#9E4E38',
    href: '/work/constant',
  },
  {
    id: 'sharp',
    title: 'Sharp Website Redesign',
    context: 'UX Design · Academic Project',
    role: 'UX Designer',
    description:
      'Built and operationalized an atomic design system with design tokens and reusable components. Launched flagship website that increased inbound inquiries by 50%.',
    tags: ['Design Systems', 'Atomic Design', 'Web Design'],
    metrics: ['50% increase in inquiries', '45% faster turnaround', '6-min avg session duration'],
    image: 'sharp.png',
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
    name: 'Design Tools',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
  },
  {
    name: 'Prototyping',
    skills: ['Figma Prototyping', 'ProtoPie', 'Principle', 'Framer', 'Lottie'],
  },
  {
    name: 'Research & Testing',
    skills: ['User Interviews', 'Usability Testing', 'A/B Testing', 'Maze', 'Hotjar', 'Lookback'],
  },
  {
    name: 'Collaboration',
    skills: ['FigJam', 'Miro', 'Notion', 'Confluence', 'Jira', 'Slack'],
  },
  {
    name: 'Methods',
    skills: [
      'Design Sprints',
      'Journey Mapping',
      'Information Architecture',
      'Card Sorting',
      'Interaction Design',
      'Visual Communication',
    ],
  },
  {
    name: 'AI & Development',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React (Basics)',
      'Claude',
      'Cursor',
      'Figma Make',
    ],
  },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
