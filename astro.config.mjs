import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://kevinto.me',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },
})
