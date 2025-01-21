import { defineConfig } from 'vitest/config'
import path from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
