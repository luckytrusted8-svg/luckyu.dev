import { cn } from "../../utils/cn";

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-bg-elevated px-2.5 py-1 text-[11px] font-mono text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
