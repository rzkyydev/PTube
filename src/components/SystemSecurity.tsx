import {
  DesktopTower,
  Microphone,
  ShieldCheck,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

export function SystemSecurity({ dict }: { dict: Dictionary["systemSecurity"] }) {
  const cards = [
    {
      icon: DesktopTower,
      title: dict.requirementsTitle,
      rows: dict.requirements,
    },
    {
      icon: Stack,
      title: dict.stackTitle,
      rows: dict.stack,
    },
    {
      icon: ShieldCheck,
      title: dict.securityTitle,
      rows: dict.security,
    },
  ];

  return (
    <section id="sistem" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {dict.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          {dict.desc}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="glass flex h-full flex-col gap-5 rounded-2xl p-6">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent">
                  <c.icon size={20} weight="fill" />
                </span>
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
              </div>
              <dl className="space-y-2.5">
                {c.rows.map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-3 text-sm">
                    <dt className="shrink-0 text-ink-4">{row.k}</dt>
                    <dd className="text-right text-ink-2">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 flex items-center gap-2 text-xs text-ink-4">
          <Microphone size={14} weight="fill" className="text-accent" />
          {dict.micWarning}
        </p>
      </Reveal>
    </section>
  );
}
