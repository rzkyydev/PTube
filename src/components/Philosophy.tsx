import {
  CheckCircle,
  Lightning,
  Prohibit,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

export function Philosophy({ dict }: { dict: Dictionary["philosophy"] }) {
  return (
    <section id="filosofi" className="mx-auto max-w-6xl px-4 py-28">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent">
            <Lightning size={20} weight="fill" />
          </span>
          <h2 className="min-w-0 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {dict.titlePrefix} <span className="text-accent">{dict.titleHighlight}</span>
          </h2>
        </div>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-3">
          {dict.desc}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="glass h-full rounded-2xl p-8">
            <h3 className="font-display text-lg font-bold text-ink-4">
              {dict.notBuiltTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {dict.notBuiltItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base text-ink-4 line-through decoration-ink-5/60"
                >
                  <Prohibit size={18} weight="fill" className="text-ink-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass h-full rounded-2xl border-accent/20 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent p-8">
            <h3 className="font-display text-lg font-bold text-accent">
              {dict.prioritizedTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {dict.prioritizedItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-medium text-ink-1">
                  <CheckCircle size={20} weight="fill" className="shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
