/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0B0B0B',
        card: '#111111',
        accent: '#7CFF4F',
        muted: '#9CA3AF',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Geist',
          'Satoshi',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'Geist',
          'Inter',
          'Satoshi',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 80px rgba(124,255,79,0.25)',
        card: '0 24px 80px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
