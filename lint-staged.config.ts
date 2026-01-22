/** @type {import("lint-staged").Configuration} */
export default {
  '*.{ts,vue}': ['pnpm lint:oxlint && pnpm lint:eslint'],
  '*.{vue,css}': ['pnpm lint:style'],
}
