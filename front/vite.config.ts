import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isPortable = process.cwd().startsWith('P:')

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: isPortable
  },
  server: {
    fs: {
      strict: !isPortable
    }
  }
})
