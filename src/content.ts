// 📝 CONTENT ONLY - No styling or UI logic here
// Update this file to change website content without touching any components

export interface SiteContent {
    // Site-wide settings
    site: {
        title: string
        description: string
        logo: {
            image: string
            text: string
            width: string
            height: string
        }
        contact: {
            email: string
            social: Array<{
                name: string
                url: string
            }>
        }
    }

    // Page content
    pages: {
        homepage: HomepageContent
        mentoring: MentoringContent
        kooperationen: KooperationenContent
        workshops: WorkshopContent
        newsletter: NewsletterContent
        blog: BlogContent
        verein: VereinContent
        spenden: SpendenContent
    }
}

interface HomepageContent {
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
        buttons?: Array<{
            text: string
            url: string
            style: 'primary' | 'secondary' | 'outline'
            external?: boolean
        }>
        background: 'light' | 'dark' | 'accent'
        imagePosition?: 'left' | 'right'
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

interface MentoringContent {
    hero: {
        title: string
        subtitle?: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
}

interface KooperationenContent {
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

interface WorkshopContent {
    hero: {
        title: string
        subtitle: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
    // Note: Workshop data is now dynamically loaded from public/workshops/ folder
}

interface VereinContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
        buttons: Array<{
            text: string
            url: string
            style: 'primary' | 'secondary' | 'outline'
        }>
    }
}

interface NewsletterContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
    form: {
        title: string
        description: string
        emailLabel: string
        emailPlaceholder: string
        emailHint: string
        privacyLabel: string
        privacyHint: string
        privacyLink: {
            text: string
            url: string
        }
        submitButton: string
        submittingButton: string
        confirmationMessage: string
        errorMessage: string
    }
}

interface BlogContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
    filters: {
        all: string
        searchPlaceholder: string
        noResults: string
    }
    meta: {
        readingTime: string
        publishedOn: string
        writtenBy: string
        tags: string
    }
}

interface SpendenContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
        buttons: Array<{
            text: string
            url: string
            style: 'primary' | 'secondary' | 'outline'
            external?: boolean
        }>
    }
}// 🎯 ALL WEBSITE CONTENT IN ONE PLACE
export const siteContent: SiteContent = {
    site: {
        title: "CoderDojo Schöneweide",
        description: "Inspirierende IT-Workshops für Kinder und Jugendliche. Kostenlose Workshops im Bereich Informatik/Technik jeden zweiten Samstag von 11-13 Uhr.",
        logo: {
            image: "/images/logoP.png",
            text: "CoderDojo Schöneweide",
            width: "48",
            height: "48"
        },
        contact: {
            email: "hallo@coderdojo-schoeneweide.de",
            social: [
                { name: "LinkedIn", url: "#" },
                { name: "Facebook", url: "#" },
                { name: "Instagram", url: "#" },
                { name: "GitHub", url: "#" },
                { name: "YouTube", url: "#" }
            ]
        }
    },

    pages: {
        homepage: {
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
                        { text: "Mehr Infos", url: "/workshops", style: "outline" },
                        { text: "Alle Workshops", url: "/workshops", style: "outline" },
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
                        { text: "Satzung", url: "/satzung", style: "outline" },
                        { text: "Jahresberichte", url: "/jahresberichte", style: "outline" }
                    ]
                }
            ],
            partners: {
                title: "Kooperationen",
                description: [
                    "Sie sind bei einer Schule oder einer anderen<br />Bildungseinrichtung und wollen mit uns kooperieren?",
                    'Schreiben Sie uns eine Mail an <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-primary-600 underline dark:text-primary-300">hallo@coderdojo-schoeneweide.de</a><br />oder füllen Sie unser <a href="/kontakt" class="text-primary-600 underline dark:text-primary-300">Kontaktformular</a> aus.',
                    'Sie möchten wissen, was genau wir anbieten?<br />Sehen Sie unsere <a href="/workshops" class="text-primary-600 underline dark:text-primary-300">Workshop Konzepte</a>'
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
        },

        mentoring: {
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
        },

        kooperationen: {
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
        },

        workshops: {
            hero: {
                title: "Workshops",
                subtitle: "Unsere Angebote für Kinder und Jugendliche",
                background: "light",
                content: [
                    "Hier findest du alle unsere Workshop-Angebote",
                    "Kostenlos, ohne Voranmeldung, jeden zweiten Samstag"
                ]
            }
            // Workshop data is dynamically loaded from public/workshops/ folder
        },

        newsletter: {
            hero: {
                title: "Newsletter",
                background: "light",
                content: [
                    "Du bist Elternteil und möchtest immer über das aktuelle Veranstaltungsangebot des CoderDojo Schöneweide auf dem Laufenden gehalten werden?",
                    "Dann melde dich für den E-Mail-Newsletter an! Dort bekommst du ein bis zwei Mal im Monat alle Infos zu unseren bevorstehenden Workshops."
                ]
            },
            form: {
                title: "Newsletter-Anmeldung",
                description: "Gib deine E-Mail-Adresse ein, um dich anzumelden:",
                emailLabel: "E-Mail-Adresse",
                emailPlaceholder: "E-Mail-Adresse",
                emailHint: "Gib bitte deine E-Mail-Adresse für die Anmeldung an, z. B. abc@xyz.com.",
                privacyLabel: "Ich möchte den Newsletter erhalten und akzeptiere die Datenschutzerklärung.",
                privacyHint: "Du kannst den Newsletter jederzeit über den Link in unserem Newsletter abbestellen.",
                privacyLink: {
                    text: "Datenschutzrichtlinien von Brevo",
                    url: "https://www.brevo.com/de/legal/privacypolicy/"
                },
                submitButton: "Anmelden",
                submittingButton: "Anmeldung wird verarbeitet...",
                confirmationMessage: "Deine Anmeldung zum Newsletter wurde erfolgreich abgeschickt. Vielen Dank! Du erhältst in den nächsten Minuten eine Bestätigungsmail. Bitte klicke auf den Link in dieser Mail, um Deine Anmeldung zum Newsletter zu bestätigen.",
                errorMessage: "Hoppla! Bei Deiner Anmeldung zum Newsletter ist ein Fehler aufgetreten. Bitte lade die Seite neu und versuche es erneut. Wenn der Fehler weiterhin auftritt, kontaktiere uns bitte unter schoeneweide.berlin@coderdojo.com."
            }
        },

        blog: {
            hero: {
                title: "Blog",
                content: [
                    "Entdecke spannende Einblicke in die Welt des CoderDojo Schöneweide.",
                    "Von Workshop-Berichten bis hin zu technischen Tutorials - hier erfährst du alles über unsere Aktivitäten.",
                    "Lass dich inspirieren von den Projekten und Erfahrungen unserer Ninja-Community."
                ],
                background: "light"
            },
            filters: {
                all: "Alle Beiträge",
                searchPlaceholder: "Blog-Beiträge durchsuchen...",
                noResults: "Keine Beiträge gefunden. Versuche es mit anderen Suchbegriffen."
            },
            meta: {
                readingTime: "Lesedauer",
                publishedOn: "Veröffentlicht am",
                writtenBy: "Verfasst von",
                tags: "Tags"
            }
        },

        verein: {
            hero: {
                title: "Verein",
                content: [
                    "Das CoderDojo Schöneweide ist ein eingetragener, gemeinnütziger Verein.",
                    "Wir fördern die digitale Bildung von Kindern und Jugendlichen durch kostenlose Workshops.",
                    "Du möchtest uns unterstützen? Es gibt viele Möglichkeiten!"
                ],
                background: "light",
                buttons: [
                    { text: "Mitglied werden", url: "/mentoring", style: "primary" },
                    { text: "Spenden", url: "/spenden", style: "secondary" },
                    { text: "Satzung", url: "/satzung", style: "outline" }
                ]
            }
        },

        spenden: {
            hero: {
                title: "Spenden",
                content: [
                    "Unterstütze das CoderDojo Schöneweide mit einer Spende.",
                    "Als gemeinnütziger Verein sind wir auf Spenden angewiesen, um kostenlose Workshops anbieten zu können.",
                    "Deine Spende hilft uns bei der Finanzierung von Hardware, Software und Materialien für die Workshops."
                ],
                background: "accent",
                buttons: [
                    { text: "Jetzt spenden", url: "https://paypal.me/coderdojoschoeneweide", style: "primary", external: true },
                    { text: "Banküberweisung", url: "#bank-details", style: "secondary" },
                    { text: "Fördermitglied werden", url: "/mentoring", style: "outline" }
                ]
            }
        }
    }
}
