import Image from "next/image";
import {
  Eye,
  Gauge,
  GlobeHemisphereWest,
  Keyboard,
  MagicWand,
  MicrophoneSlash,
  MonitorPlay,
  Moon,
  Mouse,
  Smiley,
  Tray,
  UserSwitch,
  Waveform,
} from "@phosphor-icons/react/dist/ssr";
import { SoundWave } from "./SoundWave";
import { Reveal } from "./Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

const AVATAR_IDLE =
  "https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/Picsart_26-07-14_14-39-19-407.png";
const AVATAR_SPEAKING =
  "https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/Picsart_26-07-14_14-39-39-821.png";

const cardCls =
  "glass flex flex-col gap-4 rounded-2xl p-6 transition-colors hover:border-line-strong";

function CardHeader({
  icon,
  title,
  desc,
  tint = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tint?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <span
          className={`grid size-9 place-items-center rounded-xl ${
            tint ? "bg-accent/15 text-accent" : "bg-surface text-ink-2"
          }`}
        >
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-ink-3">{desc}</p>
    </div>
  );
}

function Pill({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        accent
          ? "border-accent/40 bg-accent/15 text-accent"
          : "border-line bg-surface-2 text-ink-2"
      }`}
    >
      {children}
    </span>
  );
}

const speakingFx = ["bounce", "jump", "shake", "wobble", "pulse", "spin jump", "side hop", "cyber glitch"];
const idleFx = ["float", "pulse", "sway", "gentle bounce", "slight spin"];

export function FeatureBento({ dict }: { dict: Dictionary["featureBento"] }) {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {dict.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          {dict.desc}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        <Reveal delay={0.05} className="md:col-span-4">
          <div className={`${cardCls} h-full bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent`}>
            <CardHeader
              icon={<Smiley size={20} weight="fill" />}
              title={dict.cards.fourStates.title}
              desc={dict.cards.fourStates.desc}
              tint
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { src: AVATAR_IDLE, label: "Idle", name: dict.cards.fourStates.idle },
                { src: AVATAR_SPEAKING, label: "Speaking", name: dict.cards.fourStates.speaking },
              ].map((a) => (
                <figure
                  key={a.label}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-panel"
                >
                  <Image
                    src={a.src}
                    alt={`${a.name} — PTube`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute bottom-2 left-2 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {a.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink-4">
                <Eye size={14} weight="fill" className="text-ink-3" />
                {dict.cards.fourStates.blink}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink-4">
                <MicrophoneSlash size={14} weight="fill" className="text-ink-3" />
                {dict.cards.fourStates.mute}
              </span>
              <span className="ml-auto text-[11px] text-ink-5">{dict.cards.fourStates.autoSwitch}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<Waveform size={20} weight="fill" />}
              title={dict.cards.audioEngine.title}
              desc={dict.cards.audioEngine.desc}
            />
            <div className="mt-auto flex flex-col gap-3">
              <SoundWave active className="h-9" />
              <div className="flex flex-wrap gap-1.5">
                <Pill>RMS analysis</Pill>
                <Pill>Noise gate</Pill>
                <Pill accent>High/low-pass</Pill>
                <Pill accent>Attack & release</Pill>
                <Pill>Noise reduction</Pill>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<MonitorPlay size={20} weight="fill" />}
              title={dict.cards.streamMode.title}
              desc={dict.cards.streamMode.desc}
            />
            <div className="mt-auto grid grid-cols-2 gap-2">
              <div
                className="grid h-24 place-items-center rounded-xl border border-line"
                style={{
                  backgroundImage:
                    "conic-gradient(var(--panel-2) 25%, var(--panel) 0 50%, var(--panel-2) 0 75%, var(--panel) 0)",
                  backgroundSize: "16px 16px",
                }}
              >
                <span className="size-10 rounded-full bg-accent/90" />
              </div>
              <div className="grid h-24 place-items-center rounded-xl border border-line bg-[#00b140]">
                <span className="size-10 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Pill accent>{dict.cards.streamMode.greenScreen}</Pill>
              <Pill>{dict.cards.streamMode.clickThrough}</Pill>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<MagicWand size={20} weight="fill" />}
              title={dict.cards.animationSystem.title}
              desc={dict.cards.animationSystem.desc}
            />
            <div className="mt-auto flex flex-col gap-2.5">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-4">
                  {dict.cards.animationSystem.speaking}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {speakingFx.map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-4">
                  {dict.cards.animationSystem.idle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {idleFx.map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<Gauge size={20} weight="fill" />}
              title={dict.cards.lightweight.title}
              desc={dict.cards.lightweight.desc}
            />
            <div className="mt-auto grid grid-cols-3 gap-2">
              {[
                { num: "<100MB", label: dict.cards.lightweight.ram },
                { num: "~0%", label: dict.cards.lightweight.cpu },
                { num: "60 FPS", label: dict.cards.lightweight.anim },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-line-soft bg-panel p-3 text-center">
                  <div className="font-display text-lg font-bold text-accent">{s.num}</div>
                  <div className="mt-0.5 text-[11px] text-ink-3">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<GlobeHemisphereWest size={20} weight="fill" />}
              title={dict.cards.multiLanguage.title}
              desc={dict.cards.multiLanguage.desc}
            />
            <div className="mt-auto flex flex-wrap items-center gap-2">
              {["EN", "ID", "JA", "KO", "ES", "FR"].map((l, i) => (
                <Pill key={l} accent={i === 1}>
                  {l}
                </Pill>
              ))}
              <Pill>{dict.cards.multiLanguage.others}</Pill>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<UserSwitch size={20} weight="fill" />}
              title={dict.cards.profileSystem.title}
              desc={dict.cards.profileSystem.desc}
            />
            <div className="mt-auto flex flex-wrap gap-2">
              {["Chibi", "Miko", "Pixel"].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 rounded-xl border border-line-soft bg-surface-2 px-3 py-2"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-accent-deep/90 font-display text-xs font-bold text-white">
                    {p[0]}
                  </span>
                  <span className="text-xs font-semibold text-ink-2">{p}</span>
                </div>
              ))}
              <Pill accent>.ptube</Pill>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<Keyboard size={20} weight="fill" />}
              title={dict.cards.modesUtils.title}
              desc={dict.cards.modesUtils.desc}
            />
            <ul className="mt-auto space-y-2.5 text-sm text-ink-2">
              {[
                { icon: Keyboard, label: dict.cards.modesUtils.hotkeys },
                { icon: Mouse, label: dict.cards.modesUtils.clickThrough },
                { icon: Tray, label: dict.cards.modesUtils.systemTray },
                { icon: Moon, label: dict.cards.modesUtils.lightDark },
              ].map((r) => (
                <li key={r.label} className="flex items-center gap-2.5">
                  <span className="grid size-7 place-items-center rounded-lg bg-surface text-accent">
                    <r.icon size={15} weight="fill" />
                  </span>
                  {r.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
