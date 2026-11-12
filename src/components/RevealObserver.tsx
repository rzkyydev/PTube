"use client";

import { useEffect } from "react";

// Dua tugas, satu file, tanpa scroll listener:
//  1. [data-reveal]  : tambah .is-visible sekali saat pertama terlihat (fade masuk blok judul).
//  2. [data-motion]  : tulis data-live selama elemen dekat viewport, supaya animasi tak terlihat dijeda (CSS).
export function RevealObserver() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motions = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      motions.forEach((el) => el.setAttribute("data-live", ""));
      return;
    }

    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealIO.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    reveals.forEach((el) => revealIO.observe(el));

    const motionIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.setAttribute("data-live", "");
          else entry.target.removeAttribute("data-live");
        }
      },
      { rootMargin: "120px 0px" },
    );
    motions.forEach((el) => motionIO.observe(el));

    return () => {
      revealIO.disconnect();
      motionIO.disconnect();
    };
  }, []);

  return null;
}
