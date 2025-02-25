// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'CodeQuasarr',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CodeQuasarr, developpeur Full Stack' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.webp'}
      ]
    }
  },
  modules: ['@nuxt/ui','@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
})
