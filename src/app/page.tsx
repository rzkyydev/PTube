import { PageBackground } from "@/components/PageBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FeatureBento } from "@/components/FeatureBento";
import { HowItWorks } from "@/components/HowItWorks";
import { HowToUse } from "@/components/HowToUse";
import { Philosophy } from "@/components/Philosophy";
import { TechnicalHighlights } from "@/components/TechnicalHighlights";
import { SystemSecurity } from "@/components/SystemSecurity";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

import { getDictionary, getLanguagePreference } from "@/i18n/server";

export default async function Home() {
  const dict = await getDictionary();
  const pref = await getLanguagePreference();

  return (
    <>
      <PageBackground />
      <Navbar dict={dict.navbar} pref={pref} />
      <main>
        <Hero dict={dict.hero} common={dict.common} />
        <Marquee dict={dict.marquee} />
        <FeatureBento dict={dict.featureBento} />
        <HowItWorks dict={dict.howItWorks} />
        <Philosophy dict={dict.philosophy} />
        <TechnicalHighlights dict={dict.technicalHighlights} />
        <SystemSecurity dict={dict.systemSecurity} />
        <HowToUse dict={dict.howToUse} />
        <DownloadCTA dict={dict.downloadCTA} common={dict.common} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
