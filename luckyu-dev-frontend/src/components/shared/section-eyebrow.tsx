import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-4 flex items-center gap-2.5", center && "justify-center")}>
      <span
        className="h-3 w-[22px] bg-[image:var(--gradient-brand)]"
        style={{
          clipPath: "polygon(0% 100%, 35% 100%, 100% 0%, 78% 0%)",
        }}
      />
      <span className="text-[12px] font-bold tracking-widest text-brand-secondary">{children}</span>
    </div>
  );
}
