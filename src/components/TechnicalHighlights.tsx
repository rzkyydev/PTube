import {
  ArrowsClockwise,
  Cpu,
  Database,
  Images,
  LockKey,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

export function TechnicalHighlights({ dict }: { dict: Dictionary["technicalHighlights"] }) {
  const icons = [Cpu, Timer, Images, Database, ArrowsClockwise, LockKey];

  return (
    <section id="teknis" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {dict.badge}
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {dict.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          {dict.desc}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-10 md:grid-cols-2">
        {dict.items.map((it, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={it.title} delay={(i % 3) * 0.06}>
              <div className="flex gap-5 border-t border-line-soft py-6">
                <span className="w-8 shrink-0 pt-0.5 font-display text-xl font-bold text-ink-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-accent">
                  {Icon && <Icon size={19} weight="fill" />}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-3">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
