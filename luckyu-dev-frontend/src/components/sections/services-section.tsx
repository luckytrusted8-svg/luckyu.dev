import * as LucideIcons from "lucide-react";
import { LayoutTemplate, Globe, ShoppingCart, LayoutDashboard, CalendarCheck, GraduationCap, Webhook, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";
import type { Service } from "@/types/api";

const fallbackIcon = LucideIcons.Sparkles;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "company-profile": Globe,
  "landing-page": LayoutTemplate,
  "portfolio-website": LayoutTemplate,
  "e-commerce": ShoppingCart,
  "dashboard-admin": LayoutDashboard,
  "event-registration": CalendarCheck,
  "school-information-system": GraduationCap,
  "rest-api-development": Webhook,
  "maintenance-support": Wrench,
};

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" className="bg-background-secondary px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14">
          <SectionEyebrow>WHAT I DO</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">
            Layanan yang Saya Tawarkan
          </h2>
        </RevealOnScroll>

        {services.length === 0 ? (
          <p className="text-sm text-text-muted">
            Belum ada layanan ditambahkan. Kelola dari admin dashboard.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? iconMap[service.slug] ?? fallbackIcon;
              return (
                <RevealOnScroll key={service.id} delay={Math.min(i * 0.05, 0.3)}>
                  <Card>
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)]">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mb-2 font-display text-[17px] font-medium">{service.title}</h3>
                      <p className="mb-4 text-[13.5px] text-text-secondary">{service.description}</p>
                      <a href={`/services/${service.slug}`} className="text-[13px] font-semibold text-primary hover:text-brand-secondary">
                        Learn More →
                      </a>
                    </CardContent>
                  </Card>
                </RevealOnScroll>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
