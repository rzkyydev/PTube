import {
  DesktopTower,
  Microphone,
  ShieldCheck,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: DesktopTower,
    title: "Persyaratan Sistem",
    rows: [
      ["OS", "Windows 10/11 (x64)"],
      ["CPU", "Intel Celeron / AMD 3020e+"],
      ["RAM", "2 GB — app cuma < 80MB"],
      ["Grafis", "Integrated GPU"],
      ["Mikrofon", "Wajib untuk aktivasi suara"],
    ],
  },
  {
    icon: Stack,
    title: "Stack Teknologi",
    rows: [
      ["Core", "Electron v31+ (Node.js & Chromium)"],
      ["Frontend", "HTML5 · CSS3 · Vanilla JS ES6+"],
      ["Audio", "Web Audio API (AnalyserNode, BiquadFilterNode)"],
      ["Catatan", "Tanpa React/Vue biar RAM tetap mungil"],
    ],
  },
  {
    icon: ShieldCheck,
    title: "Keamanan",
    rows: [
      ["Lokal 100%", "Tanpa script remote pihak ketiga"],
      ["Anti-XSS", "Navigasi tak dikenal diblokir"],
      ["Izin ketat", "Akses dibatasi media & mikrofon saja"],
    ],
  },
];

export function SystemSecurity() {
  return (
    <section id="sistem" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Lancar di PC kentang, aman di mana aja
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          Persyaratan minim dan keamanan berlapis — buat streamer yang sensitif soal izin aplikasi.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="glass flex h-full flex-col gap-5 rounded-2xl p-6">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent">
                  <c.icon size={20} weight="fill" />
                </span>
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
              </div>
              <dl className="space-y-2.5">
                {c.rows.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3 text-sm">
                    <dt className="shrink-0 text-ink-4">{k}</dt>
                    <dd className="text-right text-ink-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 flex items-center gap-2 text-xs text-ink-4">
          <Microphone size={14} weight="fill" className="text-accent" />
          Aktivasi suara butuh izin mikrofon — PTube nggak pernah akses yang lain.
        </p>
      </Reveal>
    </section>
  );
}
