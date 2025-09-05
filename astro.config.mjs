import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";

// https://astro.build/config
export default defineConfig({
  site: 'https://coderdojo-schoeneweide.de',
  base: '/',
  trailingSlash: 'never',
  image: { service: sharp() },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      configFile: './config/tailwind.config.js'
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  },
  // Use standard content directory
  contentCollections: {
    source: './src/content',
    config: './src/content/config.ts',
    assets: {
      enabled: true,
      baseUrl: '/content',
    },
  },
  vite: {
    exclude: ['**/src/old-architecture/**'],
  },
});
