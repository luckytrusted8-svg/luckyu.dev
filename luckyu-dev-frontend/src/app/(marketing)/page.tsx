import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseMeSection } from "@/components/sections/why-choose-me-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";

import { getAbout, getServices, getSkillCategories } from "@/lib/content-api";
import { getPortfolioCategories, getPortfolios } from "@/features/portfolio/api/portfolio-api";
import { getTestimonials } from "@/features/testimonials/api/testimonials-api";
import { getBlogPosts } from "@/features/blog/api/blog-api";

// Revalidate periodically rather than caching this page forever — content
// is managed through the admin dashboard and should show up without a
// full redeploy.
export const revalidate = 60;

/**
 * Every call here is wrapped so that one dead/empty endpoint doesn't crash
 * the whole homepage — the backend not being up yet, or a resource simply
 * having no rows yet (per the "no dummy data" rule), are both normal,
 * expected states while the admin dashboard content isn't filled in.
 */
async function safe<T>(promise: Promise<T>, fallback: T): Promise<T> {
  try {
    return await promise;
  } catch {
    return fallback;
  }
}

export default async function HomePage() {
  const [about, services, skillCategories, portfoliosRes, portfolioCategoriesRes, testimonialsRes, blogRes] =
    await Promise.all([
      safe(getAbout(), null),
      safe(getServices(), []),
      safe(getSkillCategories(), []),
      safe(getPortfolios(), { data: [] }),
      safe(getPortfolioCategories(), { data: [] }),
      safe(getTestimonials(), { data: [] }),
      safe(getBlogPosts(), { data: [] }),
    ]);

  return (
    <main>
      <HeroSection />
      <ServicesSection services={services} />
      <WhyChooseMeSection />
      <SkillsSection categories={skillCategories} />
      <PortfolioSection portfolios={portfoliosRes.data} categories={portfolioCategoriesRes.data} />
      <WorkProcessSection />
      <StatisticsSection about={about} />
      <TestimonialSection testimonials={testimonialsRes.data} />
      <BlogSection posts={blogRes.data} />
      <ContactSection />
    </main>
  );
}
