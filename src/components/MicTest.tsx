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

export function MicTest({ dict }: { dict: Dictionary["hero"] }) {
  const [muted, setMuted] = useState(false);
  const [holding, setHolding] = useState(false);
  const [proximityActive, setProximityActive] = useState(false);
  const reduceMotion = useReducedMotion();
  const speaking = holding && !muted;
  const mode: Mode = muted ? "mute" : speaking ? "speaking" : "idle";
  const bob = reduceMotion ? {} : { y: [0, -4, 0] };

  const status = {
    idle: { label: dict.statusIdle, dot: "bg-ink-4" },
    speaking: { label: dict.statusSpeaking, dot: "bg-ok" },
    mute: { label: dict.statusMute, dot: "bg-accent" },
  };

  return (
    <div
      className="glass-deep relative rounded-3xl p-4 sm:p-6"
      data-cursor-mic
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-accent/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-xs font-medium text-ink-3">{dict.livePreview}</span>
      </div>

      <div className="relative mt-5 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold text-ink-2">
          <span className={`size-1.5 rounded-full ${status[mode].dot}`} aria-hidden="true" />
          {status[mode].label}
        </span>
      </div>

      <div className="relative mx-auto grid h-72 w-full max-w-xs place-items-center sm:h-80">
        <span className="absolute -left-1 top-8 animate-float rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
          bounce
        </span>
        <span className="absolute right-0 top-20 animate-wobble rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold text-ink-2">
          wobble
        </span>
        <span className="absolute bottom-10 left-2 animate-sway rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold text-ink-2">
          float
        </span>
        <span className="absolute -right-2 bottom-2 animate-float rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold text-ink-2 [animation-delay:-2s]">
          pulse
        </span>

        {mode === "mute" && (
          <m.span
            initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="absolute -right-1 top-4 z-10 grid size-10 place-items-center rounded-full border border-accent/40 bg-badge text-accent shadow-lg"
          >
            <MicrophoneSlash size={20} weight="bold" />
          </m.span>
        )}

        <m.div
          className="relative h-60 w-60 sm:h-68 sm:w-68"
          animate={speaking ? bob : { y: 0 }}
          transition={speaking ? { duration: 0.35, ease: "easeInOut", repeat: Infinity } : { duration: 0.15 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <m.div
            className="absolute inset-0"
            animate={{ opacity: speaking ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          >
            <Image src={avatarIdle} alt="Avatar idle" fill sizes="272px" className="object-contain" priority unoptimized />
          </m.div>
          <m.div
            className="absolute inset-0"
            animate={{ opacity: speaking ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <Image src={avatarSpeaking} alt="Avatar berbicara" fill sizes="272px" className="object-contain" fetchPriority="low" loading="eager" unoptimized />
          </m.div>
        </m.div>
      </div>

      <SoundWave
        active={speaking}
        proximityActive={proximityActive}
        className={`h-10 transition-opacity duration-300 ${mode === "mute" ? "opacity-30" : ""}`}
      />

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          data-cursor-mic
          onPointerDown={() => setHolding(true)}
          onPointerUp={() => setHolding(false)}
          onPointerLeave={() => setHolding(false)}
          onPointerCancel={() => setHolding(false)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") setHolding(true);
          }}
          onKeyUp={() => setHolding(false)}
          onContextMenu={(e) => e.preventDefault()}
          className={`group cursor-mic-btn flex select-none items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            holding
              ? "scale-[0.98] bg-accent-deep-strong text-white"
              : "bg-accent-deep text-white active:scale-[0.98]"
          } ${proximityActive ? "scale-[1.03]" : ""}`}
          style={{ touchAction: "none" }}
        >
          <Microphone size={18} weight="bold" />
          {holding ? dict.buttonRelease : dict.buttonHold}
        </button>

        <button
          type="button"
          aria-pressed={muted}
          aria-label={dict.muteToggle}
          data-cursor-toggle
          onClick={() => setMuted((m) => !m)}
          className={`cursor-toggle-btn grid size-11 place-items-center rounded-xl border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97] ${
            muted
              ? "border-accent/50 bg-accent/15 text-accent"
              : "border-line bg-surface text-ink-2 hover:text-ink-1"
          }`}
        >
          <MicrophoneSlash size={20} weight="bold" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl border border-line-soft bg-surface-2 px-3 py-2">
        <span className="text-[11px] font-medium text-ink-3">{dict.micThreshold}</span>
        <div className="relative flex h-5 items-center gap-[2px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={`w-[3px] rounded-full transition-colors duration-200 ${i < 12 ? "bg-accent/70" : "bg-line-strong"}`}
              style={{ height: `${5 + ((i * 11) % 14)}px` }}
            />
          ))}
          <span className="absolute inset-y-0 left-[60%] w-px bg-ink-4" />
        </div>
      </div>
    </div>
  );
}
