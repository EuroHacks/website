import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),

  i18n: {
    locales: ['en', 'el', 'de', 'it'],
    defaultLocale: 'en',
  }
});
