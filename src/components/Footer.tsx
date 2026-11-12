import Image from "next/image";
import {
  GithubLogo,
  InstagramLogo,
  TiktokLogo,
  HandHeart,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries";
import ptubeIcon from "@/assets/icon-64.webp";

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
    icon: TiktokLogo,
    label: "TikTok",
    link: "https://tiktok.com/@rzkyydev",
  },
  {
    icon: HandHeart,
    label: "Support Me",
    link: "https://sociabuzz.com/rzkyydev/tribe",
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

  const linkCls =
    "inline-flex min-h-8 items-center gap-2 rounded text-sm text-ink-3 transition-colors hover:text-ink-1";

  return (
    <footer className="border-t border-line-soft">
      <div className="wrap grid grid-cols-1 gap-10 py-12 sm:py-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 lg:gap-24">
        <div className="max-w-sm">
          <a href="#top" className="inline-flex items-center gap-2.5 rounded-lg">
            <Image
              src={ptubeIcon}
              alt="PTube logo"
              width={32}
              height={32}
              className="size-8 rounded-[0.625rem]"
              unoptimized
            />
            <span className="font-display text-xl font-bold tracking-tight">PTube</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-ink-4">{dict.desc}</p>
        </div>

        <nav aria-label={dict.navTitle} className="grid grid-cols-2 gap-x-10 gap-y-8 sm:gap-x-16">
          <div>
            <h3 className="text-sm font-semibold text-ink-2">{dict.navTitle}</h3>
            <ul className="mt-3 space-y-0.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-2">{dict.communityTitle}</h3>
            <ul className="mt-3 space-y-0.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    <s.icon size={16} weight="fill" aria-hidden="true" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-line-soft">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-ink-4 sm:flex-row sm:items-center sm:justify-between">
          <span>{dict.rights}</span>
          <span>
            {dict.language} · {dict.license}
          </span>
        </div>
      </div>
    </footer>
  );
}
