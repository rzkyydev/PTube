const heights = [8, 14, 20, 26, 16, 24, 11, 22, 15, 23, 10, 19, 25, 13, 21, 12, 26, 17, 20, 24, 13, 18];

export function SoundWave({
  active,
  proximityActive = false,
  bars = 22,
  className,
}: {
  active: boolean;
  proximityActive?: boolean;
  bars?: number;
  className?: string;
}) {
  const state = active ? "active" : proximityActive ? "hover" : "idle";
  return (
    <div
      className={`soundwave flex items-center justify-center gap-[3px] ${className ?? ""}`}
      data-state={state}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[5px] origin-bottom rounded-full bg-accent/80"
          style={{ height: heights[i % heights.length], animationDelay: `${(i % 7) * 0.06}s` }}
        />
      ))}
    </div>
  );
}
