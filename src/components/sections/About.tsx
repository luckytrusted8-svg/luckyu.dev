import { getAbout } from "../../lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const statLabels: { key: "yearsBuilding" | "projectsShipped" | "stacksUsed"; label: string }[] = [
  { key: "yearsBuilding", label: "Tahun berkarya" },
  { key: "projectsShipped", label: "Proyek terselesaikan" },
  { key: "stacksUsed", label: "Teknologi dikuasai" },
];

export function About() {
  const about = getAbout();
  const paragraphs = about.body.split("\n\n");

  return (
    <section id="about" className="px-5 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} index="01" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-[1.85] text-muted">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: p.replace(
                      /\*\*(.+?)\*\*/g,
                      '<strong class="font-medium text-text">$1</strong>'
                    ),
                  }}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
              {statLabels.map((stat) => (
                <div
                  key={stat.key}
                  className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/30"
                >
                  <p className="font-display text-3xl font-bold text-gradient">
                    {about[stat.key]}
                    <span className="text-xl">+</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
