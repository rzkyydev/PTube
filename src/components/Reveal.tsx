// Server component: tidak ada JS per elemen. Animasinya diurus CSS (.reveal di globals.css)
// dan satu IntersectionObserver global di <RevealObserver />.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={`reveal ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
