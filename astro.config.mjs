// @ts-check

import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://apascualco.github.io',
  base: '/apascualco-site',
  integrations: [mdx()],
});