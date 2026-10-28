import type { MetadataRoute } from "next";
const base = "https://ptuber.web.id";
export default function sitemap(): MetadataRoute.Sitemap {
  return (["en", "id"] as const).map((l) => ({
    url: `${base}/${l}`,
    alternates: { languages: { en: `${base}/en`, id: `${base}/id` } },
  }));
}
