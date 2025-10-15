// Jahresberichte (Annual Reports) page content and configuration
export interface JahresberichteContent {
    hero: {
        title: string
        subtitle: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
    }
    reports: Array<{
        year: string
        filename: string
        title: string
        description: string
        size: string
    }>
}

export const jahresberichteContent: JahresberichteContent = {
    hero: {
        title: "Jahresberichte",
        subtitle: "Transparenz und Rechenschaft",
        content: [
            "Als gemeinnütziger Verein legen wir großen Wert auf Transparenz.",
            "Hier finden Sie unsere Jahresberichte, die Einblick in unsere Arbeit, Projekte und Finanzen geben.",
            "Die Berichte zeigen, wie wir Ihre Unterstützung einsetzen, um kostenlose IT-Bildung für Kinder und Jugendliche zu ermöglichen."
        ],
        background: "light"
    },
    reports: [
        {
            year: "2024",
            filename: "Jahresbericht2024_Revision01.pdf",
            title: "Jahresbericht 2024 (Revision 01)",
            description: "Unser aktueller Jahresbericht mit allen wichtigen Entwicklungen und Projekten des Jahres 2024.",
            size: "PDF"
        },
        {
            year: "2024",
            filename: "Jahresbericht2024.pdf",
            title: "Jahresbericht 2024",
            description: "Vollständiger Überblick über unsere Aktivitäten, Workshops und Erfolge im Jahr 2024.",
            size: "PDF"
        },
        {
            year: "2023",
            filename: "Jahresbericht2023.pdf",
            title: "Jahresbericht 2023",
            description: "Dokumentation unserer Fortschritte und Erfolge bei der Förderung digitaler Bildung im Jahr 2023.",
            size: "PDF"
        },
        {
            year: "2022",
            filename: "Jahresbericht2022.pdf",
            title: "Jahresbericht 2022",
            description: "Rückblick auf ein erfolgreiches Jahr mit vielen neuen Workshops und Kooperationen.",
            size: "PDF"
        }
    ]
}
