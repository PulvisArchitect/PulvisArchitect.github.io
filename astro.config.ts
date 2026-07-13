import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      prefixDefaultLocale: false
    }
  }
});
