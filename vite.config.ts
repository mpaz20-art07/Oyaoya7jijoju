import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/BiblioAnime20072006/',   // 👈 nombre del repo
  plugins: [react()],
})
