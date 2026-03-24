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
        // Clean white + grey + pink palette
        primary: {
          DEFAULT: '#C0305E',   // Accessible deep pink (5.1:1 on white)
          light: '#E84774',     // Vibrant pink for decorative use
          dark: '#8B1A3C',      // Deep rose
        },
        background: '#FAFAFA',  // Near white
        surface: '#F2F2F2',     // Light grey card surface
        'surface-dark': '#E8E8E8', // Deeper grey hover
        text: {
          DEFAULT: '#1A1A1A',   // Near black
          secondary: '#666666', // Mid grey
          muted: '#9A9A9A',     // Light grey hints
        },
        accent: {
          DEFAULT: '#E84774',   // Pink accent
          light: '#F7A0B8',     // Soft pink
        },
        border: '#E0E0E0',      // Light grey border
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
