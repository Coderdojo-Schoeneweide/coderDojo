// Mentoring page content and configuration
export interface MentoringContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
}

export const mentoringContent: MentoringContent = {
    hero: {
        title: "Mentoring",
        content: [
            "Du möchtest ehrenamtlich bei uns mitmachen?",
            'Sehr cool! Schreib uns eine Mail an <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-primary-600 underline dark:text-primary-300">hallo@coderdojo-schoeneweide.de</a>',
            "Was dich erwartet:",
            '<ul class="list-disc list-inside space-y-2 mt-4"><li>Wissen weitergeben / Gemeinschaft gestalten</li><li>Team mit Freude und Engagement</li><li>Eigene Ideen zum Thema Bildung einbringen</li><li>Neue Freundschaften und Netzwerke</li></ul>'
        ],
        background: "light"
    }
}
