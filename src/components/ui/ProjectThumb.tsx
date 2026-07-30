import type { ProjectAccent } from "../../lib/types";
import { cn } from "../../utils/cn";

const accentMap: Record<ProjectAccent, string> = {
  purple: "from-primary/70 via-primary/10 to-transparent",
  blue: "from-secondary/70 via-secondary/10 to-transparent",
  pink: "from-accent/70 via-accent/10 to-transparent",
};

const dotMap: Record<ProjectAccent, string> = {
  purple: "bg-primary",
  blue: "bg-secondary",
  pink: "bg-accent",
};

export function ProjectThumb({
  title,
  category,
  accent,
  className,
}: {
  title: string;
  category: string;
  accent: ProjectAccent;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-border bg-bg-elevated",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accentMap[accent])} />
      <div className="absolute inset-0 bg-grain opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* faux browser chrome */}
      <div className="absolute left-4 top-4 right-4 flex items-center gap-1.5 rounded-t-md border border-border/60 bg-surface/70 px-3 py-2 backdrop-blur-sm">
        <span className={cn("h-2 w-2 rounded-full", dotMap[accent])} />
        <span className="h-2 w-2 rounded-full bg-muted-dim" />
        <span className="h-2 w-2 rounded-full bg-muted-dim" />
        <span className="ml-2 truncate text-[10px] font-mono text-muted-dim">
          {title.toLowerCase().replace(/\s+/g, "-")}.dev
        </span>
      </div>

      {/* faux content lines */}
      <div className="absolute left-9 right-9 top-16 space-y-2">
        <div className="h-2.5 w-2/3 rounded bg-white/15" />
        <div className="h-2 w-5/6 rounded bg-white/8" />
        <div className="h-2 w-1/2 rounded bg-white/8" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[11px] font-mono uppercase tracking-wider text-muted-dim">
          {category}
        </p>
      </div>
    </div>
  );
}
