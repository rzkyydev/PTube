// Satu pendar statis di belakang hero. Tanpa animasi, tanpa noise, tanpa layer fixed yang mahal.
export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(55%_60%_at_78%_0%,color-mix(in_srgb,var(--accent)_11%,transparent),transparent_70%)]"
    />
  );
}
