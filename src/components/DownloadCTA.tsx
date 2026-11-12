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

export function DownloadCTA({
  dict,
  releaseVersion,
}: {
  dict: Dictionary["downloadCTA"];
  releaseVersion: string | null;
}) {
  return (
    <section id="unduh" className="wrap section-y relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Mascot mode="idle" className="mx-auto h-20 w-20 sm:h-24 sm:w-24" />
        <h2 className="t-h2 mt-4 sm:text-[clamp(2.25rem,1.4rem+3vw,3.5rem)]">{dict.title}</h2>
        <p className="t-lead mx-auto mt-4 max-w-[52ch]">{dict.desc}</p>

        {releaseVersion && (
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-2">
            <span aria-hidden="true" className="size-2 rounded-full bg-ok" />
            {dict.latest}: v{releaseVersion}
          </p>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <ArrowSquareOut size={16} weight="bold" className="opacity-70" aria-hidden="true" />
            {dict.itchBtn}
          </a>
          <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <GithubLogo size={16} weight="bold" className="opacity-70" aria-hidden="true" />
            {dict.allReleases}
          </a>
        </div>
      </Reveal>

      <div className="mt-10 sm:mt-14">
        <DownloadPicker dict={dict} />
      </div>

      <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-line bg-surface-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div className="flex min-w-0 items-start gap-3.5">
          <FileArrowDown size={22} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-ink-1">{dict.presetTitle}</h3>
              <span className="chip">{dict.optional}</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-3">{dict.recommendedSettingsDesc}</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <a href={downloadUrl(FILES.preset)} className="btn btn-secondary w-full sm:w-auto">
            <DownloadSimple size={16} weight="bold" aria-hidden="true" />
            {dict.recommendedSettingsBtn}
          </a>
          <span className="break-all text-center font-mono text-[11px] text-ink-4 sm:text-right">
            {FILES.preset}
          </span>
        </div>
      </div>
    </section>
  );
}
