import { Reveal } from "./Reveal";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  index,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-primary-soft",
            align === "center" && "justify-center"
          )}
        >
          {index && <span className="text-muted-dim">{index}</span>}
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text leading-[1.15]">
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-4 text-muted leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
