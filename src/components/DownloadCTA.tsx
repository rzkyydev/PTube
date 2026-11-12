import { ArrowSquareOut, ArrowsClockwise, DownloadSimple, FileArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Mascot } from "./Mascot";
import { Reveal } from "./Reveal";
import { DownloadPicker } from "./DownloadPicker";
import type { Dictionary } from "@/i18n/dictionaries";
import { FILES, ITCH_URL, RELEASES_URL, downloadUrl } from "@/lib/downloads";

export function DownloadCTA({
  dict,
  releaseVersion,
}: {
  dict: Dictionary["downloadCTA"];
  releaseVersion: string | null;
}) {
  return (
    <section id="unduh" className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Mascot mode="idle" className="mx-auto h-24 w-24 animate-sway drop-shadow-[0_12px_24px_rgba(255,93,143,0.15)]" />
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {dict.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-ink-3 sm:text-lg">
          {dict.desc}
        </p>
        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ink-3">
          {releaseVersion && (
            <span className="rounded-full border border-line bg-surface px-3 py-1 font-semibold text-ink-2">
              {dict.latest}: v{releaseVersion}
            </span>
          )}
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-accent-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {dict.allReleases}
            <ArrowSquareOut size={14} weight="bold" />
          </a>
        </p>
        <a
          href={ITCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-6 py-3 text-sm font-bold text-ink-1 transition-all hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px"
        >
          <ArrowSquareOut size={16} weight="bold" className="opacity-70" />
          {dict.itchBtn}
        </a>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <DownloadPicker dict={dict} />
      </Reveal>

      <Reveal delay={0.12} className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface-2 p-6">
            <FileArrowDown size={22} weight="bold" className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-bold text-ink-1">{dict.optional}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-3">{dict.recommendedSettingsDesc}</p>
              <a
                href={downloadUrl(FILES.preset)}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-bold text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <DownloadSimple size={16} weight="bold" />
                {dict.recommendedSettingsBtn}
              </a>
              <p className="mt-2 font-mono text-[11px] text-ink-4">{FILES.preset}</p>
            </div>
          </div>

          <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface-2 p-6">
            <ArrowsClockwise size={22} weight="bold" className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-bold text-ink-1">{dict.updatesTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-3">{dict.updatesDesc}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
