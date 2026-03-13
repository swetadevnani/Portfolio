/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, approachable palette inspired by terracotta + cream
        primary: {
          DEFAULT: '#C1694F',   // Warm terracotta
          light: '#D98A74',     // Lighter terracotta
          dark: '#9E4E38',      // Deeper terracotta
        },
        background: '#FAF7F2',  // Warm cream off-white
        surface: '#F2EDE5',     // Slightly elevated warm neutral for cards
        'surface-dark': '#E8E0D4', // Deeper surface for hover states
        text: {
          DEFAULT: '#2C2420',   // Deep warm charcoal
          secondary: '#6B5B52', // Muted warm brown for secondary text
          muted: '#9C8B82',     // Muted for hints and captions
        },
        accent: {
          DEFAULT: '#E8A87C',   // Warm amber accent
          light: '#F2C9A8',     // Light amber
        },
        border: '#DDD5C8',      // Soft warm border
      },
      fontFamily: {
        display: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      maxWidth: {
        '6xl': '72rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(44, 36, 32, 0.06), 0 4px 24px rgba(44, 36, 32, 0.04)',
        'card-hover': '0 8px 24px rgba(44, 36, 32, 0.12), 0 16px 48px rgba(44, 36, 32, 0.08)',
        'header': '0 1px 0 rgba(44, 36, 32, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
