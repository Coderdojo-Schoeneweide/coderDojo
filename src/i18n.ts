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
    sa: 'de',
  } as const,
};

/**
 * Returns a translation function for the given language.
 * @param language The language to use for translations. If undefined, uses the default locale.
 */
export function useTranslations(language?: string) {
  const locale =
    language && configuration.locales.includes(language as Locale) ?
      (language as Locale)
      : configuration.defaultLocale;

  const localePrefixPattern = new RegExp(
    `^/(?:${configuration.locales.join('|')})(?=/|$)`,
  );

  const normalizePath = (path: string) => {
    if (!path.startsWith('/')) {
      return path;
    }

    if (path === '/') {
      return '/';
    }

    return `${path.replace(/\/+$/, '')}/`;
  };

  const toUnlocalizedPath = (path: string) => {
    if (!path.startsWith('/')) {
      return path;
    }

    const normalized = normalizePath(path);
    const withoutLocale = normalized.replace(localePrefixPattern, '') || '/';
    return normalizePath(withoutLocale.startsWith('/') ? withoutLocale : `/${withoutLocale}`);
  };

  return {
    t(key: string) {
      const getValue = (object: any, path: string) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], object);
      };

      const fallbackLocale =
        locale === configuration.defaultLocale ?
          configuration.defaultLocale
          : configuration.fallback[locale as Exclude<Locale, 'de'>];

      return (
        getValue(translations[locale], key) ??
        getValue(translations[fallbackLocale], key) ??
        key
      );
    },
    translatePath(path: string) {
      if (!path.startsWith('/')) {
        return path;
      }

      const unlocalizedPath = toUnlocalizedPath(path);

      if (locale === configuration.defaultLocale) {
        return unlocalizedPath;
      }

      if (unlocalizedPath === '/') {
        return `/${locale}/`;
      }

      return `/${locale}${unlocalizedPath}`;
    },
  };
}
