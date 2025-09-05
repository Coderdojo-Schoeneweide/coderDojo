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
    lang: z.enum(['de', 'en', 'ar']).optional().default('de'),
    originalId: z.string().optional(), // Reference to the original workshop ID (for translations)
});

// Define collections
const workshopCollection = defineCollection({
    type: 'content',
    schema: workshopSchema
});

// Define all collections with their schemas
export const collections = {
    // Default collections
    'workshops': workshopCollection,

    // Language-specific collections
    'de/workshops': workshopCollection,
    'en/workshops': workshopCollection,
    'ar/workshops': workshopCollection,

    // Auto-detected collections from the existing content structure
    'de': defineCollection({ type: 'content' }),
    'en': defineCollection({ type: 'content' }),
    'ar': defineCollection({ type: 'content' }),
    'locales': defineCollection({ type: 'data' }),
    'pages': defineCollection({ type: 'content' }),
};
