import { Microphone, MonitorPlay, UserSwitch } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { Mascot } from "./Mascot";
import { SoundWave } from "./SoundWave";
import type { Dictionary } from "@/i18n/dictionaries";

export function HowItWorks({ dict }: { dict: Dictionary["howItWorks"] }) {
  const steps = [
    {
      n: "01",
      title: dict.steps[0].title,
      icon: UserSwitch,
      desc: dict.steps[0].desc,
      visual: (
        <div className="flex -space-x-3">
          {["bg-accent-deep/80", "bg-sky-400/80", "bg-emerald-400/80"].map((c, i) => (
            <span
              key={i}
              className={`grid size-10 place-items-center rounded-full border-2 border-background font-display text-xs font-bold text-white ${c}`}
            >
              {["C", "M", "P"][i]}
            </span>
          ))}
        </div>
      ),
    },
    {
      n: "02",
      title: dict.steps[1].title,
      icon: Microphone,
      desc: dict.steps[1].desc,
      visual: (
        <div className="flex items-center gap-2">
          <Microphone size={18} weight="fill" className="text-accent" />
          <SoundWave active className="h-7" />
        </div>
      ),
    },
    {
      n: "03",
      title: dict.steps[2].title,
      icon: MonitorPlay,
      desc: dict.steps[2].desc,
      visual: (
        <div className="flex items-center gap-2">
          <Mascot mode="speaking" className="h-10 w-10" />
          <span
            className="grid h-8 w-14 place-items-center rounded-md border border-line-strong bg-[#00b140]"
            aria-hidden="true"
          >
            <span className="size-3 rounded-full bg-white" />
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="cara-kerja" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {dict.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          {dict.desc}
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block"
        />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1} className="relative">
            <div className="flex items-center gap-4">
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-accent/40 bg-background font-display text-sm font-bold text-accent">
                {s.n}
              </span>
              <span className="grid size-9 place-items-center rounded-lg bg-surface text-ink-2">
                <s.icon size={18} weight="fill" />
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-3">{s.desc}</p>
            <div className="mt-5 flex items-center rounded-xl border border-line-soft bg-surface-2 p-4">
              {s.visual}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
