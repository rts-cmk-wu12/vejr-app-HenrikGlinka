import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pagesPlugin from 'vite-plugin-pages'

export default defineConfig(({ mode }) => ({
  plugins: [react(), pagesPlugin()],
  base: mode === 'development' ? '/' : '/vejr-app-HenrikGlinka/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
