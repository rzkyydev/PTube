import { DownloadSimple, WindowsLogo } from "@phosphor-icons/react/dist/ssr";
import { Mascot } from "./Mascot";
import { Reveal } from "./Reveal";

export function DownloadCTA() {
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
              v4.0.0 siap dicoba
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Siap bikin avatar-mu <span className="text-accent">goyang?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-ink-3 sm:text-lg">
              Gratis, ringan, dan langsung jalan di Windows. Unduh PTube dan bawa avatar PNG-mu ke
              layer berikutnya.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#unduh"
                className="flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-5 py-3 text-sm font-bold text-ink-1 transition-colors hover:border-line-strong hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <WindowsLogo size={19} weight="fill" className="text-ink-2" />
                Windows 10/11 (x64)
              </a>
              <a
                href="#sistem"
                className="rounded-xl border border-line bg-surface-2 px-5 py-3 text-sm font-bold text-ink-1 transition-colors hover:border-line-strong hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Lihat syarat
              </a>
            </div>

            <div className="mt-10">
              <a
                href="#unduh"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-accent-deep px-8 py-4 text-base font-extrabold text-white shadow-[0_12px_36px_rgba(255,93,143,0.4)] transition-all hover:-translate-y-0.5 hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0"
              >
                <DownloadSimple size={22} weight="bold" className="transition-transform group-hover:-translate-y-0.5" />
                Unduh Gratis
              </a>
              <p className="mt-3 text-xs text-ink-4">
                PTube v4.0.0 · tanpa biaya · tanpa akun · tanpa plugin · Windows 10/11 (x64)
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
