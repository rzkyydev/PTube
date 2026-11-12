import { AppleLogo, DownloadSimple, LinuxLogo, WindowsLogo } from "@phosphor-icons/react/dist/ssr";
import { MicTest } from "./MicTest";
import type { Dictionary } from "@/i18n/dictionaries";

const platforms = [
  { icon: WindowsLogo, label: "Windows" },
  { icon: AppleLogo, label: "macOS" },
  { icon: LinuxLogo, label: "Linux" },
];

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
    <section
      id="top"
      className="wrap relative grid min-h-[min(100svh,58rem)] grid-cols-1 items-center gap-12 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-16 lg:pt-28"
    >
      <div className="min-w-0">
        <p className="flex items-start gap-2.5 text-sm font-medium leading-snug text-ink-3">
          <span aria-hidden="true" className="mt-[0.42rem] size-2 shrink-0 rounded-full bg-ok" />
          {badge}
        </p>

        <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.25rem,1.4rem+3.6vw,4rem)] font-bold leading-[1.06] tracking-tight text-balance sm:max-w-[20ch]">
          {dict.titlePrefix} {dict.titleHighlight}
          {dict.titleSuffix}
        </h1>

        <p className="t-lead mt-5 max-w-[48ch]">{dict.description}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#unduh" className="btn btn-primary group w-full sm:w-auto">
            <DownloadSimple
              weight="bold"
              className="size-[1.125rem] transition-transform group-hover:translate-y-0.5"
            />
            {common.downloadFree}
          </a>
          <a href="#fitur" className="btn btn-secondary w-full sm:w-auto">
            {dict.viewFeatures}
          </a>
        </div>

        <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink-3">
          {platforms.map((p) => (
            <li key={p.label} className="inline-flex items-center gap-2">
              <p.icon size={18} weight="fill" className="text-ink-2" aria-hidden="true" />
              {p.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-hero-in mx-auto w-full min-w-0 max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none">
        <MicTest dict={dict} />
        <p className="mx-auto mt-4 max-w-[44ch] text-center text-sm leading-relaxed text-ink-4">
          {dict.testInstruction}
        </p>
      </div>
    </section>
  );
}
