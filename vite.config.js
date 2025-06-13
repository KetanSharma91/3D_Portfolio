import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base to host website in github
  base: '/3D_Portfolio/',
  plugins: [react(), tailwindcss()],
})
