export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export type Preference = "auto" | Locale;

export const LANG_COOKIE = "ptube-lang-pref";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
