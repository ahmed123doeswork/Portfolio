import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://ahmed.dev', // update before deployment
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
