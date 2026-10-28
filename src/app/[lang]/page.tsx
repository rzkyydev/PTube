import { notFound } from "next/navigation";
import { PageBackground } from "@/components/PageBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Scrollytelling } from "@/components/Scrollytelling";
import { FeatureBento } from "@/components/FeatureBento";
import { HowItWorks } from "@/components/HowItWorks";
import { HowToUse } from "@/components/HowToUse";
import { Philosophy } from "@/components/Philosophy";
import { TechnicalHighlights } from "@/components/TechnicalHighlights";
import { SystemSecurity } from "@/components/SystemSecurity";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Changelog } from "@/components/Changelog";
import { Footer } from "@/components/Footer";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLatestRelease } from "@/lib/release";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const release = await getLatestRelease();
  const releaseVersion = release?.tag_name ? release.tag_name.replace(/^v/i, "") : null;

  return (
    <>
      <PageBackground />
      <Navbar dict={dict.navbar} themeLabels={dict.themeToggle} />
      <main>
        <Hero dict={dict.hero} common={dict.common} releaseVersion={releaseVersion} />
        <Marquee dict={dict.marquee} />
        <Scrollytelling dict={dict.scrolly} common={dict.common} />
        <FeatureBento dict={dict.featureBento} />
        <HowItWorks dict={dict.howItWorks} />
        <Philosophy dict={dict.philosophy} />
        <TechnicalHighlights dict={dict.technicalHighlights} />
        <SystemSecurity dict={dict.systemSecurity} />
        <HowToUse dict={dict.howToUse} />
        <DownloadCTA dict={dict.downloadCTA} />
        <Changelog dict={dict.changelog} release={release} locale={lang} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
