import { cookies, headers } from 'next/headers';
import { en } from './en';
import { id } from './id';
import type { Dictionary } from './dictionaries';

export type Locale = 'en' | 'id';
export type Preference = 'auto' | 'en' | 'id';

export async function getLanguagePreference(): Promise<Preference> {
  const cookieStore = await cookies();
  const pref = cookieStore.get('ptube-lang-pref')?.value;
  if (pref === 'en' || pref === 'id') return pref as Preference;
  return 'auto';
}

export async function getLocale(): Promise<Locale> {
  const pref = await getLanguagePreference();
  if (pref === 'en') return 'en';
  if (pref === 'id') return 'id';

  // Auto detection
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Simple parse for accept-language
  const langs = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().toLowerCase());
  for (const lang of langs) {
    if (lang.startsWith('id')) return 'id';
    if (lang.startsWith('en')) return 'en';
  }
  
  return 'en'; // fallback
}

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getLocale();
  return locale === 'id' ? id : en;
}
