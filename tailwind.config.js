/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b0b0c',
          card: 'rgba(26, 27, 30, 0.7)',
          border: 'rgba(45, 49, 57, 0.4)',
        },
        light: {
          bg: '#fafbfc',
          card: 'rgba(255, 255, 255, 0.95)',
          border: '#e2e8f0',
        },
        brand: {
          cyan: 'var(--brand-cyan)',
          red: 'var(--brand-red)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Outfit', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'SFMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
}
