// Newsletter page content and configuration
export interface NewsletterContent {
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

export const newsletterContent: NewsletterContent = {
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
}
