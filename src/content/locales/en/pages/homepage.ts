// English homepage content
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
        subtitle: "Inspiring IT workshops for children and teenagers",
        content: [
            "Free workshops in computer science/technology",
            "Every second Saturday from 11 AM to 1 PM",
            "For children and teenagers aged 7-17"
        ],
        background: "light",
        primaryButton: {
            text: "Book Ticket",
            url: "https://pretix.eu/dojosw/",
            external: true
        },
        secondaryButton: {
            text: "Donate",
            url: "/en/donate"
        }
    },
    sections: [
        {
            id: "workshops",
            title: "Workshops",
            background: "dark",
            content: [
                "Free workshops in computer science/technology",
                'When: Every second Saturday from 11 AM to 1 PM<br />Where: At the <a href="#" class="text-primary-300 underline">Central Library "Alte Feuerwache"</a>',
                "For children and teenagers aged 7-17",
                "No prior knowledge required!",
                "Want to stay informed about current workshops?<br />Sign up for our email newsletter!"
            ],
            buttons: [
                { text: "Book Ticket", url: "https://pretix.eu/dojosw/", style: "primary", external: true },
                { text: "All Workshops", url: "/en/workshops", style: "outline" },
                { text: "Subscribe Newsletter", url: "/en/newsletter", style: "primary" }
            ]
        },
        {
            id: "mentoring",
            title: "Mentoring",
            background: "light",
            imagePosition: "left",
            content: [
                'Want to volunteer with us?<br />Great! Send us an email to<br /><span class="break-all">hallo@coderdojo-schoeneweide.de</span>',
                "What to expect:",
                '<ul class="mb-2 list-inside list-disc space-y-1 text-lg text-slate-800 dark:text-slate-200"><li>Share knowledge / Shape community</li><li>Team with joy and engagement</li><li>Contribute your own ideas about education</li></ul>'
            ],
            buttons: [
                { text: "More Info", url: "#mentoring", style: "primary" }
            ]
        },
        {
            id: "verein",
            title: "Association",
            background: "dark",
            content: [
                "CoderDojo Schöneweide is a registered,<br />non-profit association.",
                'Want to become a member?<br />Find info in the → <a href="#mentoring" class="text-primary-300 underline">"Mentoring" section</a>',
                "Want to support us with a donation or become a supporting member?<br />Info about donations..."
            ],
            buttons: [
                { text: "Support us with a donation", url: "/en/donate", style: "primary" },
                { text: "Statutes", url: "/satzung.pdf", style: "outline", external: true },
                { text: "Annual Reports", url: "/en/annual-reports", style: "outline" }
            ]
        }
    ],
    partners: {
        title: "Partnerships",
        description: [
            "Are you with a school or other<br />educational institution and want to cooperate with us?",
            'Write us an email to <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-primary-600 underline dark:text-primary-300">hallo@coderdojo-schoeneweide.de</a><br />or fill out our <a href="/en/contact" class="text-primary-600 underline dark:text-primary-300">contact form</a>.',
            'Want to know exactly what we offer?<br />See our <a href="/en/workshops" class="text-primary-600 underline dark:text-primary-300">workshop concepts</a>'
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
