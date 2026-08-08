import { PageBackground } from "@/components/PageBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FeatureBento } from "@/components/FeatureBento";
import { HowItWorks } from "@/components/HowItWorks";
import { Philosophy } from "@/components/Philosophy";
import { TechnicalHighlights } from "@/components/TechnicalHighlights";
import { SystemSecurity } from "@/components/SystemSecurity";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PageBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeatureBento />
        <HowItWorks />
        <Philosophy />
        <TechnicalHighlights />
        <SystemSecurity />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
