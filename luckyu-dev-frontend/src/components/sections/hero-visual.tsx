import Image from "next/image";
import { FloatingTechIcons } from "./hero-floating-icons";
import { HeroCodePanel } from "./hero-code-panel";

export interface HeroVisualProps {
  photoUrl: string;
  photoAlt: string;
}

export function HeroVisual({ photoUrl, photoAlt }: HeroVisualProps) {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[460px]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(circle, rgba(57,130,241,0.35), rgba(7,181,215,0.15) 55%, transparent 75%)",
        }}
      />

      <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full border-2 border-transparent bg-[image:var(--gradient-brand)] p-[2px] sm:h-[300px] sm:w-[300px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
          <Image
            src={photoUrl}
            alt={photoAlt}
            fill
            sizes="(min-width: 640px) 300px, 260px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <FloatingTechIcons />
      <HeroCodePanel />
    </div>
  );
}
