// @ts-check
import antfu from '@antfu/eslint-config'
// @ts-ignore
import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()
export default withNuxt(
  antfu({
    formatters: {
      css: true,
      html: true,
      markdown: false,
    },
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    typescript: true,
    vue: true,
    ...compat.config({
      extends: ['plugin:tailwindcss/recommended'],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    }),
  }),
)
