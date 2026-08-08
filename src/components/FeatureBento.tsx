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

export function FeatureBento() {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Semua yang dibutuhin avatar-mu
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          Fitur yang langsung terasa pas streaming — tanpa bikin aplikasi numpuk dan PC melambat.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
        <Reveal delay={0.05} className="md:col-span-4">
          <div className={`${cardCls} h-full bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent`}>
            <CardHeader
              icon={<Smiley size={20} weight="fill" />}
              title="4 Avatar State"
              desc="Idle, Speaking, Blink, dan Mute — dukungan gambar terpisah per state, beralih otomatis."
              tint
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { src: AVATAR_IDLE, label: "Idle", name: "Preview avatar idle" },
                { src: AVATAR_SPEAKING, label: "Speaking", name: "Preview avatar speaking" },
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
                Blink
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink-4">
                <MicrophoneSlash size={14} weight="fill" className="text-ink-3" />
                Mute
              </span>
              <span className="ml-auto text-[11px] text-ink-5">State ganti otomatis ikut suara</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<Waveform size={20} weight="fill" />}
              title="Audio Engine"
              desc="Proses suara real-time kayak DAW ringan — presisi, tanpa suara berisik."
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
              title="Stream Mode"
              desc="Editor ↔ Stream satu tombol — canvas transparan frameless, warna stage custom."
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
              <Pill accent>Green screen ready</Pill>
              <Pill>Click-through</Pill>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<MagicWand size={20} weight="fill" />}
              title="Animation System"
              desc="Belasan preset berbasis fisika, semuanya bisa dikustomisasi."
            />
            <div className="mt-auto flex flex-col gap-2.5">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-4">
                  Speaking
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {speakingFx.map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-4">
                  Idle
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
              title="Ringan Banget"
              desc="Performance Mode + auto GC — tetap ngebut di PC kentang."
            />
            <div className="mt-auto grid grid-cols-3 gap-2">
              {[
                { num: "<100MB", label: "RAM" },
                { num: "~0%", label: "CPU idle" },
                { num: "60 FPS", label: "animasi" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-line-soft bg-panel p-3 text-center">
                  <div className="font-display text-lg font-extrabold text-accent">{s.num}</div>
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
              title="Multi-language"
              desc="30+ bahasa, ganti kapan aja tanpa loading."
            />
            <div className="mt-auto flex flex-wrap items-center gap-2">
              {["EN", "ID", "JA", "KO", "ES", "FR"].map((l, i) => (
                <Pill key={l} accent={i === 1}>
                  {l}
                </Pill>
              ))}
              <Pill>+25 lainnya</Pill>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className={`${cardCls} h-full`}>
            <CardHeader
              icon={<UserSwitch size={20} weight="fill" />}
              title="Profile System"
              desc="Bikin & kelola banyak preset, import/export .ptube, drag-and-drop."
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
              title="Mode & Utilitas"
              desc="Kontrol penuh pas live — semua setelan auto-save instan."
            />
            <ul className="mt-auto space-y-2.5 text-sm text-ink-2">
              {[
                { icon: Keyboard, label: "Global hotkeys anti-konflik" },
                { icon: Mouse, label: "Click-through (pass mouse)" },
                { icon: Tray, label: "Sembunyi ke system tray" },
                { icon: Moon, label: "Light & dark mode" },
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
