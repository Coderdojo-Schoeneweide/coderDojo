// Verein (Association) page content and configuration
export interface VereinContent {
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

export const vereinContent: VereinContent = {
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
            { text: "Satzung", url: "/satzung.pdf", style: "outline", external: true }
        ]
    }
}
