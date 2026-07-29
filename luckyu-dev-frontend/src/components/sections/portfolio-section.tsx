import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionEyebrow } from "@/components/shared/section-eyebrow";
import { PortfolioGrid } from "./portfolio-grid";
import type { Portfolio, PortfolioCategory } from "@/types/api";

export function PortfolioSection({
  portfolios,
  categories,
}: {
  portfolios: Portfolio[];
  categories: PortfolioCategory[];
}) {
  return (
    <section id="portfolio" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10">
          <SectionEyebrow>HASIL KERJA</SectionEyebrow>
          <h2 className="font-display text-[32px] font-light lg:text-[40px]">Featured Projects</h2>
        </RevealOnScroll>
        <PortfolioGrid portfolios={portfolios} categories={categories} />
      </div>
    </section>
  );
}
