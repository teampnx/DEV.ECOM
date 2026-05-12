import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0B0B0B',
        card: '#111111',
        accent: '#7CFF4F',
        muted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(124,255,79,0.18)',
        card: '0 24px 80px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
} satisfies Config;
