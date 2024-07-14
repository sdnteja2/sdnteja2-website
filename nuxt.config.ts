// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts', 'nuxt-swiper', '@nuxthq/studio', '@vueuse/nuxt', '@nuxtjs/seo'],

  site: {
    url: 'https://sdnteja2.sch.id',
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
    // Products page generated on demand, revalidates in background, cached until API response changes
    // '/artikel': { isr: true },
    // '/galeri': { isr: true },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    // '/products/**': { swr: 3600 },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    // '/blog': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/artikel/**': { isr: true },
    '/galeri/**': { isr: true },
    '/guru/**': { isr: true },
    '/berita/**': { isr: true },
    // Admin dashboard renders only on client-side
    // '/admin/**': { ssr: false },
    // Add cors headers on API routes
    // '/api/**': { cors: true },
    // Redirects legacy urls
    // '/old-page': { redirect: '/new-page' }
  },
  hooks: {
    // Related to https://github.com/nuxt/nuxt/pull/22558
    // Adding all global components to the main entry
    // To avoid lagging during page navigation on client-side
    // Downside: bigger JS bundle
    // With sync: 465KB, gzip: 204KB
    // Without: 418KB, gzip: 184KB
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
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'theme-color',
          content: '#F22727',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
})
