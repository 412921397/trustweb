# AI Coding Guidelines for TrustWeb Vue.js Project

## Architecture Overview

This is a Vue 3 single-page application for a cryptocurrency/trust platform. Key architectural decisions:

- **State Management**: Pinia with `pinia-plugin-persistedstate` for automatic localStorage persistence
- **Routing**: Vue Router with lazy-loaded components for performance
- **Internationalization**: Vue i18n with 13+ languages stored in `src/i18n/modules/`
- **UI Framework**: Naive UI components integrated with Tailwind CSS
- **Styling**: Tailwind CSS v4 with custom responsive prefixes (`desktop:`, `tablet:`) and PostCSS px-to-viewport conversion
- **Data Visualization**: ECharts for charts and graphs
- **API Layer**: Axios wrapper in `src/service/` with centralized request handling

## Project Structure

```
src/
├── components/          # Reusable UI components (nav, footer, search, echarts)
├── views/              # Page-level components with nested component folders
├── store/modules/      # Pinia stores (system.js, user.js)
├── i18n/modules/       # Language files (en.js, zh_CN.js, etc.)
├── hooks/              # Vue composables (useDarkMode.js, useBreakpoint.js)
├── utils/              # Helper functions (storage, formatting)
├── service/            # API calls and external integrations
└── assets/             # Images, SVGs, videos organized by type
```

## Key Conventions

- **Date Library**: Use `dayjs` exclusively (not moment.js) - see `src/utils/index.js` for examples
- **State Access**: Import stores directly: `import { useSystem } from '@/store'`
- **Responsive Design**:
  - Mobile-first with `tablet:` (768px+) and `desktop:` (992px+) prefixes
  - PostCSS converts px to vw for responsive units (excludes Tailwind and Naive UI)
- **Component Organization**: Views contain `components/` subfolders for page-specific components
- **Dark Mode**: Implemented via CSS classes and `useDarkMode` hook with localStorage persistence
- **Code Quality**: ESLint and Stylelint are mandatory - never disable them

## Development Workflow

- **Start Dev Server**: `yarn serve` (Vue CLI with hot reload)
- **Build Production**: `yarn build` (with compression-webpack-plugin)
- **Linting**: `yarn lint` (ESLint + Prettier integration)
- **Code Formatting**: `yarn prettier` (Prettier with custom config)
- **Git Hooks**: Husky enforces commitlint conventions via `commitizen`
- **Node Version**: Requires Node 18+ (check package.json engines)

## Common Patterns

- **API Calls**: Use service functions from `src/service/api.js` - they return Promises
- **Storage**: Use `getStorage/setStorage` from `src/utils/index.js` for localStorage
- **Money Formatting**: Use `formatMoney` from utils for crypto amounts (K/M/B suffixes)
- **Charts**: Wrap ECharts in `base-echart.vue` component for consistent theming
- **Navigation**: Router guards and meta fields control page behavior (see `src/router/index.js`)

## Integration Points

- **External APIs**: Centralized in `src/service/` with error handling
- **Asset Management**: Images in `src/assets/img/`, SVGs in `src/assets/svg/`
- **Theme Variables**: Custom Tailwind colors (trustBlue, trustGreen) and CSS variables in `src/assets/css/`
- **Build Optimization**: Compression and code splitting configured in `vue.config.js`

## Example Patterns

```vue
<!-- Responsive component with dark mode -->
<template>
  <div class="bg-white dark:bg-black desktop:px-12 tablet:px-6 px-4">
    <n-button class="desktop:text-lg text-base" @click="handleAction">
      {{ $t("common.action") }}
    </n-button>
  </div>
</template>

<script setup>
import { useSystem } from "@/store";
import { formatMoney } from "@/utils";

const { user } = useSystem();
</script>
```

````javascript
// API usage pattern
import { search } from '@/service/api'

const fetchData = async () => {
  try {
    const result = await search({ query: 'bitcoin' })
    // Handle success
  } catch (error) {
    // Centralized error handling
  }
}
```</content>
<parameter name="filePath">/Users/qilin/Desktop/trustweb/.github/copilot-instructions.md
````
