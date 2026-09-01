import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Baloo_2, Geist } from "next/font/google";
import "./globals.css";

const THEME_INIT = `(function(){try{var s=localStorage.getItem("ptube-theme");if(s!=="light"&&s!=="dark"){s=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",s)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PTube — PNGTuber",
  description:
    "PNGTuber desktop ringan untuk Windows: avatar PNG-mu bergerak real-time mengikuti suara mic — RAM di bawah 100MB, mulus 60 FPS, siap streaming di manapun.",
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090c" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { getLocale } = await import('@/i18n/server');
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geist.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT}
        </Script>
        {children}
      </body>
    </html>
  );
}
