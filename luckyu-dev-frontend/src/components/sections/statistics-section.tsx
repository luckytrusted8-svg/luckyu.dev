import { AnimatedCounter } from "@/components/shared/animated-counter";
import type { About } from "@/types/api";

export function StatisticsSection({ about }: { about: About | null }) {
  const stats = [
    { label: "Projects Completed", value: about?.projects_completed ?? 0 },
    { label: "Happy Clients", value: about?.happy_clients ?? 0 },
    { label: "Years Experience", value: about?.years_experience ?? 0 },
    { label: "Client Satisfaction", value: about?.satisfaction_rate ?? 0, suffix: "%" },
  ];

  return (
    <section className="px-6 py-16 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[image:var(--gradient-brand)] p-10 lg:p-14">
        <div className="grid grid-cols-2 gap-8 text-center text-white lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix ?? "+"} />
              <div className="text-[13px] opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
