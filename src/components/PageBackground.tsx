export function PageBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-aurora absolute -top-[30%] left-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,93,143,0.16),transparent_62%)]" />
      <div className="animate-aurora absolute -bottom-[35%] right-[-15%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.1),transparent_60%)] [animation-delay:-9s]" />
      <div className="absolute -left-[20%] top-[25%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.06),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
