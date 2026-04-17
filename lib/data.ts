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
  resumeViewUrl: 'https://drive.google.com/file/d/1O_6MPlcc__YNSNWAqNo28qwqGbDPAVjX/view?usp=sharing', // Header & footer "Resume" — opens in new tab
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
    "I'm a product designer who specializes in SaaS, specifically the hard part: taking a vague problem, a demanding user, and a tight timeline, and turning all three into a shipped product. I come from a research background, which means I don't start with screens; I start with questions.",
    "My workflow is AI-native by design, not because it's trendy, but because it closes the gap between insight and execution. I use Claude and Cursor to compress discovery timelines, Figma Make to prototype faster, and stay in lockstep with engineers so nothing gets lost in handoffs.",
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
    id: 'nestaid',
    title: 'NestAid — AI-Powered Caregiving Operations',
    context: 'SaaS · AI Agents · Product Design',
    role: 'Product Designer',
    description:
      'Conducted secondary research that pivoted NestAid from a B2C caregiving marketplace to a B2B AI operations platform — powered by Nessa, an AI agent that automates scheduling and workforce management for caregiving agencies.',
    tags: ['SaaS', 'AI Agents', 'UX Research'],
    image: 'nestaid.png',
    imageCacheBust: '2',
    accentColor: '#C1694F',
    href: '/work/nestaid',
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
    image: 'research-library.png',
    href: 'https://drive.google.com/file/d/1bXLizv_gp4I1xj57GtVQI7nkN1GxuRiX/view?usp=sharing',
  },
  {
    id: 'ai-chatbots-design',
    title: 'Usage of AI Chatbots in Design Ideation',
    description:
      'Collaborative research on how architecture students integrate AI tools into early-stage ideation. Synthesized insights from 12 students and 2 faculty to propose curriculum-level improvements for effective AI adoption.',
    tags: ['AI in Design', 'Opportunity Mapping', 'Stakeholder Alignment'],
    image: 'research-ai-chatbots.png',
    href: 'https://drive.google.com/file/d/1E8sz1nFck0HW3jt8b_Cy6ibEN63bOcD3/view?usp=sharing',
  },
]

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1O_6MPlcc__YNSNWAqNo28qwqGbDPAVjX/view?usp=sharing', external: true },
]
