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
      "An internal event platform for Spero — event discovery, registration, and QR-based check-in in one dashboard.",
    tech: ["Express.js", "Prisma", "MySQL", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Spero-id/event-registration",
    demo: "",
    accent: "purple",
    images: ["/images/projects/event/home-event.png"],
    featured: true,
    order: 1,
    body: `## Overview

Event Registration is a full-stack event platform I built during my internship at Spero. It covers the full lifecycle — browsing and discovering events, registering with a few clicks, and checking in on-site with a scanned QR code — with three tiers of admin access controlling what each staff member can see and do.

## What I built

- JWT authentication across three admin roles, enforced through custom middleware
- QR-code based attendance flow with live scan feedback
- Async email notifications via Nodemailer, queued so they never block the UI
- A \`usePolling\` hook that keeps the admin dashboard's live numbers in sync without a websocket layer

## Design

The landing page went through several iterations to land on a clean, event-tech aesthetic — category filters, a location picker, and a search bar front and center — with careful attention to spacing and contrast rather than heavy visual effects.`,
  },
  {
    slug: "pos-skillage-mart",
    title: "POS Skillage Mart",
    category: "Laravel + Filament",
    description:
      "A point-of-sale and inventory admin panel for Skillage Mart — the school's student-run store — built entirely on Laravel and Filament.",
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

POS Skillage Mart is an admin panel that runs the school's student-run store — products, stock, and transactions — built on Laravel with Filament as the admin framework instead of a hand-rolled dashboard.

## What I built

- Filament resources for products, categories, and stock, with validation and searchable/sortable tables out of the box
- Role-based access so staff and admins see different panel sections
- A transaction flow that deducts stock automatically and keeps a running sales log
- Blade + TailwindCSS for the storefront-facing pages, kept separate from the Filament-generated admin UI

## Why Filament

For an internal tool like this, hand-building CRUD screens would have been wasted effort — Filament gave me production-ready tables, forms, and validation, so I could spend the time on the actual business logic (stock deduction, role permissions, reporting) instead of re-building form inputs.`,
  },
  {
    slug: "attendance",
    title: "School Attendance System",
    category: "Laravel + Geotagging",
    description:
      "A web-based attendance system for my school, with geotagged check-ins and separate dashboards for employees and admins.",
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

A production system used by staff at SMK Skill Village Islamic School to record attendance with location verification, replacing a manual paper process. It has two sides: an employee portal for check-in/history, and an admin portal for oversight.

## Employee side

- Geotagged check-in and check-out via the Google Maps API, so location is verified automatically
- A personal dashboard showing today's status and recent history
- Simple, mobile-first check-in flow — most staff use it from their phone

## Admin side

- A dashboard with Recharts visualizations for attendance trends across staff
- A full attendance log with filtering, plus a scheduler for managing shift rules
- Auto-checkout via Laravel's task scheduler for staff who forget to sign out`,
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
      "/images/projects/edupark/etiket-skillage.png",
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
    <section id="projects" className="px-5 py-24 sm:px-10 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Pekerjaanku"
            heading="Beberapa project yang pernah saya bikin"
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40"
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
                <p className="text-[11px] font-mono uppercase tracking-wider text-primary-soft">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-text">
                  <Link to={`/projects/${project.slug}`} className="hover:text-primary-soft transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-text transition-colors"
                  >
                    <GitFork size={14} />
                    Code
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex items-center gap-1.5 text-xs font-medium text-primary-soft hover:gap-2.5 transition-all"
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