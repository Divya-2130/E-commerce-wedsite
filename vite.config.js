import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0',
  port: 5173, // Ensure this matches your Render PORT setting
  strictPort: true,
  allowedHosts: ['e-commerce-wedsite.onrender.com']
})
