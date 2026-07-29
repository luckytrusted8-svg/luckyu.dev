import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export interface HeroSectionProps {
  eyebrow?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  description?: string;
  photoUrl?: string;
  photoAlt?: string;
  trustedTechLabel?: string;
  trustedTech?: string[];
}

const DEFAULT_PHOTO_URL =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=600&fit=crop&q=80";

/**
 * Hero — the first section on the homepage. Accepts everything as props
 * (with sensible defaults) rather than hardcoding copy, so it can later be
 * wired directly to the `About` API resource without touching this file's
 * structure — only the values passed in from the parent Server Component
 * change.
 */
export function HeroSection({
  eyebrow = "HALO, SAYA",
  firstName = "Lucky",
  lastName = "Ubaidillah",
  role = "Full Stack Web Developer",
  description = "Saya membantu bisnis, startup, UMKM, sekolah, organisasi, dan personal brand membangun website modern yang cepat, responsif, aman, dan scalable menggunakan teknologi terbaru.",
  photoUrl = DEFAULT_PHOTO_URL,
  photoAlt = "Foto profil Lucky Ubaidillah",
  trustedTechLabel = "DIPERCAYA MEMBANGUN DENGAN",
  trustedTech = ["Next.js", "Laravel", "React", "TypeScript", "MySQL"],
}: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 lg:px-16 lg:pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <HeroContent
          eyebrow={eyebrow}
          firstName={firstName}
          lastName={lastName}
          role={role}
          description={description}
          trustedTechLabel={trustedTechLabel}
          trustedTech={trustedTech}
          cta={{
            primaryHref: "#portfolio",
            primaryLabel: "View Portfolio",
            secondaryHref: "#contact",
            secondaryLabel: "Hire Me",
            tertiaryHref: "/cv.pdf",
            tertiaryLabel: "Download CV",
          }}
        />

        <RevealOnScroll delay={0.15}>
          <HeroVisual photoUrl={photoUrl} photoAlt={photoAlt} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
