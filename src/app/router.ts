import { NextRequest, NextResponse } from "next/server";
import { LANG_COOKIE, isLocale } from "@/i18n/config";

// "/" -> redirect ke /id atau /en. Route handler biasa, tidak butuh middleware/proxy.
// Urutan: cookie pilihan bahasa -> Accept-Language diawali "id" -> default "en".
export function GET(req: NextRequest) {
  const pref = req.cookies.get(LANG_COOKIE)?.value;
  const accept = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const lang = pref && isLocale(pref) ? pref : accept.startsWith("id") ? "id" : "en";

  const res = NextResponse.redirect(new URL(`/${lang}`, req.url), 307);
  res.headers.set("Cache-Control", "private, no-store");
  res.headers.append("Vary", "Cookie, Accept-Language");
  return res;
}
