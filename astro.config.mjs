import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'
import sharp from 'sharp'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://coderdojo-schoeneweide.de',
  base: '/',
  trailingSlash: 'never',
  image: { service: sharp() },
  integrations: [react(), sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: 'Table of contents' }]],
    shikiConfig: { theme: 'one-dark-pro', wrap: true },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
