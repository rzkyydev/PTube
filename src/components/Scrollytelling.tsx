import Image from "next/image";
import {
  DownloadSimple,
  Microphone,
  MicrophoneSlash,
  MonitorPlay,
  Smiley,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { SoundWave } from "./SoundWave";
import { ScrollyObserver } from "./ScrollyObserver";
import avatarIdle from "@/assets/avatar-idle.webp";
import avatarSpeaking from "@/assets/avatar-speaking.webp";
import type { Dictionary } from "@/i18n/dictionaries";

const ROOT_ID = "cerita";
const stepIcons = [Smiley, Microphone, MicrophoneSlash, MonitorPlay];
const pillDots = ["bg-ink-4", "bg-ok", "bg-accent", "bg-ok"];

// Server component: seluruh teks ada di HTML (terbaca tanpa JS, bagus untuk SEO & screen reader).
// "Stage" di kiri/atas murni dekorasi (aria-hidden); maknanya sudah dibawa oleh teks tiap langkah.
export function Scrollytelling({
  dict,
  common,
}: {
  dict: Dictionary["scrolly"];
  common: Dictionary["common"];
}) {
  const last = dict.steps.length - 1;

  return (
    <section
      id={ROOT_ID}
      data-step="0"
      aria-labelledby="cerita-title"
      className="scrolly relative mx-auto max-w-6xl px-4 py-24"
    >
      <Reveal>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {dict.eyebrow}
        </span>
        <h2
          id="cerita-title"
          className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {dict.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">{dict.desc}</p>
      </Reveal>

      <div className="scrolly-grid mt-12">
        <div className="scrolly-stage-wrap">
          <div className="scrolly-stage" aria-hidden="true">
            <div className="sl sl-bg" />
            <div className="sl sl-green" />

            <div className="sl-avatar absolute inset-x-6 bottom-14 top-12 md:bottom-16 md:top-14">
              <div className="sl sl-idle">
                <Image
                  src={avatarIdle}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 80vw, 320px"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="sl sl-speak">
                <Image
                  src={avatarSpeaking}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 80vw, 320px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <span className="sl-badge absolute right-6 top-14 grid size-10 place-items-center rounded-full border border-accent/40 bg-badge text-accent shadow-lg">
              <MicrophoneSlash size={20} weight="bold" />
            </span>

            <div className="absolute left-3 top-3 grid">
              {dict.steps.map((s, i) => (
                <span
                  key={s.tag}
                  className="sl-pill inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1 text-[11px] font-semibold text-ink-2"
                >
                  <span className={`size-1.5 rounded-full ${pillDots[i]}`} />
                  {s.tag}
                </span>
              ))}
            </div>

            <div className="absolute right-4 top-4 flex items-center gap-1.5">
              {dict.steps.map((s) => (
                <span key={s.tag} className="scrolly-dot" />
              ))}
            </div>

            <SoundWave
              active={false}
              className="scrolly-wave absolute inset-x-0 bottom-3 h-8 md:h-10"
            />
          </div>
        </div>

        <ol role="list" className="scrolly-steps">
          {dict.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <li
                key={s.tag}
                data-scrolly-step
                data-active={i === 0 ? "true" : "false"}
                className="scrolly-step"
              >
                <div className="scrolly-card w-full">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-8 place-items-center rounded-lg bg-surface text-ink-2">
                      {Icon && <Icon size={17} weight="fill" />}
                    </span>
                    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-ink-2">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-3 sm:text-base">{s.desc}</p>
                  {i === last && (
                    <a
                      href="#unduh"
                      className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px"
                    >
                      <DownloadSimple
                        weight="bold"
                        className="size-4 transition-transform group-hover:-translate-y-0.5"
                      />
                      {common.downloadFree}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <ScrollyObserver rootId={ROOT_ID} />
    </section>
  );
}
