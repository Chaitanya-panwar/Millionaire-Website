import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    outDir: 'build' // Ensure this is the directory you want Render to look at
  }
})
