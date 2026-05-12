export function GridBackdrop({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,255,79,0.22),transparent_65%)] blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,255,79,0.06),transparent_55%)]" />
    </div>
  );
}
