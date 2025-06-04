import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pagesPlugin from 'vite-plugin-pages'

export default defineConfig(() => ({
  plugins: [react(), pagesPlugin()],
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
