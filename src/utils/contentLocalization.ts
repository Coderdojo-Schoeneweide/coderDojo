import { configuration, type Locale } from '@/i18n.ts';

type EntryWithId = { id: string; [key: string]: any };

const localePrefixPattern = new RegExp(
  `^(?:${configuration.locales.join('|')})(?=/)`,
);

export function resolveLocale(locale?: string): Locale {
  return locale && configuration.locales.includes(locale as Locale) ?
      (locale as Locale)
    : configuration.defaultLocale;
}

export function getContentLocale(id: string): Locale {
  const prefixMatch = id.match(localePrefixPattern);
  if (prefixMatch) {
    return prefixMatch[0] as Locale;
  }

  return configuration.defaultLocale;
}

export function getBaseContentId(id: string): string {
  let baseId = id;

  if (localePrefixPattern.test(baseId)) {
    baseId = baseId.replace(localePrefixPattern, '').replace(/^\//, '');
  }

  if (baseId.endsWith('/index')) {
    baseId = baseId.slice(0, -('/index'.length));
  }

  return baseId;
}

export function getRouteSlug(id: string): string {
  const baseId = getBaseContentId(id);
  const segments = baseId.split('/').filter(Boolean);
  return (segments.at(-1) ?? baseId) || 'index';
}

export function selectLocalizedEntries(
  entries: EntryWithId[],
  locale?: string,
): EntryWithId[] {
  const selectedLocale = resolveLocale(locale);
  const selectedByBaseId = new Map<string, { entry: EntryWithId; score: number }>();

  for (const entry of entries) {
    const entryLocale = getContentLocale(entry.id);
    const baseId = getBaseContentId(entry.id);

    if (!baseId) {
      continue;
    }

    const score =
      entryLocale === selectedLocale ?
        3
      : entryLocale === configuration.defaultLocale ?
        2
      : 0;

    if (score === 0) {
      continue;
    }

    const current = selectedByBaseId.get(baseId);
    if (!current || score > current.score) {
      selectedByBaseId.set(baseId, { entry, score });
    }
  }

  return [...selectedByBaseId.values()].map(({ entry }) => entry);
}

export function findLocalizedEntryById(
  entries: EntryWithId[],
  id: string,
  locale?: string,
): EntryWithId | undefined {
  return selectLocalizedEntries(entries, locale).find(
    (entry) => getBaseContentId(entry.id) === id,
  );
}

export function findLocalizedEntryBySlug(
  entries: EntryWithId[],
  slug: string,
  locale?: string,
): EntryWithId | undefined {
  return selectLocalizedEntries(entries, locale).find(
    (entry) => getRouteSlug(entry.id) === slug,
  );
}
