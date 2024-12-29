// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@hypernym/nuxt-anime"],
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },
  anime: {
    composables: true
  },

  compatibilityDate: "2024-11-27"
})