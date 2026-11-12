import { DownloadSimple, FileArrowDown } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeader } from "./SectionHeader";
import { FILES, downloadUrl } from "@/lib/downloads";

// Satu-satunya section yang rata tengah: urutan instalasi vertikal dengan garis penghubung.
export function HowToUse({ dict }: { dict: Dictionary["howToUse"] }) {
  return (
    <section id="cara-pakai" className="wrap section-y">
      <SectionHeader center title={dict.title} desc={dict.desc} />

      <ol className="relative mx-auto mt-10 max-w-2xl sm:mt-14">
        {dict.steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5">
            {index < dict.steps.length - 1 && (
              <span aria-hidden="true" className="absolute bottom-0 left-[1.0625rem] top-10 w-px bg-line" />
            )}
            <span
              aria-hidden="true"
              className="relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-full bg-accent-deep font-display text-sm font-bold text-white"
            >
              {index + 1}
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="text-lg font-bold leading-snug text-ink-1">
                <span className="sr-only">
                  {dict.stepLabel} {index + 1}:{" "}
                </span>
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-3 sm:text-base">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 rounded-2xl border border-line bg-surface-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex min-w-0 items-start gap-3.5">
          <FileArrowDown size={22} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
          <div className="min-w-0">
            <h3 className="font-bold text-ink-1">{dict.presetTitle}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-3">{dict.presetDesc}</p>
          </div>
        </div>
        <a href={downloadUrl(FILES.preset)} className="btn btn-primary w-full shrink-0 sm:w-auto">
          <DownloadSimple size={18} weight="bold" aria-hidden="true" />
          {dict.settingsBtn}
        </a>
      </div>
    </section>
  );
}
