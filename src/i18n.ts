import { i18n } from 'astro:config/client';
import translations from '@/assets/i18n.json';

export function useTranslations(language?: string) {
  return function t(key: string) {
    const getValue = (object: any, path: string) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], object);
    };

    const fallback = i18n!.defaultLocale as keyof typeof translations;
    return (
      getValue(
        translations[(language as keyof typeof translations) ?? fallback],
        key,
      ) ??
      getValue(translations[fallback], key) ??
      key
    );
  };
}
