// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    'nuxt-swiper',
    '@nuxthq/studio',
  ],
  ui: {
    icons: ['hugeicons'],
  },
  colorMode: {
    preference: 'light',
  },
  fonts: {
    families: [
      { name: 'Gothic A1', provider: 'google', weights: ['400', '700', '900'], subsets: ['latin'], display: 'swap',

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
    },
  },
})
