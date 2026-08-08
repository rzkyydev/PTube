import {
  GithubLogo,
  TwitchLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const nav = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#filosofi", label: "Filosofi" },
  { href: "#teknis", label: "Teknis" },
  { href: "#sistem", label: "Syarat" },
  { href: "#unduh", label: "Unduh" },
];

const socials = [
  { icon: GithubLogo, label: "GitHub" },
  { icon: TwitchLogo, label: "Twitch" },
  { icon: YoutubeLogo, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent-deep text-sm font-extrabold text-white">
              P
            </span>
            <span className="font-display text-xl font-bold">PTube</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-ink-4">
            PNGTuber desktop ringan — avatar PNG-mu ikut ngomong, PC-mu tetap adem.
          </p>
        </div>

        <nav aria-label="Navigasi footer" className="flex gap-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-4">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-3 transition-colors hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-4">
              Komunitas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-sm text-ink-3 transition-colors hover:text-ink-1 focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <s.icon size={16} weight="fill" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-line-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-ink-4 sm:flex-row">
          <span>© 2025-2026 RzkyyDev · All Rights Reserved</span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-medium">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Bahasa Indonesia
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-medium">
              Lisensi Proprietary
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
