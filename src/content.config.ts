// Content collections configuration for Astro
import { defineCollection, z } from 'astro:content'

// Workshop collection schema
const workshopSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  duration: z.string(),
  age: z.string(),
  tags: z.array(z.string()),
  image: z.string(),
  prevKnowledge: z.string().optional(),
  weight: z.number().optional(),
})

// Define workshops collection
const workshops = defineCollection({
  type: 'content',
  schema: workshopSchema
})

// Define all content collections with schemas
export const collections = {
  // Default collections
  'workshops': workshops,

  // Auto-detected collections from the existing content structure
  'de': defineCollection({ type: 'content' }),
  'en': defineCollection({ type: 'content' }),
  'ar': defineCollection({ type: 'content' }),
  'locales': defineCollection({ type: 'data' }),
  'pages': defineCollection({ type: 'content' }),
}
