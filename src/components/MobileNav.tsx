"use client";

import { useEffect, useRef, useState } from "react";
import { DownloadSimple, List, X } from "@phosphor-icons/react";

type MobileNavProps = {
  links: { href: string; label: string }[];
  downloadLabel: string;
  freeLabel: string;
  labels: { menu: string; open: string; close: string };
};

// Menu navigasi untuk layar kecil. Panel dibuka dari tombol hamburger di dalam <nav>
// (nav harus `relative`, panel memakai posisi absolut di bawahnya).
export function MobileNav({ links, downloadLabel, freeLabel, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    // Menu otomatis menutup kalau layar diperlebar ke ukuran desktop.
    const mq = window.matchMedia("(min-width: 1024px)");
    function onChange() {
      if (mq.matches) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={wrapRef} className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        className="grid size-9 place-items-center rounded-xl border border-line bg-surface text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="region"
          aria-label={labels.menu}
          className="absolute inset-x-0 top-full z-50 mt-2 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-2xl border border-line bg-panel p-2 shadow-2xl"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-surface hover:text-ink-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#unduh"
            onClick={close}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent-deep px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px sm:hidden"
          >
            <DownloadSimple weight="bold" className="size-4" />
            {downloadLabel} {freeLabel}
          </a>
        </div>
      )}
    </div>
  );
}
