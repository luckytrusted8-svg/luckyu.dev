"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            setValue((prev) => {
              const next = prev + step;
              if (next >= target) {
                clearInterval(timer);
                return target;
              }
              return next;
            });
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="tnum font-display text-[38px] font-semibold">
      {value}
      {suffix}
    </div>
  );
}
