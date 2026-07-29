import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface HeroCtaGroupProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  tertiaryHref: string;
  tertiaryLabel: string;
}

export function HeroCtaGroup({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tertiaryHref,
  tertiaryLabel,
}: HeroCtaGroupProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      <Button asChild>
        <a href={primaryHref}>
          {primaryLabel}
          <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href={secondaryHref}>{secondaryLabel}</a>
      </Button>
      <Button asChild variant="link">
        <a href={tertiaryHref} download>
          <Download className="h-[15px] w-[15px]" aria-hidden="true" />
          {tertiaryLabel}
        </a>
      </Button>
    </div>
  );
}
