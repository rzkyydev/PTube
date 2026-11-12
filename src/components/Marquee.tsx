import type { Dictionary } from "@/i18n/dictionaries";

const presets = ["bounce & squish", "high jump", "shake", "wobble", "pulse zoom", "spin jump", "side hop", "glitch"];

// Daftar preset animasi yang jalan pelan. Berhenti saat di-hover/fokus; untuk "reduced motion"
// berubah jadi daftar statis yang membungkus baris (lihat globals.css).
export function Marquee({ dict }: { dict: Dictionary["marquee"] }) {
  const row = (dup: boolean) => (
    <ul
      aria-hidden={dup || undefined}
      className={`flex shrink-0 items-center gap-x-10 pr-10 ${dup ? "marquee-dup" : ""}`}
    >
      {presets.map((p) => (
        <li key={p} className="flex items-center gap-10">
          <span className="font-display text-xl font-semibold text-ink-3 sm:text-2xl">{p}</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label={dict.ariaLabel}
      className="marquee overflow-hidden border-y border-line-soft py-5 sm:py-6"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track animate-marquee flex w-max" data-motion>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
