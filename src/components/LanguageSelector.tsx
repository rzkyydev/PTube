"use client";

import { CaretDown, Translate } from "@phosphor-icons/react";
import { useState, useRef, useEffect, useId, useSyncExternalStore } from "react";
import { LANG_COOKIE, isLocale, type Locale, type Preference } from "@/i18n/config";

function readPref(): Preference {
  const match = document.cookie.match(new RegExp(`(?:^|; )${LANG_COOKIE}=([^;]*)`));
  const value = match?.[1] ?? "";
  return isLocale(value) ? value : "auto";
}

// Mode "Auto": ikut bahasa browser (diawali "id" -> id, selain itu en). Sama dengan logika di public/index.html.
function detectLocale(): Locale {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  return String(langs[0]).toLowerCase().startsWith("id") ? "id" : "en";
}

// Simpan pilihan di cookie, lalu langsung pindah ke /en atau /id (tidak lewat "/", jadi tanpa halaman loading).
function applyPref(pref: Preference) {
  document.cookie =
    pref === "auto"
      ? `${LANG_COOKIE}=; path=/; max-age=0`
      : `${LANG_COOKIE}=${pref}; path=/; max-age=31536000; samesite=lax`;
  const target: Locale = pref === "auto" ? detectLocale() : pref;
  // Sengaja full reload: root layout (<html lang>) ikut berganti.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.href = `/${target}${window.location.hash}`;
}

const subscribe = () => () => {};
const getServerPref = (): Preference => "auto";

const OPTIONS: { pref: Preference; short: string; long: string }[] = [
  { pref: "auto", short: "Auto", long: "Auto" },
  { pref: "en", short: "EN", long: "English (EN)" },
  { pref: "id", short: "ID", long: "Bahasa Indonesia" },
];

const ARIA_LABEL = "Pilih Bahasa / Select Language";

// variant "menu": tombol + dropdown (bar utama). variant "inline": tiga tombol segmented (panel sentuh).
export function LanguageSelector({ variant = "menu" }: { variant?: "menu" | "inline" }) {
  const currentPref = useSyncExternalStore(subscribe, readPref, getServerPref);
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setIsOpen(false);
    }
    // Escape menutup menu dan mengembalikan fokus ke tombol (pola disclosure yang aksesibel).
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    // Menu memakai posisi fixed (supaya tidak terpotong navbar), jadi tutup saat halaman bergerak.
    const close = () => setIsOpen(false);
    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", close, { passive: true, once: true });
    window.addEventListener("resize", close, { once: true });
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [isOpen]);

  const handleSelect = (pref: Preference) => {
    setIsOpen(false);
    applyPref(pref);
  };

  const toggleMenu = () => {
    if (!isOpen && triggerRef.current) {
      const r = triggerRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 8, right: Math.max(8, window.innerWidth - r.right) });
    }
    setIsOpen((v) => !v);
  };

  const current = OPTIONS.find((o) => o.pref === currentPref) ?? OPTIONS[0];

  if (variant === "inline") {
    return (
      <div
        role="group"
        aria-label={ARIA_LABEL}
        className="flex min-w-0 flex-1 items-center gap-1 rounded-xl border border-line bg-surface-2 p-1"
      >
        {OPTIONS.map((o) => (
          <button
            key={o.pref}
            type="button"
            aria-pressed={currentPref === o.pref}
            onClick={() => handleSelect(o.pref)}
            className={`min-h-9 flex-1 rounded-lg px-2 text-sm font-semibold transition-colors ${
              currentPref === o.pref
                ? "bg-accent-deep text-white"
                : "text-ink-2 hover:bg-surface hover:text-ink-1"
            }`}
          >
            {o.short}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={ARIA_LABEL}
        className="ptnav-ctl"
      >
        <Translate size={16} weight="bold" />
        <span className="lang-code min-w-7 text-left">{current.short}</span>
        <CaretDown
          size={12}
          weight="bold"
          className={`hidden transition-transform sm:block ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && pos && (
        <div
          id={menuId}
          style={{ top: pos.top, right: pos.right }}
          className="fixed z-[60] w-48 overflow-hidden rounded-xl border border-line bg-panel p-1 shadow-[var(--shadow-pop)]"
        >
          {OPTIONS.map((o) => (
            <button
              key={o.pref}
              type="button"
              aria-current={currentPref === o.pref ? "true" : undefined}
              onClick={() => handleSelect(o.pref)}
              className={`flex min-h-10 w-full items-center justify-between rounded-lg px-3 text-sm transition-colors ${
                currentPref === o.pref
                  ? "bg-accent/15 font-bold text-accent"
                  : "text-ink-2 hover:bg-surface hover:text-ink-1"
              }`}
            >
              {o.long}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
