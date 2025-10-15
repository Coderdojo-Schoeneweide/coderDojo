// Main content export - combines all site content
import { siteConfig, type SiteConfig } from './site'
import { homepageContent, type HomepageContent } from './pages/homepage'
import { mentoringContent, type MentoringContent } from './pages/mentoring'
import { kooperationenContent, type KooperationenContent } from './pages/kooperationen'
import { newsletterContent, type NewsletterContent } from './pages/newsletter'
import { workshopsContent, type WorkshopsContent } from './pages/workshops'
import { vereinContent, type VereinContent } from './pages/verein'
import { spendenContent, type SpendenContent } from './pages/spenden'
import { jahresberichteContent, type JahresberichteContent } from './pages/jahresberichte'

// Combined site content interface
export interface SiteContent {
    site: SiteConfig
    pages: {
        homepage: HomepageContent
        mentoring: MentoringContent
        kooperationen: KooperationenContent
        newsletter: NewsletterContent
        workshops: WorkshopsContent
        verein: VereinContent
        spenden: SpendenContent
        jahresberichte: JahresberichteContent
    }
}

// Main site content export
export const siteContent: SiteContent = {
    site: siteConfig,
    pages: {
        homepage: homepageContent,
        mentoring: mentoringContent,
        kooperationen: kooperationenContent,
        newsletter: newsletterContent,
        workshops: workshopsContent,
        verein: vereinContent,
        spenden: spendenContent,
        jahresberichte: jahresberichteContent
    }
}

// Re-export individual pieces for direct imports
export { siteConfig } from './site'
export { homepageContent } from './pages/homepage'
export { mentoringContent } from './pages/mentoring'
export { kooperationenContent } from './pages/kooperationen'
export { newsletterContent } from './pages/newsletter'
export { workshopsContent } from './pages/workshops'
export { vereinContent } from './pages/verein'
export { spendenContent } from './pages/spenden'
export { jahresberichteContent } from './pages/jahresberichte'

// Re-export types
export type { SiteConfig, HomepageContent, MentoringContent, KooperationenContent, NewsletterContent, WorkshopsContent, VereinContent, SpendenContent, JahresberichteContent }
