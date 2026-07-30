import matter from "gray-matter";
import type {
  AboutContent,
  ExperienceEntry,
  ProjectEntry,
  ServiceEntry,
  SkillsContent,
  TestimonialEntry,
} from "./types";

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "").replace(/^\d+-/, "");
}

function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

// ---- About ----
const aboutRaw = import.meta.glob("../content/about.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getAbout(): AboutContent {
  const raw = Object.values(aboutRaw)[0];
  const { data, content } = matter(raw);
  return { ...(data as Omit<AboutContent, "body">), body: content.trim() };
}

// ---- Skills ----
const skillsRaw = import.meta.glob("../content/skills.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getSkills(): SkillsContent {
  const raw = Object.values(skillsRaw)[0];
  const { data } = matter(raw);
  return data as SkillsContent;
}

// ---- Experience ----
const experienceRaw = import.meta.glob("../content/experience/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getExperience(): ExperienceEntry[] {
  const entries = Object.entries(experienceRaw).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      slug: slugFromPath(path),
      ...(data as Omit<ExperienceEntry, "slug" | "body">),
      body: content.trim(),
    };
  });
  return sortByOrder(entries);
}

// ---- Services ----
const servicesRaw = import.meta.glob("../content/services/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getServices(): ServiceEntry[] {
  const entries = Object.entries(servicesRaw).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      slug: slugFromPath(path),
      ...(data as Omit<ServiceEntry, "slug" | "body">),
      body: content.trim(),
    };
  });
  return sortByOrder(entries);
}

// ---- Projects ----
const projectsRaw = import.meta.glob("../content/projects/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getProjects(): ProjectEntry[] {
  const entries = Object.entries(projectsRaw).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      slug: slugFromPath(path),
      ...(data as Omit<ProjectEntry, "slug" | "body">),
      body: content.trim(),
    };
  });
  return sortByOrder(entries);
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return getProjects().find((p) => p.slug === slug);
}

// ---- Testimonials ----
const testimonialsRaw = import.meta.glob("../content/testimonials/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getTestimonials(): TestimonialEntry[] {
  const entries = Object.entries(testimonialsRaw).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      slug: slugFromPath(path),
      ...(data as Omit<TestimonialEntry, "slug" | "body">),
      body: content.trim(),
    };
  });
  return sortByOrder(entries);
}
