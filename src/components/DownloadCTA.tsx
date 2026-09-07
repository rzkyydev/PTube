"use client";

import { motion } from "motion/react";
import { DownloadSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Mascot } from "./Mascot";
import type { Dictionary } from "@/i18n/dictionaries";

const PTUBE_RELEASES =
  "https://github.com/rzkyydev/PTube/releases/latest/download/PTube-Setup.exe";

const ITCH_IO = "https://rzkyydev.itch.io/ptube";

const PTUBE_SETTINGS =
  "https://github.com/rzkyydev/PTube/releases/latest/download/ptube-setting-recommend.ptube";

export function DownloadCTA({
  dict,
}: {
  dict: Dictionary["downloadCTA"];
}) {
  return (
    <section id="unduh" className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,93,143,0.12),transparent_60%)]" />

      <motion.div
        className="absolute left-[5%] top-[20%] -translate-y-1/2 lg:left-[10%]"
        animate={{ y: [-10, 0, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot mode="idle" className="h-36 w-36 animate-sway drop-shadow-[0_12px_24px_rgba(255,93,143,0.15)]" />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[30%] -translate-y-1/2 lg:right-[10%]"
        animate={{ y: [8, 0, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <Mascot mode="speaking" className="h-30 w-30 drop-shadow-[0_12px_24px_rgba(255,93,143,0.12)]" />
      </motion.div>

      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-ink-3">
              PTube for Windows
            </span>
            <span className="size-1.5 rounded-full bg-ok" />
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Download PTube
          </h2>

          <p className="mx-auto mt-5 max-w-[48ch] text-center text-base leading-relaxed text-ink-3 sm:text-lg">
            {dict.desc}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <a
              href={PTUBE_RELEASES}
              download
              className="group inline-flex items-center gap-3 rounded-xl bg-accent-deep px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(255,93,143,0.3)] transition-all hover:-translate-y-0.5 hover:bg-accent-deep-strong hover:shadow-[0_8px_30px_rgba(255,93,143,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0"
            >
              <DownloadSimple
                size={20}
                weight="bold"
                className="transition-transform group-hover:-translate-y-0.5"
              />
              {dict.downloadBtn}
            </a>

            <a
              href={ITCH_IO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-8 py-3.5 text-base font-bold text-ink-1 transition-colors hover:border-line-strong hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ArrowRight
                size={18}
                weight="bold"
                className="opacity-70"
              />
              {dict.itchBtn}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-ink-4">
              optional
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent/15 to-transparent" />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-ink-3">
              {dict.recommendedSettingsDesc}
            </p>
            <a
              href={PTUBE_SETTINGS}
              download
              className="group inline-flex items-center gap-2 rounded-lg border border-line-soft bg-surface-2 px-6 py-2.5 text-sm font-bold text-ink-2 transition-colors hover:border-line-strong hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <DownloadSimple
                size={16}
                weight="bold"
                className="transition-transform group-hover:-translate-y-0.5"
              />
              {dict.recommendedSettingsBtn}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
