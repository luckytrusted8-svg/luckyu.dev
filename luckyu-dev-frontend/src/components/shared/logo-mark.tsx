import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-8 w-8 shrink-0", className)}>
      <div
        className="absolute inset-0 bg-primary"
        style={{
          clipPath:
            "polygon(0% 100%, 30% 100%, 100% 15%, 78% 0%, 22% 78%, 22% 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-brand-secondary"
        style={{
          clipPath: "path('M20 2 L20 20 A9 9 0 0 0 34 20 L34 2 L27 2 L27 19 A2 2 0 0 1 23 19 L23 2 Z')",
        }}
      />
    </div>
  );
}
