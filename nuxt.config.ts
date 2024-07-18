import { theme } from '#tailwind-config'

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

      themeColor: [
        { content: '#110E26', media: '(prefers-color-scheme: dark)' },
        { content: '#F22727', media: '(prefers-color-scheme: light)' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/android-icon-36x36.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/android-icon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/android-icon-72x72.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/android-icon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/android-icon-144x144.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192-maskable.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512-maskable.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon-precomposed', href: '/apple-icon-precomposed.png' },
        { rel: 'apple-touch-icon', href: '/apple-icon.png' },
        { rel: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { rel: 'msapplication-TileColor', content: '#F22727' },
        { rel: 'browserconfig', href: '/browserconfig.xml' },
      ],

    },
  },
})
