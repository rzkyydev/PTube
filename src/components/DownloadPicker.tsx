"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { AppleLogo, DownloadSimple, LinuxLogo, WindowsLogo } from "@phosphor-icons/react";
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
      className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px ${
        primary
          ? "bg-accent-deep text-white hover:bg-accent-deep-strong"
          : "border border-line bg-surface text-ink-1 hover:border-line-strong"
      }`}
    >
      <span className="min-w-0">
        <span className="block text-sm font-bold">{label}</span>
        <span className={`block truncate font-mono text-[11px] ${primary ? "text-white/80" : "text-ink-4"}`}>
          {file}
        </span>
      </span>
      <DownloadSimple size={18} weight="bold" className="shrink-0 transition-transform group-hover:translate-y-0.5" />
    </a>
  );
}

function Command({ children }: { children: string }) {
  return (
    <code className="block overflow-x-auto whitespace-nowrap rounded-lg bg-panel px-3 py-2 font-mono text-xs text-ink-2 select-all">
      {children}
    </code>
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
      className={`flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors ${
        recommended ? "border-accent/50 bg-accent/[0.06]" : "border-line bg-surface"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent">
            <PlatformIcon size={24} weight="fill" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold leading-tight">{name}</h3>
            <p className="text-xs text-ink-4">{req}</p>
          </div>
        </div>
      </div>
      {recommended && (
        <span className="w-fit rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">
          {recommendedLabel}
        </span>
      )}
      {children}
    </div>
  );
}

export function DownloadPicker({ dict }: { dict: Dictionary["downloadCTA"] }) {
  const os = useSyncExternalStore(subscribe, detectOS, getServerOS);
  const rec = dict.recommended;

  return (
    <div className="grid items-stretch gap-4 md:grid-cols-3">
      <PlatformCard icon={WindowsLogo} name={dict.windows.name} req={dict.windows.req} recommended={os === "windows"} recommendedLabel={rec}>
        <div className="flex flex-col gap-2.5">
          <FileButton file={FILES.windows} label={dict.windows.installer} primary={os === "windows"} />
        </div>
        <p className="mt-auto text-sm leading-relaxed text-ink-3">{dict.windows.hint}</p>
      </PlatformCard>

      <PlatformCard icon={AppleLogo} name={dict.mac.name} req={dict.mac.req} recommended={os === "mac"} recommendedLabel={rec}>
        <div className="flex flex-col gap-2.5">
          <FileButton file={FILES.macArm} label={dict.mac.arm} />
          <FileButton file={FILES.macIntel} label={dict.mac.intel} />
        </div>
        <div className="mt-auto flex flex-col gap-2.5">
          <p className="text-sm leading-relaxed text-ink-3">{dict.mac.hint}</p>
          <p className="text-xs leading-relaxed text-ink-4">{dict.mac.quarantine}</p>
          <Command>{COMMANDS.macQuarantine}</Command>
        </div>
      </PlatformCard>

      <PlatformCard icon={LinuxLogo} name={dict.linux.name} req={dict.linux.req} recommended={os === "linux"} recommendedLabel={rec}>
        <div className="flex flex-col gap-2.5">
          <FileButton file={FILES.linuxAppImage} label={dict.linux.appimage} primary={os === "linux"} />
          <FileButton file={FILES.linuxDeb} label={dict.linux.deb} />
        </div>
        <div className="mt-auto flex flex-col gap-2.5">
          <Command>{COMMANDS.linuxAppImage}</Command>
          <Command>{COMMANDS.linuxDeb}</Command>
          <p className="text-xs leading-relaxed text-ink-4">{dict.linux.hint}</p>
        </div>
      </PlatformCard>
    </div>
  );
}
