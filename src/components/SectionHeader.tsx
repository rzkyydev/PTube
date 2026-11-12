import { Reveal } from "./Reveal";

// Blok judul section yang konsisten: satu h2, satu paragraf, tanpa label tambahan di atasnya.
export function SectionHeader({
  id,
  title,
  desc,
  center = false,
  className = "",
}: {
  id?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <h2 id={id} className={`t-h2 max-w-3xl ${center ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {desc && <p className={`t-lead mt-4 max-w-[56ch] ${center ? "mx-auto" : ""}`}>{desc}</p>}
    </Reveal>
  );
}
