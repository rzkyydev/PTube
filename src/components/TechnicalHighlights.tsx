import {
  ArrowsClockwise,
  Cpu,
  Database,
  Images,
  LockKey,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "./SectionHeader";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [Cpu, Timer, Images, Database, ArrowsClockwise, LockKey];

// Desktop: judul menempel di kiri (sticky) selagi daftar di kanan bergulir. Tablet/HP: tumpuk biasa.
export function TechnicalHighlights({ dict }: { dict: Dictionary["technicalHighlights"] }) {
  return (
    <section id="teknis" className="wrap section-y">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader title={dict.title} desc={dict.desc} />
        </div>

        <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {dict.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <li key={it.title} className="border-t border-line py-6">
                {Icon && <Icon size={22} weight="duotone" className="text-accent" aria-hidden="true" />}
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-3">{it.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
