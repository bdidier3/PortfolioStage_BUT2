import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/PortfolioStage_BUT2/',
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    hmr: { overlay: true },
    watch: { usePolling: true, interval: 100 },
  },
})
