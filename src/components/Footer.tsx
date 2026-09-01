import Image from "next/image";
import {
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";
const PTUBE_ICON = "/icon.png";

const socials = [
  {
    icon: GithubLogo,
    label: "GitHub",
    link: "https://github.com/rzkyydev",
  },
  {
    icon: InstagramLogo,
    label: "Instagram",
    link: "https://www.instagram.com/rzkyy.dev/",
  },
  {
    icon: YoutubeLogo,
    label: "YouTube",
    link: "https://www.youtube.com/@rzkyydev",
  },
];

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const nav = [
    { href: "#fitur", label: dict.nav[0].label },
    { href: "#cara-kerja", label: dict.nav[1].label },
    { href: "#filosofi", label: dict.nav[2].label },
    { href: "#teknis", label: dict.nav[3].label },
    { href: "#sistem", label: dict.nav[4].label },
    { href: "#unduh", label: dict.nav[5].label },
  ];

  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src={PTUBE_ICON}
              alt="Logo PTube"
              width={32}
              height={32}
              className="size-8 rounded-xl"
              priority
            />

            <span className="font-display text-xl font-bold tracking-tight">
              PTube
            </span>
          </a>

          <p className="mt-4 text-sm leading-relaxed text-ink-4">
            {dict.desc}
          </p>
        </div>

        <nav
          aria-label="Navigasi footer"
          className="flex gap-12"
        >
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-4">
              {dict.navTitle}
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
              {dict.communityTitle}
            </h3>

            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
          <span>{dict.rights}</span>

          <span className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-medium">
              <span
                className="size-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {dict.language}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-medium">
              {dict.license}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}