// Workshops page content and configuration
export interface WorkshopsContent {
    hero: {
        title: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
}

export const workshopsContent: WorkshopsContent = {
    hero: {
        title: "Workshops",
        content: [
            "Entdecke unsere vielfältigen IT-Workshops für Kinder und Jugendliche.",
            "Von Programmierung über 3D-Design bis hin zu Künstlicher Intelligenz - hier ist für jeden etwas dabei!",
            "Alle Workshops sind kostenlos und erfordern keine Vorkenntnisse."
        ],
        background: "light"
    }
}
