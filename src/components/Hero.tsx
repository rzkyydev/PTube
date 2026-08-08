"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  DownloadSimple,
  Microphone,
  MicrophoneSlash,
  Sparkle,
} from "@phosphor-icons/react";
import { SoundWave } from "./SoundWave";

const AVATAR_IDLE =
  "https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/Picsart_26-07-14_14-39-19-407.png";
const AVATAR_SPEAKING =
  "https://raw.githubusercontent.com/rzkyydev/rzkyydev/refs/heads/main/db/Picsart_26-07-14_14-39-39-821.png";

type Mode = "idle" | "speaking" | "mute";

const status = {
  idle: { label: "Idle", dot: "bg-ink-4" },
  speaking: { label: "Berbicara", dot: "bg-ok" },
  mute: { label: "Mute", dot: "bg-accent" },
};

function MicTest() {
  const [muted, setMuted] = useState(false);
  const [holding, setHolding] = useState(false);
  const reduceMotion = useReducedMotion();
  const speaking = holding && !muted;
  const mode: Mode = muted ? "mute" : speaking ? "speaking" : "idle";
  const bob = reduceMotion ? {} : { y: [0, -4, 0] };

  return (
    <div className="glass-deep relative rounded-3xl p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-accent/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-xs font-medium text-ink-3">PTube · Live Preview</span>
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
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -right-1 top-4 z-10 grid size-10 place-items-center rounded-full border border-accent/40 bg-badge text-accent shadow-lg"
          >
            <MicrophoneSlash size={20} weight="bold" />
          </motion.span>
        )}

        <motion.div
          className="relative h-60 w-60 sm:h-68 sm:w-68"
          animate={speaking ? bob : { y: 0 }}
          transition={speaking ? { duration: 0.35, ease: "easeInOut", repeat: Infinity } : { duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: speaking ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          >
            <Image src={AVATAR_IDLE} alt="Avatar idle" fill sizes="240px" className="object-contain" priority />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: speaking ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <Image src={AVATAR_SPEAKING} alt="Avatar berbicara" fill sizes="240px" className="object-contain" priority />
          </motion.div>
        </motion.div>
      </div>

      <SoundWave
        active={speaking}
        className={`h-10 transition-opacity duration-300 ${mode === "mute" ? "opacity-30" : ""}`}
      />

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onPointerDown={() => setHolding(true)}
          onPointerUp={() => setHolding(false)}
          onPointerLeave={() => setHolding(false)}
          onPointerCancel={() => setHolding(false)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") setHolding(true);
          }}
          onKeyUp={() => setHolding(false)}
          onContextMenu={(e) => e.preventDefault()}
          className={`group flex select-none items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            holding
              ? "scale-[0.98] bg-accent-deep-strong text-white"
              : "bg-accent-deep text-white active:scale-[0.98]"
          }`}
          style={{ touchAction: "none" }}
        >
          <Microphone size={18} weight="bold" />
          {holding ? "Lepasin…" : "Tahan buat ngomong"}
        </button>

        <button
          type="button"
          aria-pressed={muted}
          onClick={() => setMuted((m) => !m)}
          className={`grid size-11 place-items-center rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97] ${
            muted
              ? "border-accent/50 bg-accent/15 text-accent"
              : "border-line bg-surface text-ink-2 hover:text-ink-1"
          }`}
        >
          <MicrophoneSlash size={20} weight="bold" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl border border-line-soft bg-surface-2 px-3 py-2">
        <span className="text-[11px] font-medium text-ink-3">Threshold mic</span>
        <div className="relative flex h-5 items-center gap-[2px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={`w-[3px] rounded-full ${i < 12 ? "bg-accent/70" : "bg-line-strong"}`}
              style={{ height: `${5 + ((i * 11) % 14)}px` }}
            />
          ))}
          <span className="absolute inset-y-0 left-[60%] w-px bg-ink-4" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-12 px-4 pb-20 pt-32 lg:grid-cols-2 lg:gap-16 lg:pt-28">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
          <Sparkle size={14} weight="fill" />
          PTube v4.0.0 · PNGTuber Desktop untuk Windows
        </span>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Avatar PNG-mu ikut{" "}
          <span className="text-accent">ngomong</span>. PC-mu tetap adem.
        </h1>

        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-3 sm:text-lg">
          PNGTuber desktop ringan buat Windows — avatar PNG-mu gerak real-time ngikutin suara mic,
          RAM di bawah 100MB, mulus 60 FPS.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#unduh"
            className="group flex items-center gap-2 rounded-xl bg-accent-deep px-5 py-3 text-sm font-bold text-white transition-all hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px"
          >
            <DownloadSimple weight="bold" className="size-4 transition-transform group-hover:-translate-y-0.5" />
            Unduh Gratis
          </a>
          <a
            href="#fitur"
            className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Lihat Fitur
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <MicTest />
        <p className="mt-3 text-center text-xs text-ink-4">
          Tahan tombol mic buat nguji — avatar langsung ngikutin suaramu.
        </p>
      </motion.div>
    </section>
  );
}
