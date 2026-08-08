import {
  ArrowsClockwise,
  Cpu,
  Database,
  Images,
  LockKey,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Cpu,
    title: "Rendering GPU-Accelerated",
    desc: "Chrome switches agresif: GPU rasterization, hardware overlays, anti-throttling latar belakang — animasi tetap 60 FPS walau game fullscreen.",
  },
  {
    icon: Timer,
    title: "Engine Animasi Real-Time",
    desc: "requestAnimationFrame + translate3d dengan fisika sin/cos, bukan CSS keyframes — responsif terhadap audio, stabil 60 FPS.",
  },
  {
    icon: Images,
    title: "Preloading Anti-Flicker",
    desc: "Semua state avatar dimuat di memori sebelum transisi — pergantian ekspresi instan tanpa layar berkedip.",
  },
  {
    icon: Database,
    title: "Manajemen Memori Agresif",
    desc: "Performance Mode + GC manual — RAM tertahan di bawah 100MB walau dipakai berhari-hari.",
  },
  {
    icon: ArrowsClockwise,
    title: "LRU Cache i18n",
    desc: "Hanya 3 bahasa terakhir yang disimpan di RAM, sisanya dibuang otomatis untuk hemat memori.",
  },
  {
    icon: LockKey,
    title: "Protocol Aman ptube://",
    desc: "Context isolation aktif — gambar lokal dimuat via custom protocol tanpa membuka akses file system.",
  },
];

export function TechnicalHighlights() {
  return (
    <section id="teknis" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Di balik layar
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Dikerjain sampai level byte
        </h2>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-3">
          Enam pilihan desain yang bikin PTube tetap kencang di PC kentang.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-10 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 3) * 0.06}>
            <div className="flex gap-5 border-t border-line-soft py-6">
              <span className="w-8 shrink-0 pt-0.5 font-display text-xl font-bold text-ink-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-accent">
                <it.icon size={19} weight="fill" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold">{it.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-3">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
