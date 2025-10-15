// Kooperationen (Partnerships) page content and configuration
export interface KooperationenContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
    partners: {
        title: string
        logos: Array<{
            image: string
            name: string
        }>
    }
}

export const kooperationenContent: KooperationenContent = {
    hero: {
        title: "Kooperationen",
        content: [
            "Sie sind bei einer Schule oder einer anderen Bildungseinrichtung und wollen mit uns kooperieren?",
            'Schreiben Sie uns eine Mail an <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-primary-600 underline dark:text-primary-300">hallo@coderdojo-schoeneweide.de</a><br />oder füllen Sie unser <a href="#" class="text-primary-600 underline dark:text-primary-300">Kontaktformular</a> aus.',
            'Sie möchten wissen, was genau wir anbieten?<br />Sehen Sie unsere <a href="#" class="text-primary-600 underline dark:text-primary-300">Workshop Konzepte</a>'
        ],
        background: "light"
    },
    partners: {
        title: "Unsere Partner",
        logos: [
            { image: "/partners/partner1.png", name: "Partner 1" },
            { image: "/partners/partner2.png", name: "Partner 2" },
            { image: "/partners/partner3.png", name: "Partner 3" },
            { image: "/partners/partner4.png", name: "Partner 4" },
            { image: "/partners/partner5.png", name: "Partner 5" },
            { image: "/partners/partner6.png", name: "Partner 6" },
            { image: "/partners/partner7.png", name: "Partner 7" },
            { image: "/partners/partner8.png", name: "Partner 8" },
            { image: "/partners/partner9.png", name: "Partner 9" }
        ]
    }
}
