// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  components: [
    '~/components',
    '~/components/layout',
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    devProxy: {
      '/api': {
        target: process.env.BACKEND_API,
        changeOrigin: true,
        // prependPath: true,
        autoRewrite: true,
      }
    }
  },
  app: {
    head: {
      title: 'TrueHacker\'s TechNote',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  // vite: {  
  //   optimizeDeps: {
  //     esbuildOptions: {
  //       define: {
  //         // global: 'globalThis'
  //         global: 'window'
  //       }
  //     }
  //   },
  // },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
