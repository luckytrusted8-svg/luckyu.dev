import { Briefcase, GraduationCap } from "lucide-react";
import { getExperience } from "../../lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  const entries = getExperience();

  return (
    <section id="experience" className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Perjalanan Karier"
          heading="Pengalaman yang membentuk cara saya bekerja"
          index="05"
        />

        <div className="relative mt-14 max-w-2xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden />
          <ol className="space-y-10">
            {entries.map((entry) => {
              const Icon = entry.type === "work" ? Briefcase : GraduationCap;
              return (
                <Reveal as="li" key={entry.slug} className="relative pl-11">
                  <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-elevated text-primary-soft">
                    <Icon size={14} />
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-dim">
                    {entry.period}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-text">
                    {entry.role}
                  </h3>
                  <p className="text-sm text-primary-soft">{entry.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{entry.body}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
