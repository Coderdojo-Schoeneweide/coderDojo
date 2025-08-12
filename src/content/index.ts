// Updated multilingual content system
import type { LanguageCode } from './i18n'
import { siteConfigs } from './locales/site'

// Import all language-specific content
import { homepageContent as homepageDE } from './locales/de/pages/homepage'
import { homepageContent as homepageEN } from './locales/en/pages/homepage'
import { homepageContent as homepageAR } from './locales/ar/pages/homepage'

// Import existing German content for backward compatibility
import { newsletterContent } from './pages/newsletter'
import { workshopsContent } from './pages/workshops'
import { spendenContent } from './pages/spenden'
import { jahresberichteContent } from './pages/jahresberichte'

// Content structure for each language
const contentByLanguage = {
    de: {
        site: siteConfigs.de,
        pages: {
            homepage: homepageDE,
            newsletter: newsletterContent,
            workshops: workshopsContent,
            spenden: spendenContent,
            jahresberichte: jahresberichteContent
        }
    },
    en: {
        site: siteConfigs.en,
        pages: {
            homepage: homepageEN,
            // TODO: Add English translations for other pages
            newsletter: newsletterContent, // fallback to German for now
            workshops: workshopsContent,
            spenden: spendenContent,
            jahresberichte: jahresberichteContent
        }
    },
    ar: {
        site: siteConfigs.ar,
        pages: {
            homepage: homepageAR,
            // TODO: Add Arabic translations for other pages
            newsletter: newsletterContent, // fallback to German for now
            workshops: workshopsContent,
            spenden: spendenContent,
            jahresberichte: jahresberichteContent
        }
    }
}

// Helper function to get content for a specific language
export function getContent(lang: LanguageCode) {
    return contentByLanguage[lang] || contentByLanguage.de // fallback to German
}

// For backward compatibility with existing code
export const siteContent = contentByLanguage.de

// Export types for TypeScript
export type { LanguageCode }
export type ContentStructure = typeof contentByLanguage.de
