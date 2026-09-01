"use client";

import { useRouter } from "next/navigation";
import { CaretDown, Translate } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import type { Preference } from "@/i18n/server";

const setCookie = (pref: Preference) => {
  if (typeof document !== 'undefined') {
    document.cookie = `ptube-lang-pref=${pref}; path=/; max-age=31536000`; // 1 year
  }
};

export function LanguageSelector({ currentPref }: { currentPref: Preference }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (pref: Preference) => {
    setCookie(pref);
    setIsOpen(false);
    router.refresh(); // Refresh Server Components
  };

  const getDisplay = () => {
    if (currentPref === "en") return "EN";
    if (currentPref === "id") return "ID";
    return "Auto";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Pilih Bahasa / Select Language"
        className="flex h-9 items-center gap-1.5 rounded-xl border border-line bg-surface px-3 text-sm font-medium text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Translate size={16} weight="bold" />
        <span className="w-8 text-left">{getDisplay()}</span>
        <CaretDown size={12} weight="bold" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-line bg-panel p-1 shadow-lg">
          {(["auto", "en", "id"] as Preference[]).map((pref) => (
            <button
              key={pref}
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
