import { Microphone } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "./SectionHeader";
import type { Dictionary } from "@/i18n/dictionaries";

// Lembar spesifikasi: tiga kolom tabel yang dipisah garis tipis, bukan tiga kartu.
export function SystemSecurity({ dict }: { dict: Dictionary["systemSecurity"] }) {
  const groups = [
    { title: dict.requirementsTitle, rows: dict.requirements },
    { title: dict.stackTitle, rows: dict.stack },
    { title: dict.securityTitle, rows: dict.security },
  ];

  return (
    <section id="sistem" className="wrap section-y">
      <SectionHeader title={dict.title} desc={dict.desc} />

      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className={`lg:px-8 lg:first:pl-0 lg:last:pr-0 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${
              i === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <h3 className="font-display text-lg font-bold">{g.title}</h3>
            <dl className="mt-4 divide-y divide-line-soft border-t border-line">
              {g.rows.map((row) => (
                <div key={row.k} className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] gap-4 py-3 text-sm">
                  <dt className="text-ink-4">{row.k}</dt>
                  <dd className="text-ink-1">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-10 flex max-w-[64ch] items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-2">
        <Microphone size={18} weight="fill" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
        {dict.micWarning}
      </p>
    </section>
  );
}
