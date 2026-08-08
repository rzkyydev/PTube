"use client";

import { motion, useReducedMotion } from "motion/react";

export function SoundWave({
  active,
  bars = 22,
  className,
}: {
  active: boolean;
  bars?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const heights = [8, 14, 20, 26, 16, 24, 11, 22, 15, 23, 10, 19, 25, 13, 21, 12, 26, 17, 20, 24, 13, 18];
  return (
    <div className={`flex items-center justify-center gap-[3px] ${className ?? ""}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[5px] origin-bottom rounded-full bg-accent/80"
          style={{ height: heights[i % heights.length] }}
          animate={
            reduce
              ? { scaleY: 0.25 }
              : active
                ? { scaleY: [0.2, 1, 0.4, 0.85, 0.3] }
                : { scaleY: 0.22 }
          }
          transition={
            active && !reduce
              ? { duration: 0.55, repeat: Infinity, delay: (i % 7) * 0.06, ease: "easeInOut" }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}
