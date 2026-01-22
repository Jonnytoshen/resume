# Responsive Web Resume

A modern, engineering-ready responsive web resume project designed for frontend engineers. It uses component-driven development and configuration-based rendering to make content and styling changes fast, while keeping the page structure clean and the codebase maintainable.

**English** | [中文](./README_zh.md)

## Project Structure

```
.
├── public/                     # Static assets
│   └── favicon/                # Site icons and manifest
├── src/
│   ├── assets/                 # Assets
│   ├── components/             # Reusable components
│   │   └── icons/              # Icon components
│   ├── router/                 # Router config
│   ├── views/                  # Page views
│   ├── App.vue                 # Root component
│   ├── config.ts               # Resume content config
│   ├── main.ts                 # App entry
│   └── styles.css              # Global styles
├── index.html                  # Entry HTML
├── vite.config.ts              # Vite config
├── tsconfig*.json              # TypeScript config
├── eslint.config.ts            # ESLint config
├── stylelint.config.ts         # Stylelint config
└── package.json                # Dependencies and scripts
```

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Vue Router
- ESLint + Stylelint
- pnpm

## Usage

1. Install dependencies

   pnpm install

2. Start the dev server

   pnpm dev

3. Build for production

   pnpm build

4. Preview the production build

   pnpm preview

## Content Editing

Resume content is centralized in [src/config.ts](src/config.ts). Components read and render it automatically. Update personal info, experience, skills, and contact details as needed.
