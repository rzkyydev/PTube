import {
  ArrowSquareOut,
  DownloadSimple,
  FileArrowDown,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Mascot } from "./Mascot";
import { Reveal } from "./Reveal";
import { DownloadPicker } from "./DownloadPicker";
import type { Dictionary } from "@/i18n/dictionaries";
import { FILES, ITCH_URL, RELEASES_URL, downloadUrl } from "@/lib/downloads";

const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-ink-1 transition-all hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px";

export function DownloadCTA({
  dict,
  releaseVersion,
}: {
  dict: Dictionary["downloadCTA"];
  releaseVersion: string | null;
}) {
  return (
    <section id="unduh" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Mascot
          mode="idle"
          className="mx-auto h-20 w-20 animate-sway drop-shadow-[0_12px_24px_rgba(255,93,143,0.15)] sm:h-24 sm:w-24"
        />
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {dict.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3 sm:mt-5 sm:text-lg">
          {dict.desc}
        </p>

        {releaseVersion && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-3.5 py-1.5 text-xs font-semibold text-ok sm:text-sm">
            <span className="size-1.5 rounded-full bg-ok" aria-hidden="true" />
            {dict.latest}: v{releaseVersion}
          </p>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
            <ArrowSquareOut size={16} weight="bold" className="opacity-70" />
            {dict.itchBtn}
          </a>
          <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
            <GithubLogo size={16} weight="bold" className="opacity-70" />
            {dict.allReleases}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <DownloadPicker dict={dict} />
      </Reveal>

      <Reveal delay={0.12} className="mt-4">
        <div className="flex flex-col gap-5 rounded-2xl border border-line bg-surface-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div className="flex min-w-0 items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
              <FileArrowDown size={22} weight="bold" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-ink-1">{dict.presetTitle}</h3>
                <span className="rounded-full border border-line bg-surface px-2 py-0.5 text-[11px] font-semibold text-ink-3">
                  {dict.optional}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-3">
                {dict.recommendedSettingsDesc}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            <a
              href={downloadUrl(FILES.preset)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-ink-1 transition-all hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px sm:w-auto"
            >
              <DownloadSimple size={16} weight="bold" />
              {dict.recommendedSettingsBtn}
            </a>
            <span className="break-all text-center font-mono text-[11px] text-ink-4 sm:text-right">
              {FILES.preset}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
