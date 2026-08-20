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
  resumeUrl: 'https://drive.google.com/file/d/1O_6MPlcc__YNSNWAqNo28qwqGbDPAVjX/view?usp=sharing',
  resumeViewUrl: 'https://drive.google.com/file/d/1O_6MPlcc__YNSNWAqNo28qwqGbDPAVjX/view?usp=sharing',
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
  { label: 'Resume', href: 'https://drive.google.com/file/d/1O_6MPlcc__YNSNWAqNo28qwqGbDPAVjX/view?usp=sharing', external: true },
]
