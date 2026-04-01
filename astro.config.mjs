import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';
import sharp from 'sharp';
import tailwindcss from '@tailwindcss/vite';
import { configuration as i18nConfig } from './src/i18n.ts';

import robots from 'astro-robots';

const { fallback: _fallback, ...astroI18nConfig } = i18nConfig;

export default defineConfig({
  site: `https://${process.env.STAGE === 'staging' ? 'staging.' : ''}coderdojo-schoeneweide.de`,
  base: '/',
  trailingSlash: 'always',
  image: { service: sharp() },
  integrations: [
    react(),
    sitemap(),
    mdx(),
    robots({
      policy: [
        process.env.STAGE === 'staging' ?
          { userAgent: '*', disallow: '/' }
        : { userAgent: '*', allow: '/' },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: 'Table of contents' }]],
    shikiConfig: { theme: 'one-dark-pro', wrap: true },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    ...astroI18nConfig,
    routing: {
      fallbackType: 'redirect',
    },
  },
});
