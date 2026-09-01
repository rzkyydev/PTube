import Image from "next/image";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Preference } from "@/i18n/server";

const PTUBE_RELEASES =
  "#unduh";
const PTUBE_ICON = "/icon.png";

export function Navbar({ dict, pref }: { dict: Dictionary["navbar"]; pref: Preference }) {
  const links = [
    { href: "#fitur", label: dict.features },
    { href: "#cara-kerja", label: dict.howItWorks },
    { href: "#filosofi", label: dict.philosophy },
    { href: "#teknis", label: dict.technical },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="glass-deep mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src={PTUBE_ICON}
            alt="Logo PTube"
            width={32}
            height={32}
            className="size-8 rounded-xl"
            priority
          />
          <span className="font-display text-xl font-bold tracking-tight">PTube</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1 rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-ink-2 sm:flex">
            <span className="size-1.5 rounded-full bg-ok" aria-hidden="true" />
            v4.0.0
          </span>
          <LanguageSelector currentPref={pref} />
          <ThemeToggle />
          <a href={PTUBE_RELEASES} className="group flex items-center gap-1.5 rounded-xl bg-accent-deep px-3.5 py-2 text-sm font-bold text-white transition-all hover:bg-accent-deep-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px">
          <DownloadSimple weight="bold" className="size-4 transition-transform group-hover:-translate-y-0.5" />
          <span>{dict.download}</span>
          <span className="hidden sm:inline">{dict.free}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
