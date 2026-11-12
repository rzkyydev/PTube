"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

// Harus sama dengan themeColor di app/[lang]/layout.tsx.
const COLORS: Record<"light" | "dark", string> = {
  light: "#faf7f5",
  dark: "#201b1d",
};

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): "light" | "dark" {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): "light" | "dark" {
  return "dark";
}

export function ThemeToggle({ labels }: { labels: { dark: string; light: string } }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("ptube-theme", next);
    } catch {
      // Penyimpanan bisa diblokir (mode privat); tema tetap berganti untuk sesi ini.
    }
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute("content", COLORS[next]));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? labels.dark : labels.light}
      className="ptnav-ctl"
    >
      {theme === "light" ? <Moon size={18} weight="bold" /> : <Sun size={18} weight="bold" />}
    </button>
  );
}
