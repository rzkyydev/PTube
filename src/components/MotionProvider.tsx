"use client";

import { LazyMotion } from "motion/react";

// Fitur animasi dimuat async (setelah hydration) dan komponen pakai `m`, bukan `motion`,
// jadi bundle awal jauh lebih kecil.
const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
