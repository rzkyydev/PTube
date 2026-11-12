"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ClockCounterClockwise,
  Cpu,
  DownloadSimple,
  Feather,
  House,
  List,
  ListChecks,
  SquaresFour,
  X,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import type { Dictionary } from "@/i18n/dictionaries";

import ptubeIcon from "@/assets/icon-64.webp";

// Progressive navbar. Tiga state, ditentukan posisi scroll:
//   top  : navbar penuh (merek, label, aksi)
//   pill : pil melayang di tengah atas, hanya ikon
//   dot  : hanya logo
// Scroll TIDAK memakai event listener: dua sentinel + IntersectionObserver menulis satu angka (0/1/2),
// jadi React hanya render ulang saat state benar-benar berganti. Semua perubahan visual = transisi CSS
// (lihat blok "Navbar progresif" di globals.css).
const STATES = ["top", "pill", "dot"] as const;

// Sentinel pertama = lewat ~48px dari atas. Kedua = "scroll dalam" (sekitar dua layar).
const TOP_AT = 48;
const DEEP_AT = "max(1600px, 200svh)";

// Section di halaman -> item navbar yang disorot. null = tidak ada item yang cocok.
const SPY: Record<string, string | null> = {
  top: "top",
  cerita: "fitur",
  fitur: "fitur",
  "cara-kerja": "cara-kerja",
  filosofi: "filosofi",
  teknis: "teknis",
  sistem: "teknis",
  "cara-pakai": null,
  unduh: null,
  changelog: "changelog",
};

type NavItem = {
  id: string;
  href: string;
  label: string;
  Icon: Icon;
  kind: "home" | "link" | "low";
};

export function Navbar({
  dict,
  themeLabels,
}: {
  dict: Dictionary["navbar"];
  themeLabels: Dictionary["themeToggle"];
}) {
  const [level, setLevel] = useState<0 | 1 | 2>(0);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const anchorRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const topSentinel = useRef<HTMLSpanElement>(null);
  const deepSentinel = useRef<HTMLSpanElement>(null);

  const state = STATES[level];

  const items: NavItem[] = [
    { id: "top", href: "#top", label: dict.home, Icon: House, kind: "home" },
    { id: "fitur", href: "#fitur", label: dict.features, Icon: SquaresFour, kind: "link" },
    { id: "cara-kerja", href: "#cara-kerja", label: dict.howItWorks, Icon: ListChecks, kind: "link" },
    { id: "filosofi", href: "#filosofi", label: dict.philosophy, Icon: Feather, kind: "low" },
    { id: "teknis", href: "#teknis", label: dict.technical, Icon: Cpu, kind: "low" },
    { id: "changelog", href: "#changelog", label: dict.changelog, Icon: ClockCounterClockwise, kind: "link" },
  ];
  const downloadLabel = `${dict.download} ${dict.free}`;

  // 1. Kedalaman scroll.
  useEffect(() => {
    const a = topSentinel.current;
    const b = deepSentinel.current;
    if (!a || !b || !("IntersectionObserver" in window)) return;
    const past = { a: false, b: false };
    let first = true;
    // Root diperpanjang jauh ke bawah: sentinel "berpotongan" selama belum terlewati (masih di bawah tepi atas
    // layar). Dengan begitu lompatan scroll (klik anchor, scrollTo, restore posisi) yang melewati sentinel
    // tanpa pernah menyentuhnya tetap terdeteksi; IntersectionObserver biasa cuma memberi tahu saat menyilang.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const isPast = !e.isIntersecting;
          if (e.target === a) past.a = isPast;
          else past.b = isPast;
        }
        setLevel(!past.a ? 0 : !past.b ? 1 : 2);
        if (first) {
          first = false;
          // State awal (mis. reload di tengah halaman) diterapkan tanpa animasi; transisi baru aktif sesudahnya.
          requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
        }
      },
      { rootMargin: "0px 0px 50000px 0px" },
    );
    io.observe(a);
    io.observe(b);
    return () => io.disconnect();
  }, []);

  // 2. Item yang sedang dibaca (scrollspy ringan, hanya render ulang kalau berganti).
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = Object.keys(SPY)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActiveId(SPY[e.target.id] ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 3. Tutup saat tap di luar atau tekan Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (anchorRef.current && !anchorRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpen(false);
      (brandRef.current ?? menuRef.current)?.focus();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleLabel = open ? dict.menuClose : dict.menuOpen;

  const brandInner = (
    <>
      <Image src={ptubeIcon} alt="" width={32} height={32} unoptimized priority />
      <span className="f f-word">
        <span className="fc">
          <span className="ptnav-word">PTube</span>
        </span>
      </span>
    </>
  );

  return (
    <>
      {/* Sentinel scroll: absolut terhadap dokumen (bukan header yang fixed). */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-0 w-px">
        <span ref={topSentinel} className="absolute left-0 block h-0.5 w-px" style={{ top: TOP_AT }} />
        <span ref={deepSentinel} className="absolute left-0 block h-0.5 w-px" style={{ top: DEEP_AT }} />
      </div>

      <header className="ptnav" data-state={state} data-open={open} data-ready={ready}>
        <nav
          ref={anchorRef}
          aria-label={dict.menuLabel}
          className="ptnav-anchor"
          // Hover hanya untuk mouse/pen. Sentuhan memakai tap pada logo (mobile tidak punya hover).
          onPointerEnter={(e) => {
            if (e.pointerType !== "touch" && level > 0) setOpen(true);
          }}
          onPointerLeave={(e) => {
            if (e.pointerType !== "touch" && level > 0) setOpen(false);
          }}
          // Keyboard: fokus ke dalam pil membukanya, Tab keluar menutupnya.
          onFocus={(e) => {
            if (level > 0 && e.target.matches(":focus-visible")) setOpen(true);
          }}
          onBlur={(e) => {
            const next = e.relatedTarget as Node | null;
            if (next && !e.currentTarget.contains(next)) setOpen(false);
          }}
        >
          <div className="ptnav-shell">
            {level === 0 ? (
              <a href="#top" className="ptnav-brand" aria-label="PTube">
                {brandInner}
              </a>
            ) : (
              <button
                ref={brandRef}
                type="button"
                className="ptnav-brand"
                aria-label={toggleLabel}
                aria-expanded={open}
                aria-controls="ptnav-panel"
                onClick={() => setOpen((v) => !v)}
              >
                {brandInner}
              </button>
            )}

            <ul className="ptnav-links">
              {items.map((it) => {
                const active = activeId === it.id;
                const cls =
                  it.kind === "home" ? "f f-home" : it.kind === "low" ? "f f-link f-low" : "f f-link";
                return (
                  <li key={it.id} className={cls}>
                    <span className="fc">
                      <a
                        href={it.href}
                        className="ptnav-link"
                        aria-label={it.label}
                        aria-current={active ? "location" : undefined}
                        data-active={active}
                        onClick={closeMenu}
                      >
                        <span className="f f-icon">
                          <span className="fc">
                            <span className="ptnav-ico">
                              <it.Icon size={18} weight="bold" aria-hidden="true" />
                            </span>
                          </span>
                        </span>
                        <span className="f f-label">
                          <span className="fc">
                            <span className="ptnav-txt">{it.label}</span>
                          </span>
                        </span>
                      </a>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="ptnav-right">
              <div className="f f-act">
                <div className="fc">
                  <div className="ptnav-act">
                    <LanguageSelector />
                    <ThemeToggle labels={themeLabels} />
                  </div>
                </div>
              </div>

              <div className="f f-cta">
                <div className="fc">
                  <a href="#unduh" className="ptnav-cta" aria-label={downloadLabel} onClick={closeMenu}>
                    <DownloadSimple size={18} weight="bold" aria-hidden="true" />
                    <span className="f f-ctalabel">
                      <span className="fc">
                        <span className="ptnav-txt">{downloadLabel}</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="f f-menu">
                <div className="fc">
                  <button
                    ref={menuRef}
                    type="button"
                    className="ptnav-ctl ml-1"
                    aria-label={toggleLabel}
                    aria-expanded={open}
                    aria-controls="ptnav-panel"
                    onClick={() => setOpen((v) => !v)}
                  >
                    {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Panel bertulisan untuk layar < lg (hover/tap pada pil atau tombol menu). */}
          <div id="ptnav-panel" className="ptnav-panel">
            <div className="ptnav-card">
              <ul className="flex flex-col">
                {items.map((it) => {
                  const active = activeId === it.id;
                  return (
                    <li key={it.id}>
                      <a
                        href={it.href}
                        onClick={closeMenu}
                        aria-current={active ? "location" : undefined}
                        className={`flex min-h-12 items-center gap-3 rounded-xl px-3 text-base font-medium transition-colors ${
                          active
                            ? "bg-accent/15 text-accent"
                            : "text-ink-2 hover:bg-surface hover:text-ink-1"
                        }`}
                      >
                        <it.Icon size={20} weight="bold" aria-hidden="true" />
                        {it.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-1 flex items-center gap-2 border-t border-line-soft px-1 pt-2">
                <LanguageSelector variant="inline" />
                <ThemeToggle labels={themeLabels} />
              </div>
              <a href="#unduh" onClick={closeMenu} className="btn btn-primary mt-2 w-full">
                <DownloadSimple size={18} weight="bold" aria-hidden="true" />
                {downloadLabel}
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
