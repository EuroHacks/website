import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',

  i18n: {
    locales: ['en', 'el', 'de', 'it'],
    defaultLocale: 'en',
  }
});