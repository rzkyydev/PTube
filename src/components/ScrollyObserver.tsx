"use client";

import { useEffect } from "react";

// Satu-satunya JS untuk scrollytelling. Tidak ada scroll listener dan tidak ada state React:
// IntersectionObserver cuma menulis data-attribute, lalu CSS yang mengurus semua visualnya.
//  - data-step  : indeks langkah aktif (dipakai CSS untuk mengganti isi "stage")
//  - data-live  : section sedang dekat viewport (animasi dijeda kalau tidak)
export function ScrollyObserver({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root || !("IntersectionObserver" in window)) return;

    const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-scrolly-step]"));

    const live = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) root.setAttribute("data-live", "");
        else root.removeAttribute("data-live");
      },
      { rootMargin: "120px 0px" },
    );
    live.observe(root);

    // Pita sempit di layar: langkah yang melewatinya jadi aktif. Desktop = tengah layar
    // (teks di kolom kiri, rata tengah). Mobile = ~70-76% tinggi layar, yaitu tengah area baca di bawah stage sticky.
    // Kalau dua langkah sempat beririsan di batas, yang indeksnya lebih besar menang;
    // begitu salah satunya keluar, hasilnya otomatis benar lagi.
    const mq = window.matchMedia("(min-width: 768px)");
    const inBand = new Set<number>();
    let current = -1;
    let pick: IntersectionObserver | null = null;

    const onHit = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        const i = steps.indexOf(entry.target as HTMLElement);
        if (i < 0) continue;
        if (entry.isIntersecting) inBand.add(i);
        else inBand.delete(i);
      }
      if (inBand.size === 0) return;
      const next = Math.max(...inBand);
      if (next === current) return;
      current = next;
      root.dataset.step = String(next);
      steps.forEach((el, i) => {
        el.dataset.active = String(i === next);
      });
    };

    const build = () => {
      pick?.disconnect();
      inBand.clear();
      pick = new IntersectionObserver(onHit, {
        rootMargin: mq.matches ? "-45% 0px -45% 0px" : "-70% 0px -24% 0px",
        threshold: 0,
      });
      steps.forEach((el) => pick?.observe(el));
    };
    build();
    mq.addEventListener("change", build);

    return () => {
      live.disconnect();
      pick?.disconnect();
      mq.removeEventListener("change", build);
    };
  }, [rootId]);

  return null;
}
