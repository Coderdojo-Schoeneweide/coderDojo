// Content collections configuration for Astro
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Button schema reused across collections
const buttonSchema = z.object({
  label: z.string(),
  url: z.string(),
  style: z.enum(['primary', 'secondary', 'outline']).optional(),
  external: z.boolean().optional(),
});

// Homepage sections (hero carousel sections)
const home = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/home' }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    style: z.enum(['light', 'dark']).optional(),
    buttons: z.record(z.string(), buttonSchema).optional(),
  }),
});

// Workshop content
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

// Page content (heroes, structured sections)
const pages = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: 'src/content/pages' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    background: z.enum(['light', 'dark', 'accent']).default('light'),
    buttons: z.array(buttonSchema).optional(),
    // Newsletter form config (only for newsletter page)
    form: z.object({
      emailPlaceholder: z.string(),
      emailHint: z.string(),
      privacyLabel: z.string(),
      privacyHint: z.string(),
      privacyLinkText: z.string(),
      privacyLinkUrl: z.string(),
      submitButton: z.string(),
      submittingButton: z.string(),
      confirmationMessage: z.string(),
      errorMessage: z.string(),
    }).optional(),
    // Jahresberichte reports list
    reports: z.array(z.object({
      year: z.string(),
      filename: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    // Partner logos
    partners: z.object({
      title: z.string(),
      logos: z.array(z.object({
        image: z.string(),
        name: z.string(),
      })),
    }).optional(),
    // Bank details (for spenden page)
    bankDetails: z.object({
      recipient: z.string(),
      iban: z.string(),
      bic: z.string(),
      reference: z.string(),
      note: z.string().optional(),
    }).optional(),
  }),
});

// Blog posts
const blog = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    authors: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = {
  home,
  workshops,
  pages,
  blog,
};
