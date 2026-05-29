import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Add rollup visualizer when ANALYZE=1
let visualizer
try {
  // lazily require so normal builds are unaffected
  visualizer = require('rollup-plugin-visualizer').visualizer
} catch (e) {
  visualizer = null
}

export default defineConfig({
  plugins: [
    react(),
    ...(process.env.ANALYZE === '1' && visualizer ? [visualizer({ filename: 'dist/bundle-report.html', gzipSize: true, brotliSize: true })] : [])
  ],
  build: { sourcemap: true }
})
