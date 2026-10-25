import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Two pages: the black-and-gold portfolio (index.html) and the previous blue edition (oldindex.html)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        old: resolve(__dirname, 'oldindex.html'),
      },
    },
  },
})
