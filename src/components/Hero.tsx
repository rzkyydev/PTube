import { DownloadSimple, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { MicTest } from "./MicTest";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({
  dict,
  common,
  releaseVersion,
}: {
  dict: Dictionary["hero"];
  common: Dictionary["common"];
  releaseVersion: string | null;
}) {
  const badge = releaseVersion
    ? dict.badge.replace(/\bv?\d+(?:\.\d+){1,2}(?:[-+][0-9A-Za-z.-]+)?\b/, "v" + releaseVersion)
    : dict.badge;
  return (
    <section id="top" className="relative mx-auto grid min-h-[100vh] max-w-6xl items-center gap-12 px-4 pb-20 pt-32 lg:grid-cols-2 lg:gap-16 lg:pt-28">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
          <Sparkle size={14} weight="fill" />
          {badge}
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {dict.titlePrefix}{" "}
          <span className="text-accent">{dict.titleHighlight}</span>{dict.titleSuffix}
        </h1>

        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-3 sm:text-lg">
          {dict.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#unduh"
            data-cursor-button
            className="group cursor-download-btn inline-flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(255,93,143,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px active:scale-[0.97]"
          >
            <DownloadSimple weight="bold" className="size-4 transition-transform group-hover:-translate-y-0.5" />
            {common.downloadFree}
          </a>
          <a
            href="#fitur"
            data-cursor-button
            className="cursor-view-btn rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-ink-2 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px"
          >
            {dict.viewFeatures}
          </a>
        </div>
      </div>

      <div className="animate-hero-in">
        <MicTest dict={dict} />
        <p className="mt-3 text-center text-xs text-ink-4">
          {dict.testInstruction}
        </p>
      </div>
    </section>
  );
}
