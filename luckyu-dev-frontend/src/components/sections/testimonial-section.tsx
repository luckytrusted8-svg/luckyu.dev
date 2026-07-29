import { Star } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";
import type { Testimonial } from "@/types/api";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-card/55 p-6 backdrop-blur-md">
      <div className="mb-3 flex gap-0.5 text-brand-secondary">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="mb-5 text-[13.5px] text-text-secondary">&ldquo;{testimonial.message}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 overflow-hidden rounded-full bg-[image:var(--gradient-brand)]">
          {testimonial.avatar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={testimonial.avatar.url} alt={testimonial.client_name} className="h-full w-full object-cover" />
          )}
        </div>
        <div>
          <div className="text-[13px] font-semibold">{testimonial.client_name}</div>
          <div className="text-[11px] text-text-muted">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) {
    return null; // no fabricated testimonials — section simply doesn't render yet
  }

  // Duplicate the list once so the CSS marquee loop is seamless.
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:px-16">
        <SectionEyebrow center>TESTIMONIAL</SectionEyebrow>
        <h2 className="font-display text-[32px] font-light lg:text-[40px]">Apa Kata Klien</h2>
      </div>
      <div className="group flex w-max gap-6">
        <div className="flex animate-[marquee_32s_linear_infinite] gap-6 group-hover:[animation-play-state:paused]">
          {looped.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
