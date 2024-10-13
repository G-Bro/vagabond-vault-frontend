import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath , URL} from 'url'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Alias the @ to /src
      '@cmp': path.resolve('./src/components'),
      '@clients': path.resolve('./src/clients'),
    }
  }
})
