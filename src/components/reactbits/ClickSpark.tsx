import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

interface ClickSparkProps {
  children: ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkCount?: number;
  duration?: number;
  className?: string;
}

export function ClickSpark({
  children,
  sparkColor = "#FFD33B",
  sparkSize = 10,
  sparkCount = 8,
  duration = 500,
  className = "",
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = Date.now();
    const newSparks: Spark[] = Array.from({ length: sparkCount }).map((_, i) => ({
      id: now + i,
      x,
      y,
      angle: (i * 360) / sparkCount,
    }));

    setSparks((prev) => [...prev, ...newSparks]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="pointer-events-none absolute block rounded-full animate-ping"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${sparkSize}px`,
            height: `${sparkSize}px`,
            backgroundColor: sparkColor,
            transform: `translate(-50%, -50%) rotate(${spark.angle}deg) translate(${sparkSize * 1.5}px)`,
            opacity: 0.8,
            transition: `all ${duration}ms ease-out`,
          }}
        />
      ))}
    </div>
  );
}
