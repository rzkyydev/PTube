import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE, isLocale, type Locale } from "@/i18n/config";

function detectLocale(req: NextRequest): Locale {
  const pref = req.cookies.get(LANG_COOKIE)?.value;
  if (pref && isLocale(pref)) return pref;

  const accept = req.headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    if (tag.startsWith("id")) return "id";
    if (tag.startsWith("en")) return "en";
  }
  return "en";
}

// Halaman /en dan /id sudah di-prerender (statis). Proxy cuma milih salah satunya
// untuk "/" lewat rewrite, jadi URL tetap "/" dan tidak ada redirect tambahan.
export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = `/${detectLocale(req)}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/"],
};
