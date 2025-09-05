// Helper functions for loading multilingual workshop content
import { getCollection } from 'astro:content';

// Constants (duplicated from i18n.ts since importing causes issues)
const defaultLanguage = 'de';
const supportedLanguages = ['de', 'en', 'ar'];

/**
 * Gets workshops for a specific language
 * @param lang Language code
 * @returns Workshop collection for the specified language
 */
export async function getWorkshopsForLanguage(lang: string) {
    // Use the default language if the requested language isn't supported
    const langToUse = supportedLanguages.includes(lang) ? lang : defaultLanguage;

    try {
        // The path is now directly under the language folder, not under a workshops collection
        // Format: 'de/workshops/blender/index.md' instead of 'de/workshops/blender.md'
        if (langToUse === 'de') {
            try {
                // For German, we have workshops directly in the 'de' collection
                const deEntries = await getCollection('de');

                // Filter entries to only include workshops (entries with path starting with 'workshops/')
                const workshops = deEntries.filter(entry =>
                    entry.id.startsWith('workshops/') &&
                    !entry.id.endsWith('common.md')
                );

                if (workshops && workshops.length > 0) {
                    console.log(`Found ${workshops.length} workshops for language ${langToUse}`);
                    return workshops;
                }
            } catch (error) {
                console.warn(`Error loading German workshops:`, error);
            }
        } else {
            // For other languages, check if they have workshop entries
            try {
                const langEntries = await getCollection(langToUse);

                // Filter entries to only include workshops
                const workshops = langEntries.filter(entry =>
                    entry.id.startsWith('workshops/') &&
                    !entry.id.endsWith('common.md')
                );

                if (workshops && workshops.length > 0) {
                    console.log(`Found ${workshops.length} workshops for language ${langToUse}`);
                    return workshops;
                }
            } catch (error) {
                console.warn(`No workshops found for ${langToUse}, using German:`, error);
            }
        }

        // If we reach here, either the requested language had no workshops or we failed to load them
        // Fallback to German workshops
        const deEntries = await getCollection('de');
        const workshops = deEntries.filter(entry =>
            entry.id.startsWith('workshops/') &&
            !entry.id.endsWith('common.md')
        );

        if (workshops && workshops.length > 0) {
            console.log(`Using default language (${defaultLanguage}) workshops as fallback, found ${workshops.length}`);
            return workshops;
        }

        // If we still have no workshops, log an error
        console.error(`No workshops found for any language`);
        return [];
    } catch (error) {
        console.error(`Error loading workshops:`, error);
        return [];
    }
}

/**
 * Prepares workshop data for the frontend components
 * @param workshops Raw workshop collection
 * @param lang Language code
 * @returns Processed workshop data ready for components
 */
export function prepareWorkshopData(workshops: any[], lang: string) {
    // Sort workshops by weight (if available) then by title
    const sorted = [...workshops].sort((a, b) => {
        const weightA = a.data.weight ?? 999;
        const weightB = b.data.weight ?? 999;
        if (weightA !== weightB) return weightA - weightB;
        return a.data.title.localeCompare(b.data.title);
    });

    // Get language-specific "not specified" text
    const notSpecifiedText =
        lang === 'en' ? "Not specified" :
            lang === 'ar' ? "غير محدد" :
                "Nicht angegeben";

    // Transform workshops data for the island component
    return sorted.map((workshop) => {
        // Extract the folder name from the workshop ID (e.g., "workshops/blender/index" -> "blender")
        const folderMatch = workshop.id.match(/workshops\/([^/]+)/);
        const folder = folderMatch ? folderMatch[1] : workshop.id;

        // Use images directly from the language-specific folder
        const imagePath = `/${lang}/workshops/${folder}/${workshop.data.image}`;

        return {
            id: folder,
            title: workshop.data.title,
            description: workshop.data.description || '',
            duration: workshop.data.duration,
            age: workshop.data.age,
            tags: workshop.data.tags,
            image: imagePath,
            prevKnowledge: workshop.data.prevKnowledge || notSpecifiedText,
            content: workshop.body, // Markdown content
            folder: folder, // For the modal system
            lang: lang, // Add language information
        };
    });
}
