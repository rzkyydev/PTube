import { en } from "./en";
import { id } from "./id";
import type { Dictionary } from "./dictionaries";
import type { Locale } from "./config";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "id" ? id : en;
}
