import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/behzadwaseem.github.io/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  }
})
