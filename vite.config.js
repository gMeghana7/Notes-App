import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Updated to root path for Vercel
  plugins: [react()],
})