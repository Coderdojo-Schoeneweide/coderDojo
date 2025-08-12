// Content collections configuration for Astro
import { defineCollection, z } from 'astro:content'

// Workshop collection schema
const workshops = defineCollection({
  type: 'content',
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
  })
})

export const collections = {
  workshops,
}
