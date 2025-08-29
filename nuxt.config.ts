// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-29',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/mdc'
  ],
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [400, 700]
      },
      {
        name: 'Roboto',
        provider: 'google',
        weights: [400, 500, 700]
      },
      {
        name: 'Nunito',
        provider: 'google',
        weights: [400, 700]
      },
    ],
  },
  // content: {
  //   // optional, but good to set
  //   documentDriven: true, // enables document-driven mode
  // }
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
})