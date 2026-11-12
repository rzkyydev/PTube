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

const DESCRIPTIONS = {
  id: "PNGTuber desktop yang ringan untuk Windows, macOS, dan Linux: avatar PNG-mu bergerak secara real-time mengikuti suara dari mikrofon. Tanpa webcam, tanpa OBS, siap untuk streaming di mana saja.",
  en: "A lightweight PNGTuber for Windows, macOS and Linux: your PNG avatar moves in real time with your mic. No webcam or OBS needed, ready to stream anywhere.",
} as const;

const TITLE = "PTube - PNGTuber for Windows, macOS and Linux";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PTube",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows, macOS, Linux",
  url: SITE_URL,
  downloadUrl: "https://github.com/rzkyydev/PTube/releases",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Person", name: "RzkyyDev" },
};

const OG_LOCALE = { id: "id_ID", en: "en_US" } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = isLocale(lang) ? lang : "en";
  const description = DESCRIPTIONS[l];
  return {
    metadataBase: new URL(SITE_URL),
    title: TITLE,
    description,
    icons: {
      icon: "/icon.png",
    },
    alternates: {
      canonical: `/${l}`,
      // x-default harus mengarah ke URL yang bisa di-index (bukan "/" yang cuma halaman loading).
      languages: { en: "/en", id: "/id", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: "PTube",
      title: TITLE,
      description,
      url: `/${l}`,
      locale: OG_LOCALE[l],
      alternateLocale: l === "id" ? [OG_LOCALE.en] : [OG_LOCALE.id],
      images: ["/icon.png"],
    },
    twitter: {
      card: "summary",
      title: TITLE,
      description,
      images: ["/icon.png"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#201b1d" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <MotionProvider>{children}</MotionProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
