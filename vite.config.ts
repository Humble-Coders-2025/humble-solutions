import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/humble-solutions/', // ✅ must match repo name!
  plugins: [react()],
})
