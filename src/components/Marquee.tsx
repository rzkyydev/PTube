import type { Dictionary } from "@/i18n/dictionaries";

const presets = ["bounce", "jump", "shake", "wobble", "pulse", "spin jump", "side hop", "cyber glitch"];

export function Marquee({ dict }: { dict: Dictionary["marquee"] }) {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {presets.map((p) => (
        <span key={p} className="flex items-center gap-8">
          <span className="font-display text-2xl font-bold uppercase tracking-wide text-ink-4">
            {p}
          </span>
          <span className="size-1.5 rounded-full bg-accent/70" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label={dict.ariaLabel}
      className="relative overflow-hidden border-y border-line-soft py-6"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
