import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

const localPath = (path: string) => fileURLToPath(new URL(path, import.meta.url))
const appVersion = JSON.parse(readFileSync(localPath('../package.json'), 'utf8')).version as string

export default defineConfig({
  root: localPath('./'),
  base: '/ticket_sys_web_demo/',
  cacheDir: localPath('../node_modules/.vite'),
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(appVersion)
  },
  build: {
    outDir: localPath('../dist'),
    emptyOutDir: true,
    target: 'es2020'
  },
  server: {
    port: 5173
  },
  test: {
    environment: 'node',
    coverage: { reportsDirectory: localPath('../coverage') },
    include: ['src/**/*.test.ts']
  }
})
