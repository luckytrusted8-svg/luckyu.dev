"use client";

import { useFloatingIcons } from "@/hooks/use-floating-icons";

export interface FloatingIconItem {
  id: string;
  label: string;
  color?: string;
  position: React.CSSProperties;
}

const defaultIcons: FloatingIconItem[] = [
  { id: "laravel", label: "Ls", color: "#E44D26", position: { top: "0%", left: "6%" } },
  { id: "react", label: "R", color: "#61DAFB", position: { top: "15%", right: "0%" } },
  { id: "typescript", label: "TS", color: "#3178C6", position: { bottom: "22%", left: "0%" } },
  { id: "nextjs", label: "▲", position: { bottom: "8%", right: "10%" } },
  { id: "mysql", label: "DB", color: "#4479A1", position: { top: "48%", left: "-6%" } },
];

export interface FloatingTechIconsProps {
  icons?: FloatingIconItem[];
}

export function FloatingTechIcons({ icons = defaultIcons }: FloatingTechIconsProps) {
  const containerRef = useFloatingIcons<HTMLDivElement>();

  return (
    <div ref={containerRef} aria-hidden="true" className="absolute inset-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          data-float-icon
          className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-[15px] font-bold shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)]"
          style={{ ...icon.position, color: icon.color }}
        >
          {icon.label}
        </div>
      ))}
    </div>
  );
}
