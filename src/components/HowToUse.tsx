"use client";

import type { Icon } from "@phosphor-icons/react";
import {
  DownloadSimple,
  FileArrowDown,
  Gear,
  Play,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

const PTUBE_SETTINGS =
  "https://github.com/rzkyydev/PTube/releases/latest/download/ptube-setting-recommend.ptube";

type HowToUseProps = {
  dict: Dictionary["howToUse"];
};

const icons: Icon[] = [
  DownloadSimple,
  Play,
  Gear,
  FileArrowDown,
];

export function HowToUse({ dict }: HowToUseProps) {
  return (
    <section id= "cara-pakai" className = "mx-auto max-w-6xl px-4 py-28" >
      <Reveal>
      <div className="mx-auto max-w-2xl text-center" >
        <span className="text-xs font-semibold uppercase tracking-wider text-accent" >
          { dict.eyebrow }
          </span>

          < h2 className = "mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl" >
            { dict.title }
            </h2>

            < p className = "mt-5 text-base leading-relaxed text-ink-3 sm:text-lg" >
              { dict.desc }
              </p>
              </div>
              </Reveal>

              < div className = "mt-14 grid gap-5 md:grid-cols-2" >
              {
                dict.steps.map((step, index) => {
                  const Icon = icons[index];

                  return (
                    <Reveal key= { step.title } delay = { index * 0.08} >
                      <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong" >
                        <div className="flex items-start gap-4" >
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent" >
                            { Icon && <Icon size={ 22 } weight = "bold" />}
                  </div>

                  < div >
                  <span className="text-xs font-semibold text-ink-4" >
                { dict.stepLabel } { index + 1}
                </span>

                < h3 className = "mt-1 text-lg font-bold text-ink-1" >
                  { step.title }
                  </h3>

                  < p className = "mt-2 text-sm leading-relaxed text-ink-3" >
                    { step.description }
                    </p>
                    </div>
                    </div>
                    </div>
                    </Reveal>
          );
})}
</div>

  < Reveal delay = { 0.2} >
    <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-line bg-surface-2 p-6 text-center" >
      <div className="flex flex-col items-center" >
        <FileArrowDown
              size={ 22 }
weight = "bold"
className = "text-accent"
  />

  <h3 className="mt-3 font-bold text-ink-1" >
    { dict.presetTitle }
    </h3>

    < p className = "mt-2 max-w-xl text-sm leading-relaxed text-ink-3" >
      { dict.presetDesc }
      </p>

      < a
href = { PTUBE_SETTINGS }
download
className = "mt-5 inline-flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0"
  >
  <DownloadSimple size={ 18 } weight = "bold" />
    { dict.settingsBtn }
    </a>
    </div>
    </div>
    </Reveal>
    </section>
  );
}