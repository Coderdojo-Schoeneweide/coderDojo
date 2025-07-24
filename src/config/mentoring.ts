export interface MentoringProgram {
    title: string;
    description: string;
    icon: string;
    tags: string[];
    duration: string;
    age: string;
}

export interface MentoringPageData {
    hero: {
        title: string;
        subtitle: string;
        background: 'primary' | 'secondary' | 'tertiary' | 'accent';
    };
    programs: {
        title?: string;
        description?: string;
        background: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'dark' | 'light';
        items: MentoringProgram[];
    };
}

export const mentoringPageData: MentoringPageData = {
    hero: {
        title: "Mentoring: Wissen weitergeben & Gemeinschaft gestalten",
        subtitle: "Team mit Freude und Engagement – eigene Ideen zum Thema Bildung einbringen und voneinander lernen.",
        background: 'accent'
    },
    programs: {
        background: 'dark',
        items: [
            {
                title: "Peer Mentoring",
                description: "Lerne von anderen und gib dein Wissen weiter. Unser Peer-Mentoring fördert Gemeinschaft und gegenseitige Unterstützung.",
                icon: "🤝",
                tags: ["#gemeinschaft", "#lernen", "#austausch"],
                duration: "fortlaufend",
                age: "ab 12 Jahren",
            },
            {
                title: "Projektbegleitung",
                description: "Du hast eine Idee? Wir begleiten dich von der Planung bis zur Umsetzung und helfen dir, deine Projekte zu verwirklichen.",
                icon: "💡",
                tags: ["#ideen", "#umsetzung", "#begleitung"],
                duration: "individuell",
                age: "alle Altersgruppen",
            },
            {
                title: "Teamwork & Leadership",
                description: "Entwickle Teamgeist und Führungsqualitäten in spannenden Gruppenprojekten und Workshops.",
                icon: "🌟",
                tags: ["#team", "#leadership", "#engagement"],
                duration: "2 Monate",
                age: "ab 14 Jahren",
            },
        ]
    }
};
