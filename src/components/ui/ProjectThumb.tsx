import { useState } from "react";
import { Images } from "lucide-react";
import type { ProjectAccent } from "../../lib/types";
import { cn } from "../../utils/cn";

const dotMap: Record<ProjectAccent, string> = {
  purple: "bg-violet",
  blue: "bg-[#007cf0]",
  pink: "bg-pink",
};

export function ProjectThumb({
  title,
  category,
  accent,
  images,
  className,
}: {
  title: string;
  category: string;
  accent: ProjectAccent;
  images?: string[];
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const cover = images?.[0];
  const showImage = Boolean(cover) && !failed;

  if (showImage) {
    return (
      <div
        className={cn(
          "relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-hairline bg-canvas-soft-2 shadow-card",
          className
        )}
      >
        <img
          src={cover}
          alt={`${title} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06]" />
        {images && images.length > 1 && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-primary/85 px-2.5 py-1 text-[11px] font-mono text-on-primary backdrop-blur-sm">
            <Images size={12} />
            {images.length}
          </span>
        )}
      </div>
    );
  }

  // Fallback: code-editor-mockup style placeholder for projects without a screenshot yet
  return (
    <div
      className={cn(
        "relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-hairline bg-primary shadow-card",
        className
      )}
    >
      <div className="absolute left-4 top-4 right-4 flex items-center gap-1.5 rounded-t-md border-b border-white/10 pb-2.5">
        <span className={cn("h-2 w-2 rounded-full", dotMap[accent])} />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-[10px] font-mono text-white/40">
          {title.toLowerCase().replace(/\s+/g, "-")}.dev
        </span>
      </div>

      <div className="absolute left-9 right-9 top-16 space-y-2 font-mono">
        <div className="h-2.5 w-2/3 rounded bg-white/20" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="h-2 w-1/2 rounded bg-white/10" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
          {category}
        </p>
      </div>
    </div>
  );
}