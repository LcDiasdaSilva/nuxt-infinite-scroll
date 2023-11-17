export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      }
    }
  },

  css: [
    '~/assets/styles/main.scss'
  ],

  modules: [
    '@vueuse/nuxt', "@nuxtjs/google-fonts"
  ],

  googleFonts: {
    families: {
      Sora: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },

    }
  },
})
