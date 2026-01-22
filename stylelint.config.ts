/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    '@dreamsicle.io/stylelint-config-tailwindcss',
  ],
  rules: {
    'value-keyword-case': ['lower', { ignoreProperties: ['--font-sans', 'font-family'] }],
  },
}
