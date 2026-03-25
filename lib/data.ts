// ============================================================
// Portfolio Data — Edit this file to update your portfolio
// ============================================================

export const siteConfig = {
  name: 'Sweta',
  fullName: 'Sweta Devnani',
  role: 'Product Designer',
  tagline: 'From research to execution, I turn ideas into thoughtful experiences across SaaS, web, and mobile.',
  email: 'swetaux@gmail.com',
  location: 'Philadelphia, PA',
  availableForWork: true,
  resumeUrl: '/resume.pdf', // Contact "Download Resume" only — PDF in public/resume.pdf
  resumeViewUrl: 'https://drive.google.com/file/d/10WQEmdT2TUDpfqBPFgd7_wXS1lElPY9m/view?usp=sharing', // Header & footer "Resume" — opens in new tab
  // Usher mockup video: too large for GitHub when self-hosted. Set to a YouTube/Vimeo embed URL to show on live site, or leave '' to use local /images/usher-mockup.mp4 (only works after compress + remove from .gitignore).
  usherMockupVideoUrl: 'https://www.youtube.com/embed/PzlW5SrnGI8',
  social: {
    linkedin: 'https://www.linkedin.com/in/sweta-devnani/',
    email: 'mailto:swetaux@gmail.com',
  },
}

export const aboutContent = {
  headline: 'Designing with intention, building with empathy.',
  bio: [
    "I'm a Product Designer focused on designing thoughtful digital experiences that solve real problems. I began my journey in UX design and naturally grew into product design as I became more involved in shaping not just interfaces, but the strategy, structure, and outcomes of the products themselves.",
    "I enjoy working on AI/ML products, consumer applications, and early-stage (0→1) products, where design plays a key role in turning complex ideas into intuitive experiences. My approach combines rapid prototyping, continuous iteration, and data-informed decision making. I take end-to-end ownership of the design process, from understanding user needs to delivering implementation-ready solutions.",
    "I work closely with product managers to shape product direction and partner with engineers to ensure designs translate smoothly into shipped products. Outside of work, I enjoy reading, cycling around the city, and attending networking events to meet and learn from people across the design and tech community.",
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
    tags: ['UX Research', 'Accessibility', 'Web Design'],
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
      'Boosted consistency in mental well-being practices by helping students build and sustain stress-management habits through a structured, low-friction experience.',
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
      'Minimized support queries and increased user confidence by making product functionality instantly understandable through an interactive virtual clock within a streamlined e-commerce experience.',
    tags: ['Design Systems', 'Responsive Design', 'Web Design'],
    metrics: ['40% projected reduction in customer support calls', '6 usability tests conducted', '16-week end-to-end product design'],
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
    skills: ['Figma Prototyping', 'ProtoPie', 'Framer', 'Lottie'],
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
  { label: 'Resume', href: 'https://drive.google.com/file/d/10WQEmdT2TUDpfqBPFgd7_wXS1lElPY9m/view?usp=sharing', external: true },
]
