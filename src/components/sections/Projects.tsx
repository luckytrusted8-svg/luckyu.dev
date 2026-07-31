import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GitFork, ArrowUpRight } from "lucide-react";
import type { ProjectEntry } from "../../lib/types";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectThumb } from "../ui/ProjectThumb";
import { Tag } from "../ui/Tag";
import { staggerContainer, fadeUp } from "../../animations/variants";

/**
 * All project data lives right here — edit this array directly to add,
 * remove, or update a project. No Markdown, no separate data file.
 *
 * `images`: paths to files you place in `public/images/projects/`.
 * First image = card thumbnail. Leave as `[]` to show a placeholder
 * mockup until you have real screenshots — nothing breaks either way.
 */
export const projects: ProjectEntry[] = [
  {
    slug: "event-registration",
    title: "Event Registration",
    category: "Event Management Platform",
    description:
      "A full-stack event platform with QR check-in, tiered admin access, and a dark premium landing page.",
    tech: ["Express.js", "Prisma", "MySQL", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Spero-id/event-registration",
    demo: "",
    accent: "purple",
    images: [
      "/images/projects/event/home-event.png",
    ],
    featured: true,
    order: 1,
    body: `## Overview

EventPass is a full-stack event management system built during my internship. It handles everything from event creation to on-site attendance, with three tiers of admin access controlling what each staff member can see and do.

## What I built

- JWT authentication across three admin roles, enforced through custom middleware
- QR-code based attendance flow with live scan feedback
- Async email notifications via Nodemailer, queued so they never block the UI
- A \`usePolling\` hook that keeps the admin dashboard's live numbers in sync without a websocket layer

## Design

The landing page went through several iterations to land on a dark, premium aesthetic — inspired by modern event-tech products — with careful attention to spacing and contrast rather than heavy visual effects.`,
  },
  {
    slug: "pos skillage mart",
    title: "POS Skillage Mart",
    category: "Laravel + Filament",
    description:
      "A role-based e-commerce app built as an internship portfolio piece, from ERD to checkout flow.",
    tech: ["Laravel 10", "Filament", "Blade", "TailwindCSS", "MySQL", "PHP"],
    github: "https://github.com/azyaamnf/skillage-pos",
    demo: "https://skillage-mart.com/admin/login",
    accent: "blue",
    images: [
      "/images/projects/pos/login-pos.png",
      "/images/projects/pos/dashboard-pos.png",
    ],
    featured: true,
    order: 2,
    body: `## Overview

Built as a structured, 11-stage internship project: ERD design, migrations, Eloquent models, controllers, role-based middleware, and full frontend pages — in that order, with a review at each stage.

## Notable decisions

- A custom \`LoginResponse\` class to handle role-based redirects on top of Laravel Fortify
- File uploads handled through \`router.post()\` with manual \`FormData\` and a \`_method: 'put'\` override
- Separate add/edit pages instead of modals, for clearer state and easier validation

## Stack details

Frontend runs on Inertia.js with TypeScript and the shadcn/ui "Vega" preset for consistent, accessible components; the whole project runs locally through Laragon.`,
  },
  {
    slug: "attendance",
    title: "School Attendance System",
    category: "Laravel + Geotagging",
    description:
      "A web-based attendance system for my school, with geotagged check-ins and role-based dashboards.",
    tech: ["Laravel 11", "Breeze", "Inertia.js", "React", "Recharts", "Google Maps API"],
    github: "https://github.com/luckytrusted8-svg/attendance-system",
    demo: "",
    accent: "pink",
    images: [
      "/images/projects/attendance/home-attendance.png",
      "/images/projects/attendance/login-attendance.png",
      "/images/projects/attendance/register-attendance.png",
      "/images/projects/attendance/admin-dashboard.png",
      "/images/projects/attendance/admin-log-attendance.png",
      "/images/projects/attendance/admin-scheduler.png",
      "/images/projects/attendance/employe-dashboard.png",
      "/images/projects/attendance/employe-chekin.png",
      "/images/projects/attendance/employe-history.png",
    ],
    featured: true,
    order: 3,
    body: `## Overview

A production system used by staff at SMK Skill Village Islamic School to record attendance with location verification, replacing a manual paper process.

## Features

- Google Maps integration for geotagged check-in and check-out
- Auto-checkout via Laravel's task scheduler for staff who forget to sign out
- Role-based dashboards with Recharts visualizations for admins
- A mobile bottom navigation bar so employees can check in from their phones without friction`,
  },
  {
    slug: "skillage",
    title: "Skillage Edupark",
    category: "React + Firebase",
    description:
      "A tourism and education platform with ticket booking and a role-based content CMS.",
    tech: ["React", "Firebase Realtime Database", "JavaScript"],
    github: "https://github.com/rafazakyyunus-code/skillage-edupark",
    demo: "",
    accent: "purple",
    images: [
      "/images/projects/edupark/home-skillage.jpg",
      "/images/projects/edupark/login-skillage.png",
      "/images/projects/edupark/admin-skillage.png",
      "/images/projects/edupark/article-skillage.png",
      "/images/projects/edupark/etiket-skillage.png"
    ],
    featured: false,
    order: 4,
    body: `## Overview

A tourism/education park platform covering ticket booking, an article CMS with writer/editor/admin portals, a product catalog, gallery, and testimonials — all on Firebase Realtime Database.

## Notable patterns

- Images stored as base64 in Firebase to avoid the paid Storage tier
- A four-tier CMS role system (admin, editor, writer, pending) with an approval workflow for new contributors
- Real-time updates throughout via \`onValue\` listeners, so content changes reflect instantly`,
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}

export function Projects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="px-5 py-24 sm:px-10 lg:py-32 border-t border-hairline/60">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="My Work"
            heading="A few things I've shipped"
            index="04"
          />
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {sorted.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-canvas transition-colors hover:border-primary/40"
            >
              <Link to={`/projects/${project.slug}`} className="p-4 pb-0">
                <ProjectThumb
                  title={project.title}
                  category={project.category}
                  accent={project.accent}
                  images={project.images}
                  className="transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-mono uppercase tracking-wider text-link">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  <Link to={`/projects/${project.slug}`} className="hover:text-link transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-hairline pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-body hover:text-ink transition-colors"
                  >
                    <GitFork size={14} />
                    Code
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex items-center gap-1.5 text-xs font-medium text-link hover:gap-2.5 transition-all"
                  >
                    Case study
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}