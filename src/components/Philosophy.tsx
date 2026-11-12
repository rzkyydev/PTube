import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "./SectionHeader";
import type { Dictionary } from "@/i18n/dictionaries";

// Pernyataan sikap, bukan grid kartu: dua daftar berdampingan, dipisah satu garis.
// Kiri (yang tidak dikerjakan) sengaja lebih redup; kanan (fokus) memakai warna penuh.
export function Philosophy({ dict }: { dict: Dictionary["philosophy"] }) {
  return (
    <section id="filosofi" className="wrap section-y">
      <SectionHeader
        title={`${dict.titlePrefix} ${dict.titleHighlight}`}
        desc={dict.desc}
        className="[&_h2]:text-[clamp(2.25rem,1.4rem+3.4vw,4rem)]"
      />

      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 md:grid-cols-2 md:gap-0">
        <div className="md:border-r md:border-line md:pr-10 lg:pr-16">
          <h3 className="font-display text-lg font-bold text-ink-3">{dict.notBuiltTitle}</h3>
          <ul className="mt-5 divide-y divide-line-soft">
            {dict.notBuiltItems.map((item) => (
              <li key={item} className="flex items-start gap-3 py-3 text-base text-ink-4">
                <Minus size={16} weight="bold" className="mt-1 shrink-0 text-ink-5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-10 lg:pl-16">
          <h3 className="font-display text-lg font-bold text-accent">{dict.prioritizedTitle}</h3>
          <ul className="mt-5 divide-y divide-line-soft">
            {dict.prioritizedItems.map((item) => (
              <li key={item} className="flex items-start gap-3 py-3.5 text-base font-medium text-ink-1 sm:text-lg">
                <Check size={18} weight="bold" className="mt-1.5 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
