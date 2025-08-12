// Multilingual site configuration
import type { LanguageCode } from '../i18n'

export interface SiteConfig {
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

export const siteConfigs: Record<LanguageCode, SiteConfig> = {
    de: {
        title: "CoderDojo Schöneweide",
        description: "Inspirierende IT-Workshops für Kinder und Jugendliche. Kostenlose Workshops im Bereich Informatik/Technik jeden zweiten Samstag von 11-13 Uhr.",
        logo: {
            image: "/images/logoP.png",
            text: "CoderDojo Schöneweide",
            width: "40",
            height: "40"
        },
        contact: {
            email: "schoeneweide.berlin@coderdojo.com",
            social: [
                {
                    name: "GitHub",
                    url: "https://github.com/Coderdojo-Schoeneweide"
                }
            ]
        }
    },
    en: {
        title: "CoderDojo Schöneweide",
        description: "Inspiring IT workshops for children and teenagers. Free workshops in computer science/technology every second Saturday from 11-1 PM.",
        logo: {
            image: "/images/logoP.png",
            text: "CoderDojo Schöneweide",
            width: "40",
            height: "40"
        },
        contact: {
            email: "schoeneweide.berlin@coderdojo.com",
            social: [
                {
                    name: "GitHub",
                    url: "https://github.com/Coderdojo-Schoeneweide"
                }
            ]
        }
    },
    ar: {
        title: "CoderDojo Schöneweide",
        description: "ورش عمل ملهمة في تكنولوجيا المعلومات للأطفال والمراهقين. ورش عمل مجانية في علوم الحاسوب/التكنولوجيا كل سبت ثاني من الساعة 11-1 ظهراً.",
        logo: {
            image: "/images/logoP.png",
            text: "CoderDojo Schöneweide",
            width: "40",
            height: "40"
        },
        contact: {
            email: "schoeneweide.berlin@coderdojo.com",
            social: [
                {
                    name: "GitHub",
                    url: "https://github.com/Coderdojo-Schoeneweide"
                }
            ]
        }
    }
}
