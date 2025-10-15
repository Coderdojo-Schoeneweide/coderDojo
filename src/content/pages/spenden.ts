// Spenden (Donations) page content and configuration
export interface SpendenContent {
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
}

export const spendenContent: SpendenContent = {
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
