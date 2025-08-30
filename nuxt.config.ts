// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-29',
  devtools: { enabled: true },
  app: {
    // baseURL: 'azelalynetan.github.io',
    head: {
      title: 'Portfolio - Azel Alyne Tan | Frontend Developer', 
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
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

  site: {
    url: 'https://azelalynetan.github.io', 
    name: 'Portfolio - Azel Alyne Tan | Frontend Developer' 
  },

  nitro: {
    // preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },
})