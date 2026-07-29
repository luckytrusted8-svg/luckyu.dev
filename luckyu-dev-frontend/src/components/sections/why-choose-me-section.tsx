import { Zap, Palette, Search, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";

const points = [
  { icon: Zap, title: "Fast Performance", desc: "Skor Core Web Vitals tinggi di setiap proyek." },
  { icon: Palette, title: "Modern Design", desc: "UI/UX terkini yang relevan dengan brand Anda." },
  { icon: Search, title: "SEO Friendly", desc: "Struktur ramah mesin pencari sejak awal pengembangan." },
  { icon: ShieldCheck, title: "Secure & Scalable", desc: "Arsitektur bersih yang siap tumbuh bersama bisnis." },
];

export function WhyChooseMeSection() {
  return (
    <section className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14">
          <SectionEyebrow>KEUNGGULAN</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">Kenapa Memilih Saya</h2>
        </RevealOnScroll>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <RevealOnScroll key={point.title} delay={i * 0.05}>
              <Card>
                <CardContent className="p-7 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <point.icon className="h-[22px] w-[22px] text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-[16px] font-medium">{point.title}</h3>
                  <p className="text-[13px] text-text-secondary">{point.desc}</p>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
