import { defineConfig } from 'vite'
import ghPages from 'vite-plugin-gh-pages';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set the warning limit to 1000 kB
  },
  
  base: "/Netflix-Clon", // Replace 'your-repo-name' with the name of your GitHub repository
})

