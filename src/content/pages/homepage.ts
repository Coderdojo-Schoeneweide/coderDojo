// Homepage content and configuration
export interface HomepageContent {
    hero: {
        title: string
        subtitle: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
        primaryButton: { text: string; url: string; external?: boolean }
        secondaryButton: { text: string; url: string; external?: boolean }
    }
    sections: Array<{
        id: string
        title: string
        content: string[]
        background?: 'light' | 'dark' | 'accent'
        imagePosition?: 'left' | 'right'
        buttons?: Array<{
            text: string
            url: string
            style: 'primary' | 'secondary' | 'outline'
            external?: boolean
        }>
    }>
    partners: {
        title: string
        description: string[]
        logos: Array<{
            image: string
            name: string
        }>
    }
}

export const homepageContent: HomepageContent = {
    hero: {
        title: "CoderDojo Schöneweide",
        subtitle: "Inspirierende IT-Workshops für Kinder und Jugendliche",
        content: [
            "Kostenlose Workshops im Bereich Informatik/Technik",
            "Jeden zweiten Samstag von 11-13 Uhr",
            "Für Kinder und Jugendliche zwischen 7-17 Jahren"
        ],
        background: "light",
        primaryButton: {
            text: "Ticket buchen",
            url: "https://pretix.eu/dojosw/",
            external: true
        },
        secondaryButton: {
            text: "Spenden",
            url: "/spenden"
        }
    },
    sections: [
        {
            id: "workshops",
            title: "Workshops",
            background: "dark",
            content: [
                "Kostenlose Workshops im Bereich Informatik/Technik",
                'Wann: Jeden zweiten Samstag von 11-13 Uhr<br />Wo: In der <a href="#" class="text-primary-300 underline">Mittelpunktbibliothek "Alte Feuerwache"</a>',
                "Für Kinder und Jugendliche zwischen 7-17 Jahren",
                "Kein Vorwissen nötig!",
                "Du möchtest über aktuelle Workshops informiert werden?<br />Melde Dich für den eMail-Newsletter an!"
            ],
            buttons: [
                { text: "Ticket buchen", url: "https://pretix.eu/dojosw/", style: "primary", external: true },
                { text: "Newsletter abonnieren", url: "/newsletter", style: "primary" }
            ]
        },
        {
            id: "mentoring",
            title: "Mentoring",
            background: "light",
            imagePosition: "left",
            content: [
                'Du möchtest ehrenamtlich bei uns mitmachen?<br />Sehr cool! Schreib uns eine Mail an<br /><span class="break-all">hallo@coderdojo-schoeneweide.de</span>',
                "Was dich erwartet:",
                '<ul class="mb-2 list-inside list-disc space-y-1 text-lg text-slate-800 dark:text-slate-200"><li>Wissen weitergeben / Gemeinschaft gestalten</li><li>Team mit Freude und Engagement</li><li>Eigene Ideen zum Thema Bildung einbringen</li></ul>'
            ],
            buttons: [
                { text: "Mehr Infos", url: "/mentoring", style: "primary" }
            ]
        },
        {
            id: "verein",
            title: "Verein",
            background: "dark",
            content: [
                "Das CoderDojo Schöneweide ist ein eingetragener,<br />gemeinnütziger Verein.",
                'Du möchtest Mitglied werden?<br />Infos dazu findest Du im → <a href="/mentoring" class="text-primary-300 underline">Abschnitt "Mentoring"</a>',
                "Du möchtest uns mit einer Spende unterstützen oder Fördermitglied werden?<br />Infos zu Spenden..."
            ],
            buttons: [
                { text: "Unterstütze uns durch eine Spende", url: "/spenden", style: "primary" },
                { text: "Satzung", url: "/satzung.pdf", style: "outline", external: true },
                { text: "Jahresberichte", url: "/jahresberichte", style: "outline" }
            ]
        }
    ],
    partners: {
        title: "Kooperationen",
        description: [
            "Sie sind bei einer Schule oder einer anderen<br />Bildungseinrichtung und wollen mit uns kooperieren?",
            'Schreiben Sie uns eine Mail an <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-primary-600 underline dark:text-primary-300">hallo@coderdojo-schoeneweide.de</a><br />oder füllen Sie unser <a href="/kontakt" class="text-primary-600 underline dark:text-primary-300">Kontaktformular</a> aus.',
            'Sie möchten wissen, was genau wir anbieten?<br />Sehen Sie unsere <a href="#" class="text-primary-600 underline dark:text-primary-300">Workshop Konzepte</a>'
        ],
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
