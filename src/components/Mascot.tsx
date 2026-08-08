"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export type MascotMode = "idle" | "speaking" | "mute" | "blink";

export function Mascot({
  mode = "idle",
  className,
}: {
  mode?: MascotMode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [blink, setBlink] = useState(false);
  const [mouthScale, setMouthScale] = useState(1);

  useEffect(() => {
    if (mode !== "idle" || reduce) return;
    let closeT: ReturnType<typeof setTimeout>;
    let openT: ReturnType<typeof setTimeout>;
    let alive = true;
    const open = () => {
      if (!alive) return;
      setBlink(false);
      closeT = setTimeout(close, 2200 + Math.random() * 2600);
    };
    const close = () => {
      if (!alive) return;
      setBlink(true);
      openT = setTimeout(open, 140);
    };
    openT = setTimeout(open, 0);
    return () => {
      alive = false;
      clearTimeout(closeT);
      clearTimeout(openT);
    };
  }, [mode, reduce]);

  useEffect(() => {
    if (mode !== "speaking" || reduce) return;
    const iv = setInterval(() => setMouthScale(Math.random() > 0.5 ? 1 : 0.35), 140);
    return () => clearInterval(iv);
  }, [mode, reduce]);

  const eyesClosed = mode === "blink" || (mode === "idle" && blink);

  return (
    <motion.div
      className={className}
      animate={
        reduce
          ? { y: 0, rotate: 0 }
          : mode === "speaking"
            ? { y: [0, -6, 0], rotate: [0, -2, 2, 0] }
            : mode === "mute"
              ? { y: 0, rotate: [0, -5, 5, 0] }
              : { y: [0, -8, 0], rotate: 0 }
      }
      transition={
        reduce
          ? {}
          : {
              duration: mode === "idle" || mode === "blink" ? 3.4 : 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full drop-shadow-[0_14px_28px_rgba(255,93,143,0.3)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ptBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9dbb" />
            <stop offset="100%" stopColor="#ff5d8f" />
          </linearGradient>
          <radialGradient id="ptEar" cx="0.4" cy="0.3">
            <stop offset="0%" stopColor="#ffb3ca" />
            <stop offset="100%" stopColor="#ff5d8f" />
          </radialGradient>
        </defs>

        {/* arms */}
        <motion.g
          animate={
            reduce
              ? { rotate: 0 }
              : mode === "speaking"
                ? { rotate: [-9, 9, -9] }
                : { rotate: 0 }
          }
          transition={
            reduce ? {} : { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformOrigin: "48px 132px" }}
        >
          <ellipse cx="40" cy="132" rx="16" ry="24" fill="url(#ptBody)" stroke="#c22b5c" strokeWidth="2.5" transform="rotate(22 40 132)" />
          <ellipse cx="160" cy="132" rx="16" ry="24" fill="url(#ptBody)" stroke="#c22b5c" strokeWidth="2.5" transform="rotate(-22 160 132)" />
        </motion.g>

        {/* antenna */}
        <path
          d="M100 66 C100 44 114 36 114 22"
          stroke="url(#ptBody)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="114" cy="20" r="7" fill="#ff5d8f" stroke="#c22b5c" strokeWidth="2" />
        <circle cx="117" cy="17" r="2" fill="#ffd7e3" />

        {/* ears */}
        <circle cx="50" cy="70" r="19" fill="url(#ptEar)" stroke="#c22b5c" strokeWidth="2.5" />
        <circle cx="150" cy="70" r="19" fill="url(#ptEar)" stroke="#c22b5c" strokeWidth="2.5" />
        <circle cx="50" cy="72" r="9" fill="#ff7aa5" />
        <circle cx="150" cy="72" r="9" fill="#ff7aa5" />

        {/* body */}
        <ellipse cx="100" cy="128" rx="66" ry="60" fill="url(#ptBody)" stroke="#c22b5c" strokeWidth="3" />
        <path d="M44 108 Q100 84 156 108" stroke="rgba(255,255,255,0.45)" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* face patch */}
        <ellipse cx="100" cy="140" rx="42" ry="32" fill="#fff5f7" />

        {/* cheeks */}
        <circle cx="66" cy="136" r="11" fill="rgba(255,93,143,0.32)" />
        <circle cx="134" cy="136" r="11" fill="rgba(255,93,143,0.32)" />

        {/* eyes */}
        {eyesClosed ? (
          <g stroke="#26262e" strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M71 104 q9 -10 18 0" />
            <path d="M111 104 q9 -10 18 0" />
          </g>
        ) : (
          <g>
            <circle cx="80" cy="102" r="10" fill="#26262e" />
            <circle cx="120" cy="102" r="10" fill="#26262e" />
            <circle cx="83.5" cy="98.5" r="3.2" fill="#fff" />
            <circle cx="123.5" cy="98.5" r="3.2" fill="#fff" />
          </g>
        )}

        {/* mouth */}
        {mode === "speaking" ? (
          <motion.ellipse
            cx="100"
            cy="142"
            rx="11"
            ry="8"
            fill="#ff8fb2"
            stroke="#c22b5c"
            strokeWidth="2"
            animate={
              reduce || mode !== "speaking"
                ? { scaleY: 1 }
                : { scaleY: mouthScale, scaleX: 1.5 - mouthScale * 0.5 }
            }
            style={{ transformOrigin: "100px 142px" }}
            transition={{ duration: 0.14, ease: "easeOut" }}
          />
        ) : mode === "mute" ? (
          <path d="M88 142 h24" stroke="#c22b5c" strokeWidth="4.5" strokeLinecap="round" />
        ) : (
          <path
            d="M90 136 q10 12 20 0"
            stroke="#26262e"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
          />
        )}
      </svg>
    </motion.div>
  );
}
