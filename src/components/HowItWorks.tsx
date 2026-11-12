import Image from "next/image";
import { Microphone } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "./SectionHeader";
import { Mascot } from "./Mascot";
import { SoundWave } from "./SoundWave";
import avatarIdle from "@/assets/avatar-idle.webp";
import avatarSpeaking from "@/assets/avatar-speaking.webp";
import type { Dictionary } from "@/i18n/dictionaries";

// Ini urutan nyata (tambah gambar -> pilih mic -> live), jadi nomor langkah memang membawa informasi.
export function HowItWorks({ dict }: { dict: Dictionary["howItWorks"] }) {
  const visuals = [
    <div key="img" className="flex items-center gap-2">
      {[avatarIdle, avatarSpeaking].map((src, i) => (
        <span key={i} className="relative size-12 overflow-hidden rounded-lg border border-line-soft bg-background">
          <Image src={src} alt="" fill sizes="48px" className="object-contain p-1" unoptimized />
        </span>
      ))}
      <span className="grid size-12 place-items-center rounded-lg border border-dashed border-line-strong text-lg text-ink-4" aria-hidden="true">
        +
      </span>
    </div>,
    <div key="mic" className="flex items-center gap-3">
      <Microphone size={20} weight="fill" className="text-accent" aria-hidden="true" />
      <SoundWave active className="h-8" bars={16} />
    </div>,
    <div key="live" className="flex items-center gap-3">
      <Mascot mode="speaking" className="h-12 w-12" />
      <span
        className="grid h-9 w-16 place-items-center rounded-md border border-line-strong bg-[#00b140]"
        aria-hidden="true"
      >
        <span className="size-3 rounded-full bg-white" />
      </span>
    </div>,
  ];

  return (
    <section id="cara-kerja" className="wrap section-y">
      <SectionHeader title={dict.title} desc={dict.desc} />

      <ol className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 md:grid-cols-3 md:gap-8">
        {dict.steps.map((s, i) => (
          <li key={s.title} className="relative border-t border-line pt-6">
            <span
              aria-hidden="true"
              className="absolute -top-[0.9rem] left-0 grid size-7 place-items-center rounded-full bg-accent-deep font-display text-sm font-bold text-white"
            >
              {i + 1}
            </span>
            <h3 className="font-display text-xl font-bold leading-tight">{s.title}</h3>
            <p className="mt-2.5 max-w-[42ch] text-sm leading-relaxed text-ink-3">{s.desc}</p>
            <div className="mt-6 flex min-h-[5.5rem] items-center rounded-xl border border-line-soft bg-surface-2 p-4">
              {visuals[i]}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
