import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const SITE_URL = "https://ptuber.web.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`]));
  return locales.map((l) => ({
    url: `${SITE_URL}/${l}`,
    changeFrequency: "weekly",
    priority: l === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
