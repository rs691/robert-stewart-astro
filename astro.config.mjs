// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://rs691.github.io',
  base: '/robert-stewart-astro/',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});