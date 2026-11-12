"use client";

import { useState } from "react";
import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { Microphone, MicrophoneSlash } from "@phosphor-icons/react";
import { SoundWave } from "./SoundWave";
import avatarIdle from "@/assets/avatar-idle.webp";
import avatarSpeaking from "@/assets/avatar-speaking.webp";
import type { Dictionary } from "@/i18n/dictionaries";

type Mode = "idle" | "speaking" | "mute";

// Demo interaktif: tahan tombol = bicara. Ini satu-satunya "momen" utama di halaman, jadi dibuat nyata
// (avatar, gelombang, dan meter ambang semuanya bereaksi), bukan dekorasi.
export function MicTest({ dict }: { dict: Dictionary["hero"] }) {
  const [muted, setMuted] = useState(false);
  const [holding, setHolding] = useState(false);
  const reduceMotion = useReducedMotion();
  const speaking = holding && !muted;
  const mode: Mode = muted ? "mute" : speaking ? "speaking" : "idle";
  const bob = reduceMotion ? {} : { y: [0, -6, 0] };

  const status = {
    idle: { label: dict.statusIdle, dot: "bg-ink-4" },
    speaking: { label: dict.statusSpeaking, dot: "bg-ok" },
    mute: { label: dict.statusMute, dot: "bg-accent" },
  };

  const start = () => {
    if (!muted) setHolding(true);
  };
  const stop = () => setHolding(false);

  return (
    <div className="rounded-3xl border border-line bg-panel p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="min-w-0 truncate text-sm font-semibold text-ink-2">{dict.livePreview}</span>
        <span
          role="status"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-semibold text-ink-1"
        >
          <span aria-hidden="true" className={`size-2 rounded-full ${status[mode].dot}`} />
          {status[mode].label}
        </span>
      </div>

      <div className="relative mt-4 grid h-64 place-items-center overflow-hidden rounded-2xl border border-line-soft bg-[color-mix(in_srgb,var(--background)_55%,var(--panel))] sm:h-72">
        {mode === "mute" && (
          <m.span
            initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-accent/40 bg-badge text-accent"
          >
            <MicrophoneSlash size={20} weight="bold" />
          </m.span>
        )}

        <m.div
          className="relative h-52 w-52 sm:h-60 sm:w-60"
          animate={speaking ? bob : { y: 0 }}
          transition={speaking ? { duration: 0.35, ease: "easeInOut", repeat: Infinity } : { duration: 0.15 }}
        >
          <m.div
            className="absolute inset-0"
            animate={{ opacity: speaking ? 0 : mode === "mute" ? 0.55 : 1 }}
            transition={{ duration: 0.15 }}
          >
            <Image src={avatarIdle} alt={dict.statusIdle} fill sizes="240px" className="object-contain" priority unoptimized />
          </m.div>
          <m.div
            className="absolute inset-0"
            animate={{ opacity: speaking ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src={avatarSpeaking}
              alt={dict.statusSpeaking}
              fill
              sizes="240px"
              className="object-contain"
              fetchPriority="low"
              loading="eager"
              unoptimized
            />
          </m.div>
        </m.div>

        <SoundWave
          active={speaking}
          bars={26}
          className={`absolute inset-x-6 bottom-3 h-8 transition-opacity duration-300 ${mode === "mute" ? "opacity-30" : ""}`}
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          aria-disabled={muted}
          onPointerDown={start}
          onPointerUp={stop}
          onPointerLeave={stop}
          onPointerCancel={stop}
          onBlur={stop}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              start();
            }
          }}
          onKeyUp={stop}
          onContextMenu={(e) => e.preventDefault()}
          style={{ touchAction: "none" }}
          className={`btn btn-primary min-w-0 flex-1 select-none ${holding ? "!bg-accent-deep-strong" : ""}`}
        >
          <Microphone size={18} weight="bold" />
          <span className="truncate">{holding ? dict.buttonRelease : dict.buttonHold}</span>
        </button>

        <button
          type="button"
          aria-pressed={muted}
          aria-label={dict.muteToggle}
          onClick={() => {
            setMuted((v) => !v);
            setHolding(false);
          }}
          className={`btn size-11 shrink-0 !p-0 ${
            muted
              ? "!border-accent/50 !bg-accent/15 text-accent"
              : "btn-secondary"
          }`}
        >
          <MicrophoneSlash size={20} weight="bold" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-line-soft bg-surface-2 px-3.5 py-2.5">
        <span className="min-w-0 text-xs font-medium text-ink-3">{dict.micThreshold}</span>
        <div
          aria-hidden="true"
          data-speaking={speaking}
          className="mic-meter relative flex h-5 shrink-0 items-center gap-[2px]"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full"
              style={{ height: `${5 + ((i * 11) % 14)}px` }}
            />
          ))}
          <span className="absolute inset-y-0 left-[60%] !w-px !rounded-none !bg-ink-4" />
        </div>
      </div>
    </div>
  );
}
