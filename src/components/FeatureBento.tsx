import Image from "next/image";
import {
  Eye,
  Gauge,
  GlobeHemisphereWest,
  Images,
  Keyboard,
  MagicWand,
  MicrophoneSlash,
  MonitorPlay,
  Moon,
  Smiley,
  Timer,
  Tray,
  UserSwitch,
  Waveform,
} from "@phosphor-icons/react/dist/ssr";
import { SoundWave } from "./SoundWave";
import { SectionHeader } from "./SectionHeader";
import avatarIdle from "@/assets/avatar-idle.webp";
import avatarSpeaking from "@/assets/avatar-speaking.webp";
import type { Dictionary } from "@/i18n/dictionaries";

// Dua tingkat kartu: kartu utama (4 state) lebih besar & lebih solid; sisanya datar dan tenang.
const cardCls = "flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface-2 p-5 sm:p-6";

function CardHeader({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2.5 font-display text-lg font-bold leading-tight">
        <span className="text-ink-3" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-3">{desc}</p>
    </div>
  );
}

const speakingFx = ["bounce & squish", "high jump", "shake", "wobble", "pulse zoom", "spin jump", "side hop", "glitch"];
const idleFx = ["float / breathe", "pulse", "sway", "gentle bounce", "subtle tilt"];

export function FeatureBento({ dict }: { dict: Dictionary["featureBento"] }) {
  const c = dict.cards;
  return (
    <section id="fitur" className="wrap section-y">
      <SectionHeader title={dict.title} desc={dict.desc} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-6">
        {/* Kartu utama: 4 state avatar */}
        <div className="md:col-span-2 lg:col-span-4">
          <div className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-panel p-5 sm:p-7">
            <CardHeader
              icon={<Smiley size={20} weight="fill" />}
              title={c.fourStates.title}
              desc={c.fourStates.desc}
            />
            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
              {[
                { src: avatarIdle, label: "Idle", name: c.fourStates.idle },
                { src: avatarSpeaking, label: "Speaking", name: c.fourStates.speaking },
              ].map((a) => (
                <figure
                  key={a.label}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line-soft bg-background"
                >
                  <Image
                    src={a.src}
                    alt={`${a.name} — PTube`}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-contain p-2"
                    unoptimized
                  />
                  <figcaption className="chip absolute bottom-2 left-2 !bg-panel">{a.label}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-ink-3">
              <span className="inline-flex items-center gap-1.5">
                <Eye size={15} weight="fill" aria-hidden="true" />
                {c.fourStates.blink}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MicrophoneSlash size={15} weight="fill" aria-hidden="true" />
                {c.fourStates.mute}
              </span>
              <span className="text-ink-4 sm:ml-auto">{c.fourStates.autoSwitch}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<Waveform size={20} weight="fill" />}
              title={c.audioEngine.title}
              desc={c.audioEngine.desc}
            />
            <div className="mt-auto flex flex-col gap-4">
              <SoundWave active className="h-9" />
              <div className="flex flex-wrap gap-1.5">
                {["Volume meter", "Noise gate", "Noise suppression", "Mic boost", "Attack & release"].map((p) => (
                  <span key={p} className="chip">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<MonitorPlay size={20} weight="fill" />}
              title={c.streamMode.title}
              desc={c.streamMode.desc}
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
                <span className="size-10 rounded-full bg-accent" />
              </div>
              <div className="grid h-24 place-items-center rounded-xl border border-line bg-[#00b140]">
                <span className="size-10 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="chip">{c.streamMode.greenScreen}</span>
              <span className="chip">{c.streamMode.transparent}</span>
              <span className="chip">{c.streamMode.hotkey}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<MagicWand size={20} weight="fill" />}
              title={c.animationSystem.title}
              desc={c.animationSystem.desc}
            />
            <div className="mt-auto flex flex-col gap-3">
              {[
                { label: c.animationSystem.speaking, list: speakingFx },
                { label: c.animationSystem.idle, list: idleFx },
              ].map((g) => (
                <div key={g.label} className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-ink-4">{g.label}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {g.list.map((p) => (
                      <span key={p} className="chip">{p}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<Keyboard size={20} weight="fill" />}
              title={c.modesUtils.title}
              desc={c.modesUtils.desc}
            />
            <ul className="mt-auto space-y-3 text-sm text-ink-2">
              {[
                { icon: Keyboard, label: c.modesUtils.hotkeys },
                { icon: Eye, label: c.modesUtils.autoStream },
                { icon: Tray, label: c.modesUtils.systemTray },
                { icon: Moon, label: c.modesUtils.lightDark },
              ].map((r) => (
                <li key={r.label} className="flex items-start gap-2.5">
                  <r.icon size={16} weight="fill" className="mt-0.5 shrink-0 text-ink-3" aria-hidden="true" />
                  {r.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className={cardCls}>
            <CardHeader
              icon={<Images size={20} weight="fill" />}
              title={c.animatedImages.title}
              desc={c.animatedImages.desc}
            />
            <div className="mt-auto grid grid-cols-1 gap-2 min-[480px]:grid-cols-3">
              {[c.animatedImages.apng, c.animatedImages.gif, c.animatedImages.png].map((l, i) => (
                <div
                  key={l}
                  className={`flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-center ${
                    i < 2 ? "border-accent/30 bg-accent/[0.06]" : "border-line-soft bg-panel"
                  }`}
                >
                  <span className="font-display text-sm font-bold text-ink-1">{l}</span>
                  <span className="text-[11px] font-medium leading-tight text-ink-3">
                    {i < 2 ? c.animatedImages.note : "–"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className={cardCls}>
            <CardHeader
              icon={<Timer size={20} weight="fill" />}
              title={c.speakHold.title}
              desc={c.speakHold.desc}
            />
            <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-accent">{c.speakHold.speak}</span>
                  <span className="text-ink-4">{c.speakHold.hold}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface" data-motion>
                  <div
                    className="h-full w-full origin-left rounded-full bg-accent"
                    style={{ animation: "speakHold 1.6s ease-in-out infinite" }}
                  />
                </div>
              </div>
              <span className="chip">{c.speakHold.note}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<Gauge size={20} weight="fill" />}
              title={c.lightweight.title}
              desc={c.lightweight.desc}
            />
            <div className="mt-auto grid grid-cols-3 gap-2">
              {[
                { num: "128 MB", label: c.lightweight.low },
                { num: "192 MB", label: c.lightweight.balanced },
                { num: "384 MB", label: c.lightweight.high },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-line-soft bg-panel px-1.5 py-3 text-center">
                  <div className="font-display text-base font-bold text-ink-1">{s.num}</div>
                  <div className="mt-0.5 text-[11px] text-ink-3">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-ink-4">{c.lightweight.note}</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<GlobeHemisphereWest size={20} weight="fill" />}
              title={c.multiLanguage.title}
              desc={c.multiLanguage.desc}
            />
            <div className="mt-auto flex flex-wrap items-center gap-1.5">
              {["EN", "ID", "JA", "KO", "ES", "FR"].map((l) => (
                <span key={l} className="chip">{l}</span>
              ))}
              <span className="chip">{c.multiLanguage.others}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-2">
          <div className={cardCls}>
            <CardHeader
              icon={<UserSwitch size={20} weight="fill" />}
              title={c.profileSystem.title}
              desc={c.profileSystem.desc}
            />
            <div className="mt-auto flex flex-wrap items-center gap-2">
              {["Normal", "Happy", "Gaming"].map((p, i) => (
                <span
                  key={p}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold ${
                    i === 0
                      ? "border-accent/40 bg-accent/[0.08] text-ink-1"
                      : "border-line-soft bg-panel text-ink-2"
                  }`}
                >
                  <span
                    className={`grid size-5 place-items-center rounded-full font-display text-[11px] font-bold ${
                      i === 0 ? "bg-accent-deep text-white" : "bg-surface text-ink-2"
                    }`}
                  >
                    {p[0]}
                  </span>
                  {p}
                </span>
              ))}
              <span className="chip font-mono">.ptube</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
