import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use Preact in production to reduce bundle size for small static apps.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: '@preact/compat',
      'react-dom/test-utils': '@preact/test-utils',
      'react-dom': '@preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  },
  build: {
    sourcemap: true
  }
})

