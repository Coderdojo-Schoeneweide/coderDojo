// Content collections configuration for Astro
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
<<<<<<< HEAD
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/home' }),
  schema: z.object({
    title: z.string(),
    buttons: z
      .record(
        z.string(),
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .optional(),
=======
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: 'src/content/home' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    style: z.enum(['light', 'dark']),
>>>>>>> origin/master
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '*/[^_]*.{md,mdx}', base: 'src/content/workshops' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).optional(),
    duration: z.string(),
    age: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    prevKnowledge: z.string().optional(),
    weight: z.number().optional(),
  }),
});

export const collections = {
  home,
  workshops,
};
