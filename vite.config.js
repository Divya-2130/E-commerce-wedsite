import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0',
  port: 5173,
  strictPort: true,
  allowedHosts: ['e-commerce-wedsite.onrender.com']
  ,
  preview: {
    host: '0.0.0.0',
    port: 4173, // Ensure correct port for preview mode
    strictPort: true,
    allowedHosts: ['.onrender.com', 'localhost']
  }
})
