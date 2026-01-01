// @ts-check

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.apascualco.com',
  base: '/',
  integrations: [mdx(), sitemap()],
  image: {
    experimentalLayout: 'responsive',
  },
  prefetch: {
    prefetchAll: true,
  },
});