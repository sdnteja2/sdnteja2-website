// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts', 'nuxt-swiper', '@nuxthq/studio', '@vueuse/nuxt', '@nuxtjs/seo'],

  site: {
    url: 'https://sdnteja2.vercel.app',
    name: 'SDN Teja II',
    description: 'Sekolah Dasar Negeri Teja II',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
  },
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle', 'icon'],
    },
    markdown: {
      anchorLinks: false,
    },

  },
  ui: {
    icons: ['hugeicons'],
    global: true,
  },
  colorMode: {
    preference: 'dark',
  },
  fonts: {
    families: [
      { name: 'Maven Pro', provider: 'google', weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'], display: 'swap',
      },
      { name: 'Work Sans', weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], provider: 'google', display: 'swap',
      },
    ],
    defaults: {
      fallbacks: {
        'serif': ['Times New Roman'],
        'sans-serif': ['Arial'],
        'monospace': ['Courier New'],
      },
      preload: true,
      styles: ['normal', 'italic'],
    },
    assets: {
      prefix: '/_fonts',
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  nitro: {
    devProxy: {
      host: '127.0.0.1',
      // host: 'localhost',
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/artikel',
        '/galeri',
        '/guru',
        '/berita',
      ],
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },

    '/artikel/**': { isr: true },
    '/galeri/**': { isr: true },
    '/guru/**': { isr: true },
    '/berita/**': { isr: true },

  },
  hooks: {

    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global)
          comp.global = 'sync'
      }
    },
  },
  // analityc
  // scripts: {
  //   registry: {
  //     googleAnalytics: true,
  //     googleTagManager: true,
  //   },
  // },
  app: {
    seoMeta: {
      themeColor: [
        { content: '#110E26', media: '(prefers-color-scheme: dark)' },
        { content: '#F22727', media: '(prefers-color-scheme: light)' },
      ],
    },
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

    },
  },
})
