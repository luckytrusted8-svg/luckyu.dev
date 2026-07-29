export function HeroCodePanel() {
  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-4 left-1/2 hidden w-[220px] -translate-x-1/2 rounded-xl border border-border bg-card p-4 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] sm:left-auto sm:right-[-30px] sm:block sm:translate-x-0"
      style={{ animation: "float-y 6s ease-in-out infinite", animationDelay: "0.5s" }}
    >
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-success" />
      </div>
      <div className="font-mono text-[11px] leading-relaxed text-text-secondary">
        <div>
          <span className="text-brand-secondary">const</span> site = <span className="text-primary">await</span>
        </div>
        <div className="pl-3">build({"{"}</div>
        <div className="pl-6">
          fast: <span className="text-success">true</span>,
        </div>
        <div className="pl-6">
          scalable: <span className="text-success">true</span>
        </div>
        <div className="pl-3">{"}"});</div>
      </div>
    </div>
  );
}
