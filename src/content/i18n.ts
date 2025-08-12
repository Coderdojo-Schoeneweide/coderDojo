// Internationalization configuration and utilities
export const languages = {
    de: {
        code: 'de',
        name: 'Deutsch',
        flag: '🇩🇪',
        dir: 'ltr'
    },
    en: {
        code: 'en',
        name: 'English',
        flag: '🇺🇸',
        dir: 'ltr'
    },
    ar: {
        code: 'ar',
        name: 'العربية',
        flag: '🇸🇦',
        dir: 'rtl'
    }
} as const

export type LanguageCode = keyof typeof languages
export const defaultLanguage: LanguageCode = 'de'
export const supportedLanguages = Object.keys(languages) as LanguageCode[]

// Language switcher labels
export const languageSwitcher = {
    de: {
        label: 'Sprache',
        title: 'Sprache wechseln'
    },
    en: {
        label: 'Language',
        title: 'Switch language'
    },
    ar: {
        label: 'اللغة',
        title: 'تغيير اللغة'
    }
}

// Common UI translations
export const commonTranslations = {
    de: {
        menu: 'Menü',
        close: 'Schließen',
        loading: 'Wird geladen...',
        error: 'Fehler',
        readMore: 'Mehr lesen',
        backToTop: 'Nach oben'
    },
    en: {
        menu: 'Menu',
        close: 'Close',
        loading: 'Loading...',
        error: 'Error',
        readMore: 'Read more',
        backToTop: 'Back to top'
    },
    ar: {
        menu: 'القائمة',
        close: 'إغلاق',
        loading: 'جاري التحميل...',
        error: 'خطأ',
        readMore: 'اقرأ المزيد',
        backToTop: 'العودة للأعلى'
    }
}

// Utility functions
export function getLanguageFromUrl(url: string): LanguageCode {
    const segments = url.split('/').filter(Boolean)
    const langSegment = segments[0]

    if (langSegment && langSegment in languages) {
        return langSegment as LanguageCode
    }

    return defaultLanguage
}

export function stripLanguageFromUrl(url: string): string {
    const segments = url.split('/').filter(Boolean)
    const langSegment = segments[0]

    if (langSegment && langSegment in languages) {
        return '/' + segments.slice(1).join('/')
    }

    return url
}

export function addLanguageToUrl(url: string, lang: LanguageCode): string {
    if (lang === defaultLanguage) {
        return stripLanguageFromUrl(url)
    }

    const cleanUrl = stripLanguageFromUrl(url)
    return `/${lang}${cleanUrl === '/' ? '' : cleanUrl}`
}
