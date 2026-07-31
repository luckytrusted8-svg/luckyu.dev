export interface AboutContent {
  eyebrow: string;
  heading: string;
  availability: string;
  yearsBuilding: number;
  projectsShipped: number;
  stacksUsed: number;
  body: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface SkillsContent {
  eyebrow: string;
  heading: string;
  categories: SkillCategory[];
}

export interface ExperienceEntry {
  slug: string;
  type: "work" | "education";
  role: string;
  org: string;
  period: string;
  order: number;
  body: string;
}

export interface ServiceEntry {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  order: number;
  body: string;
}

export type ProjectAccent = "purple" | "blue" | "pink";

export interface ProjectEntry {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  accent: ProjectAccent;
  images: string[];
  featured: boolean;
  order: number;
  body: string;
}

export interface TestimonialEntry {
  slug: string;
  name: string;
  role: string;
  order: number;
  body: string;
}