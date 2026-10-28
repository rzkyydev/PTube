import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Baloo_2, Geist } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { RevealObserver } from "@/components/RevealObserver";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

// "js" dipakai CSS supaya konten Reveal cuma disembunyiin kalau JS beneran jalan.
const THEME_INIT = `(function(){var d=document.documentElement;d.classList.add("js");try{var s=localStorage.getItem("ptube-theme");if(s!=="light"&&s!=="dark"){s=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.setAttribute("data-theme",s)}catch(e){d.setAttribute("data-theme","dark")}})();`;

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Baloo 2 itu variable font: satu file untuk semua weight (sebelumnya 3 weight terpisah).
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

const SITE_URL = "https://ptuber.web.id";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    metadataBase: new URL(SITE_URL),
    title: "PTube - PNGTuber",
    description:
      "PNGTuber desktop ringan untuk Windows: avatar PNG-mu bergerak real-time mengikuti suara mic — RAM di bawah 100MB, mulus 60 FPS, siap streaming di manapun.",
    icons: {
      icon: "/icon.png",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", id: "/id", "x-default": "/" },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090c" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geist.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT}
        </Script>
        <MotionProvider>{children}</MotionProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
