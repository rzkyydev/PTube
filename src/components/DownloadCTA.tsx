
import {
  DownloadSimple,
  GithubLogo,
  InstagramLogo,
  TiktokLogo,
  WindowsLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Mascot } from "./Mascot";
import { Reveal } from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

const PTUBE_RELEASES =
  "https://github.com/rzkyydev/PTube/releases/latest/download/PTube-Setup.exe";

const PTUBE_SETTINGS =
  "https://github.com/rzkyydev/PTube/releases/latest/download/ptube-setting-recommend.ptube";

const socials = [
  {
    icon: GithubLogo,
    label: "GitHub",
    link: "https://github.com/rzkyydev",
  },
  {
    icon: InstagramLogo,
    label: "Instagram",
    link: "https://www.instagram.com/rzkyy.dev/",
  },
  {
    icon: TiktokLogo,
    label: "Tiktok",
    link: "https://www.tiktok.com/@rzkyydev",
  },
];

export function DownloadCTA({
  dict,
  common,
}: {
  dict: Dictionary["downloadCTA"];
  common: Dictionary["common"];
}) {
  return (
    <section id="unduh" className="mx-auto max-w-6xl px-4 py-28">
      <Reveal>
        <div className="glass-deep relative overflow-hidden rounded-[2rem] border-accent/25 p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,93,143,0.22),transparent_65%)]" />

          <div className="pointer-events-none absolute -left-8 bottom-6 hidden opacity-70 lg:block">
            <Mascot mode="idle" className="h-36 w-36 animate-sway" />
          </div>

          <div className="pointer-events-none absolute -right-8 bottom-6 hidden opacity-70 lg:block">
            <Mascot mode="speaking" className="h-36 w-36" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-ok">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {dict.badge}
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {dict.titlePrefix}{" "}
              <span className="text-accent">{dict.titleHighlight}</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-ink-3 sm:text-lg">
              {dict.desc}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">

              <a
                href={PTUBE_SETTINGS}
                download
                className="flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-5 py-3 text-sm font-bold text-ink-1 transition-colors hover:border-line-strong hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <DownloadSimple
                  size={19}
                  weight="bold"
                  className="text-ink-2"
                />
                {dict.settingsBtn}
              </a>

              <a
                href="#sistem"
                className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-ink-1 transition-colors hover:border-line-strong hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {dict.reqBtn}
              </a>
            </div>

            <div className="mt-10">
              <a
                href={PTUBE_RELEASES}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-accent-deep px-8 py-4 text-base font-bold text-white shadow-[0_12px_36px_rgba(255,93,143,0.4)] transition-all hover:-translate-y-0.5 hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0"
              >
                <DownloadSimple
                  size={22}
                  weight="bold"
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                {common.downloadBtn}
              </a>

              <p className="mt-3 text-xs text-ink-4">{dict.footerText}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
