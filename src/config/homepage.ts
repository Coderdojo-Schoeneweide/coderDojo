import type { SectionConfig } from '@/types'

export const homepageConfig: SectionConfig[] = [
    {
        id: 'hero',
        type: 'hero',
        data: {
            title: 'CoderDojo Schöneweide',
            subtitle: 'Inspirierende IT-Workshops für Kinder und Jugendliche',
            primaryButton: {
                text: 'Ticket buchen',
                href: 'https://pretix.eu/dojosw/',
                target: '_blank'
            },
            secondaryButton: {
                text: 'Spenden',
                href: '/spenden'
            }
        }
    },
    {
        id: 'workshops',
        type: 'feature',
        data: {
            title: 'Workshops',
            backgroundColor: 'dark',
            textColor: 'white',
            buttons: [
                {
                    text: 'Ticket buchen',
                    href: 'https://pretix.eu/dojosw/',
                    variant: 'primary',
                    target: '_blank'
                },
                { text: 'Mehr Infos', href: '/workshops', variant: 'outline' },
                { text: 'Alle Workshops', href: '/workshops', variant: 'outline' },
                {
                    text: 'Newsletter abonnieren',
                    href: '/newsletter',
                    variant: 'primary'
                }
            ],
            content: [
                'Kostenlose Workshops im Bereich Informatik/Technik',
                'Wann: Jeden zweiten Samstag von 11-13 Uhr<br />Wo: In der <a href="#" class="text-blue-200 underline">Mittelpunktbibliothek "Alte Feuerwache"</a>',
                'Für Kinder und Jugendliche zwischen 7-17 Jahren',
                'Kein Vorwissen nötig!',
                'Du möchtest über aktuelle Workshops informiert werden?<br />Melde Dich für den eMail-Newsletter an!'
            ]
        }
    },
    {
        id: 'mentoring',
        type: 'feature',
        data: {
            title: 'Mentoring',
            backgroundColor: 'light',
            textColor: 'gray',
            imagePosition: 'left',
            buttons: [
                {
                    text: 'Mehr Infos',
                    href: '/mentoring',
                    variant: 'primary'
                }
            ],
            content: [
                'Du möchtest ehrenamtlich bei uns mitmachen?<br />Sehr cool! Schreib uns eine Mail an<br /><span class="break-all">hallo@coderdojo-schoeneweide.de</span>',
                'Was dich erwartet:',
                '<ul class="mb-2 list-inside list-disc space-y-1 text-lg text-gray-800 dark:text-gray-200"><li>Wissen weitergeben / Gemeinschaft gestalten</li><li>Team mit Freude und Engagement</li><li>Eigene Ideen zum Thema Bildung einbringen</li></ul>'
            ]
        }
    },
    {
        id: 'verein',
        type: 'feature',
        data: {
            title: 'Verein',
            backgroundColor: 'dark',
            textColor: 'white',
            content: [
                'Das CoderDojo Schöneweide ist ein eingetragener,<br />gemeinnütziger Verein.',
                'Du möchtest Mitglied werden?<br />Infos dazu findest Du im → <a href="/mentoring" class="text-blue-200 underline">Abschnitt "Mentoring"</a>',
                'Du möchtest uns mit einer Spende unterstützen oder Fördermitglied werden?<br />Infos zu Spenden...'
            ],
            buttons: [
                { text: 'Unterstütze uns durch eine Spende', href: '/spenden', variant: 'primary' },
                { text: 'Satzung', href: '/satzung', variant: 'outline' },
                { text: 'Jahresberichte', href: '/jahresberichte', variant: 'outline' }
            ]
        }
    },
    {
        id: 'kooperationen',
        type: 'partners',
        data: {
            title: 'Kooperationen',
            backgroundColor: 'light',
            textColor: 'gray',
            description: [
                'Sie sind bei einer Schule oder einer anderen<br />Bildungseinrichtung und wollen mit uns kooperieren?',
                'Schreiben Sie uns eine Mail an <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-blue-700 underline dark:text-blue-300">hallo@coderdojo-schoeneweide.de</a><br />oder füllen Sie unser <a href="/kontakt" class="text-blue-700 underline dark:text-blue-300">Kontaktformular</a> aus.',
                'Sie möchten wissen, was genau wir anbieten?<br />Sehen Sie unsere <a href="/workshops" class="text-blue-700 underline dark:text-blue-300">Workshop Konzepte</a>'
            ],
            partners: [
                { src: '/partners/partner1.png', alt: 'Partner 1' },
                { src: '/partners/partner2.png', alt: 'Partner 2' },
                { src: '/partners/partner3.png', alt: 'Partner 3' },
                { src: '/partners/partner4.png', alt: 'Partner 4' },
                { src: '/partners/partner5.png', alt: 'Partner 5' },
                { src: '/partners/partner6.png', alt: 'Partner 6' },
                { src: '/partners/partner7.png', alt: 'Partner 7' },
                { src: '/partners/partner8.png', alt: 'Partner 8' },
                { src: '/partners/partner9.png', alt: 'Partner 9' }
            ]
        }
    }
]