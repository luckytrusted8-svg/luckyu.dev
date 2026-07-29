export interface HeroTrustedTechProps {
  label: string;
  items: string[];
}

export function HeroTrustedTech({ label, items }: HeroTrustedTechProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <div className="mb-4 text-[11px] font-semibold tracking-wider text-text-muted">{label}</div>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-80">
        {items.map((tech) => (
          <li key={tech} className="font-display text-[14px] font-semibold">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
