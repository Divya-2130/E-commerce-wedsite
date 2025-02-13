import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0',
  port: 5173, 
  "start": "vite preview --host 0.0.0.0 --port 10000",
  "build": "vite build",
  strictPort: true,
  allowedHosts: ['.onrender.com', 'localhost' ]
  ,
  preview: {
    host: '0.0.0.0',
    port: 4173, // Ensure correct port for preview mode
    strictPort: true,
    allowedHosts: ['.onrender.com', 'localhost']
  }
})
