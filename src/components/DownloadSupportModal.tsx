"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GithubLogo, HandHeart, X } from "@phosphor-icons/react";
import type { Dictionary } from "@/i18n/dictionaries";
import ptubeIcon from "@/assets/icon-64.webp";

const STAR_URL = "https://github.com/rzkyydev/PTube";
const SUPPORT_URL = "https://sociabuzz.com/rzkyydev/tribe";
const COUNT_KEY = "ptube-support-modal-count";

export function DownloadSupportModal({ dict }: { dict: Dictionary["downloadCTA"]["modal"] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const countRef = useRef(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    try {
      const saved = Number(sessionStorage.getItem(COUNT_KEY));
      if (Number.isFinite(saved) && saved > 0) countRef.current = saved;
    } catch {
      // sessionStorage bisa diblokir; hitungan tetap jalan di memori.
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target?.closest('a[data-download="app"]') || dialog.open) return;
      countRef.current += 1;
      try {
        sessionStorage.setItem(COUNT_KEY, String(countRef.current));
      } catch {
        // Tetap pakai hitungan di memori.
      }
      if (countRef.current % 2 === 0) return;
      dialog.showModal();
      document.body.style.overflow = "hidden";
    };

    const onClose = () => {
      document.body.style.overflow = "";
    };

    document.addEventListener("click", onClick);
    dialog.addEventListener("close", onClose);
    return () => {
      document.removeEventListener("click", onClick);
      dialog.removeEventListener("close", onClose);
      document.body.style.overflow = "";
    };
  }, []);

  function close() {
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="download-support-title"
      aria-describedby="download-support-desc"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="support-modal fixed inset-0 m-auto w-[min(23rem,calc(100vw-2rem))] max-h-[calc(100svh-2rem)] overflow-y-auto rounded-3xl border border-line bg-panel p-0 text-ink-1 shadow-[var(--shadow-pop)]"
    >
      <div className="relative px-6 pb-6 pt-8 sm:px-7">
        <button
          type="button"
          onClick={close}
          aria-label={dict.closeLabel}
          className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full text-ink-4 transition-colors hover:bg-surface hover:text-ink-1"
        >
          <X size={16} weight="bold" aria-hidden="true" />
        </button>

        <div className="flex flex-col items-center text-center">
          <Image
            src={ptubeIcon}
            alt=""
            width={56}
            height={56}
            unoptimized
            className="size-14 rounded-2xl"
          />
          <h2 id="download-support-title" className="mt-3.5 font-display text-xl font-bold leading-tight sm:text-2xl">
            {dict.title}
          </h2>
          <p id="download-support-desc" className="mt-1.5 max-w-[30ch] text-sm leading-relaxed text-ink-3">
            {dict.desc}
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            <HandHeart size={18} weight="fill" aria-hidden="true" />
            {dict.supportMe}
          </a>
          <a
            href={STAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-4 transition-colors hover:text-ink-1"
          >
            <GithubLogo size={15} weight="fill" aria-hidden="true" />
            {dict.starGithub}
          </a>
        </div>
      </div>
    </dialog>
  );
}
