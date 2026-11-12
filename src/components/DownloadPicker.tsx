"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  AppleLogo,
  Check,
  CheckCircle,
  Copy,
  DownloadSimple,
  LinuxLogo,
  WindowsLogo,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import type { Dictionary } from "@/i18n/dictionaries";
import { COMMANDS, FILES, downloadUrl } from "@/lib/downloads";

type OS = "windows" | "mac" | "linux" | "other";

// Deteksi di browser setelah hydration. Server dan render pertama selalu "other", jadi tidak ada mismatch.
function detectOS(): OS {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const ua = nav.userAgent.toLowerCase();
  if (/android|iphone|ipad|ipod/.test(ua)) return "other";
  const platform = (nav.userAgentData?.platform || nav.platform || "").toLowerCase();
  if (platform.includes("win") || ua.includes("windows")) return "windows";
  if (platform.includes("mac") || ua.includes("mac os")) return "mac";
  if (platform.includes("linux") || ua.includes("linux") || ua.includes("x11")) return "linux";
  return "other";
}

const subscribe = () => () => {};
const getServerOS = (): OS => "other";

function FileButton({ file, label, primary = false }: { file: string; label: string; primary?: boolean }) {
  return (
    <a
      href={downloadUrl(file)}
      className={`btn group !justify-between !px-4 !py-3 text-left ${
        primary ? "btn-primary" : "btn-secondary"
      }`}
    >
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold leading-snug">{label}</span>
        <span className={`mt-0.5 block truncate font-mono text-[11px] ${primary ? "text-white/80" : "text-ink-4"}`}>
          {file}
        </span>
      </span>
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-lg transition-transform group-hover:translate-y-0.5 ${
          primary ? "bg-white/15" : "bg-surface text-accent"
        }`}
      >
        <DownloadSimple size={18} weight="bold" aria-hidden="true" />
      </span>
    </a>
  );
}

// Perintah terminal dengan tombol salin, supaya tidak perlu menyorot teks manual (sulit di layar sentuh).
function Command({
  children,
  copyLabel,
  copiedLabel,
}: {
  children: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard bisa diblokir (mis. konteks tidak aman). Teks tetap bisa disalin manual lewat select-all.
    }
  }

  return (
    <div className="flex items-stretch overflow-hidden rounded-lg border border-line-soft bg-panel">
      <code tabIndex={0} className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap px-3 py-3 font-mono text-xs text-ink-2 select-all">
        {children}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? copiedLabel : copyLabel}
        className="inline-flex min-h-11 shrink-0 items-center gap-1.5 border-l border-line-soft px-3.5 text-xs font-semibold text-ink-3 transition-colors hover:bg-surface hover:text-ink-1 focus-visible:-outline-offset-2"
      >
        {copied ? (
          <Check size={14} weight="bold" className="text-ok" />
        ) : (
          <Copy size={14} weight="bold" />
        )}
        <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
      </button>
    </div>
  );
}

function PlatformCard({
  icon: PlatformIcon,
  name,
  req,
  recommended,
  recommendedLabel,
  children,
}: {
  icon: Icon;
  name: string;
  req: string;
  recommended: boolean;
  recommendedLabel: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex h-full min-w-0 flex-col gap-5 rounded-2xl border p-5 sm:p-6 ${
        recommended
          ? "order-first border-accent/60 bg-accent/[0.06] lg:order-none"
          : "border-line bg-surface-2"
      }`}
    >
      <div className="flex items-center gap-3">
        <PlatformIcon
          size={30}
          weight="fill"
          className={`shrink-0 ${recommended ? "text-accent" : "text-ink-2"}`}
          aria-hidden="true"
        />
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold leading-tight">{name}</h3>
          <p className="mt-0.5 text-xs leading-snug text-ink-4">{req}</p>
        </div>
      </div>

      {recommended && (
        <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-accent">
          <CheckCircle size={16} weight="fill" aria-hidden="true" />
          {recommendedLabel}
        </span>
      )}

      {children}
    </div>
  );
}

// Blok catatan di dasar kartu: dipisah garis tipis supaya tombol unduh tetap jadi fokus utama.
function Notes({ children }: { children: ReactNode }) {
  return <div className="mt-auto flex min-w-0 flex-col gap-2.5 border-t border-line-soft pt-4">{children}</div>;
}

export function DownloadPicker({ dict }: { dict: Dictionary["downloadCTA"] }) {
  const os = useSyncExternalStore(subscribe, detectOS, getServerOS);
  const rec = dict.recommended;

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 md:[&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-1">
      <PlatformCard icon={WindowsLogo} name={dict.windows.name} req={dict.windows.req} recommended={os === "windows"} recommendedLabel={rec}>
        <div className="flex flex-col gap-2.5">
          <FileButton file={FILES.windows} label={dict.windows.installer} primary={os === "windows"} />
        </div>
        <Notes>
          <p className="text-sm leading-relaxed text-ink-3">{dict.windows.hint}</p>
        </Notes>
      </PlatformCard>

      <PlatformCard icon={AppleLogo} name={dict.mac.name} req={dict.mac.req} recommended={os === "mac"} recommendedLabel={rec}>
        <div className="flex flex-col gap-2.5">
          <FileButton file={FILES.macArm} label={dict.mac.arm} />
          <FileButton file={FILES.macIntel} label={dict.mac.intel} />
        </div>
        <Notes>
          <p className="text-sm leading-relaxed text-ink-3">{dict.mac.hint}</p>
          <p className="text-xs leading-relaxed text-ink-4">{dict.mac.quarantine}</p>
          <Command copyLabel={dict.copy} copiedLabel={dict.copied}>
            {COMMANDS.macQuarantine}
          </Command>
        </Notes>
      </PlatformCard>

      <PlatformCard icon={LinuxLogo} name={dict.linux.name} req={dict.linux.req} recommended={os === "linux"} recommendedLabel={rec}>
        <div className="flex flex-col gap-2.5">
          <FileButton file={FILES.linuxAppImage} label={dict.linux.appimage} primary={os === "linux"} />
          <FileButton file={FILES.linuxDeb} label={dict.linux.deb} />
        </div>
        <Notes>
          <Command copyLabel={dict.copy} copiedLabel={dict.copied}>
            {COMMANDS.linuxAppImage}
          </Command>
          <Command copyLabel={dict.copy} copiedLabel={dict.copied}>
            {COMMANDS.linuxDeb}
          </Command>
          <p className="text-xs leading-relaxed text-ink-4">{dict.linux.hint}</p>
        </Notes>
      </PlatformCard>
    </div>
  );
}
