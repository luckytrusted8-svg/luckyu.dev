import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/contact-form";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14">
          <SectionEyebrow>KONTAK</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">Mari Bekerja Sama</h2>
          <p className="mt-3 max-w-lg text-[14.5px] text-text-secondary">
            Punya proyek dalam pikiran? Ceritakan kebutuhan Anda, saya bantu wujudkan.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-3">
            <Card className="p-8">
              <ContactForm />
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="space-y-4 lg:col-span-2">
            <Card className="flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-[18px] w-[18px] text-primary" />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-text-muted">EMAIL</div>
                <div className="text-[14px]">hello@luckyu.dev</div>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-secondary/10">
                <MessageCircle className="h-[18px] w-[18px] text-brand-secondary" />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-text-muted">WHATSAPP</div>
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer" className="text-[14px] hover:text-primary">
                  +62 812-3456-7890
                </a>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-[18px] w-[18px] text-primary" />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-text-muted">LOCATION</div>
                <div className="text-[14px]">Bandung, Indonesia</div>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
