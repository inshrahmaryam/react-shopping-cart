import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-shopping-cart/', // 👈 ADD THIS LINE
  plugins: [react()],
})
