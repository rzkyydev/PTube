"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

const COLORS: Record<"light" | "dark", string> = {
  light: "#faf7f5",
  dark: "#09090c",
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

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("ptube-theme", next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", COLORS[next]);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
      className="grid size-9 place-items-center rounded-xl border border-line bg-surface text-ink-2 transition-colors hover:border-line-strong hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {theme === "light" ? <Moon size={18} weight="bold" /> : <Sun size={18} weight="bold" />}
    </button>
  );
}
