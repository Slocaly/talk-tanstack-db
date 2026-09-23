import { en } from './locales/en';
import { fr } from './locales/fr';

export type Locale = 'fr' | 'en';

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

const catalogs: Record<Locale, DeepStringify<typeof fr>> = { fr, en };

function resolveLocale(raw: string | undefined): Locale {
  const normalized = raw?.trim().toLowerCase();
  if (normalized === 'en' || normalized === 'en-us' || normalized === 'en-gb') {
    return 'en';
  }
  return 'fr';
}

export const locale: Locale = resolveLocale(import.meta.env.VITE_LOCALE);

export const dateLocale = locale === 'en' ? 'en-US' : 'fr-FR';

const messages = catalogs[locale];

type Messages = DeepStringify<typeof fr>;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Leaves<T> = T extends string
  ? never
  : {
      [K in keyof T & string]: T[K] extends string
        ? K
        : Join<K, Leaves<T[K]>>;
    }[keyof T & string];

export type MessageKey = Leaves<typeof fr>;

type Params = Record<string, string | number>;

function getByPath(obj: Messages, path: string): string | undefined {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

function interpolate(template: string, params?: Params): string {
  if (!params) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    params[key] !== undefined ? String(params[key]) : `{{${key}}}`,
  );
}

/** Translate a message key for the active `VITE_LOCALE` (default: `fr`). */
export function t(key: MessageKey, params?: Params): string {
  const value = getByPath(messages, key);
  if (value === undefined) {
    console.warn(`[i18n] Missing key: ${key}`);
    return key;
  }
  return interpolate(value, params);
}

export function formatDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Date(date).toLocaleDateString(dateLocale, options);
}

export function formatNumber(value: number): string {
  return value.toLocaleString(dateLocale);
}

/** Apply `lang` on `<html>` to match the active locale. */
export function applyDocumentLocale(): void {
  document.documentElement.lang = locale;
}
