"use client";

import { CaretDown, Translate } from "@phosphor-icons/react";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { LANG_COOKIE, isLocale, type Preference } from "@/i18n/config";

function readPref(): Preference {
  const match = document.cookie.match(new RegExp(`(?:^|; )${LANG_COOKIE}=([^;]*)`));
  const value = match?.[1] ?? "";
  return isLocale(value) ? value : "auto";
}

// "/" dipilihkan bahasanya oleh proxy (cookie -> Accept-Language), jadi cukup set cookie lalu muat ulang.
function applyPref(pref: Preference) {
  document.cookie =
    pref === "auto"
      ? `${LANG_COOKIE}=; path=/; max-age=0`
      : `${LANG_COOKIE}=${pref}; path=/; max-age=31536000; samesite=lax`;
  // Sengaja full reload: root layout (<html lang>) ikut berganti.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.href = "/" + window.location.hash;
}

const subscribe = () => () => {};
const getServerPref = (): Preference => "auto";

export function LanguageSelector() {
  const currentPref = useSyncExternalStore(subscribe, readPref, getServerPref);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    // Escape menutup menu dan mengembalikan fokus ke tombol (pola disclosure yang aksesibel).
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (pref: Preference) => {
    setIsOpen(false);
    applyPref(pref);
  };

  const getDisplay = () => {
    if (currentPref === "en") return "EN";
    if (currentPref === "id") return "ID";
    return "Auto";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="lang-menu"
        aria-label="Pilih Bahasa / Select Language"
        className="flex h-9 items-center gap-1.5 rounded-xl border border-line bg-surface px-3 text-sm font-medium text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Translate size={16} weight="bold" />
        <span className="w-8 text-left">{getDisplay()}</span>
        <CaretDown size={12} weight="bold" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div id="lang-menu" className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-line bg-panel p-1 shadow-lg">
          {(["auto", "en", "id"] as Preference[]).map((pref) => (
            <button
              key={pref}
              type="button"
              aria-current={currentPref === pref ? "true" : undefined}
              onClick={() => handleSelect(pref)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                currentPref === pref
                  ? "bg-accent/15 text-accent font-bold"
                  : "text-ink-2 hover:bg-surface hover:text-ink-1"
              }`}
            >
              {pref === "auto" ? "Auto" : pref === "en" ? "English (EN)" : "Indonesian (ID)"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
