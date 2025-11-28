import translations from './assets/i18n.json';

type Locale = keyof typeof translations;
type Configuration = {
  locales: Locale[];
  defaultLocale: Locale;
  fallback: { [P in Exclude<Locale, 'de'>]: Exclude<Locale, P> };
};

export const configuration: Configuration = {
  locales: Object.keys(translations) as Locale[],
  defaultLocale: 'de' as const,
  fallback: {
    en: 'de',
  } as const,
};

/**
 * Returns a translation function for the given language.
 * @param language The language to use for translations. If undefined, uses the default locale.
 */
export function useTranslations(language?: string) {
  return function t(key: string) {
    const getValue = (object: any, path: string) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], object);
    };

    const locale = (language as Locale) ?? configuration.defaultLocale;
    return (
      getValue(translations[locale as Locale], key) ??
      getValue(
        translations[
          configuration.fallback[locale as Exclude<Locale, 'de'>] as Locale
        ],
        key,
      ) ??
      key
    );
  };
}
