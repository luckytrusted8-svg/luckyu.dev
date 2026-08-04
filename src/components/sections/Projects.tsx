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
    category: "Platform Manajemen Acara",
    description:
      "Platform acara internal untuk Spero yang menyatukan pencarian acara, pendaftaran, dan check-in berbasis QR dalam satu dashboard.",
    tech: ["Express.js", "Prisma", "MySQL", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Spero-id/event-registration",
    demo: "",
    accent: "purple",
    images: ["/images/projects/event/home-event.png"],
    featured: true,
    order: 1,
    body: `## Gambaran Umum

Event Registration adalah platform acara full-stack yang saya bangun selama magang di Spero. Platform ini mendukung pencarian acara, pendaftaran, dan check-in di lokasi melalui pemindaian kode QR. Tiga tingkat akses admin memastikan setiap staf hanya dapat mengelola hal yang sesuai dengan perannya.

## Fitur yang Dibangun

- Autentikasi JWT untuk tiga peran admin melalui middleware khusus
- Alur absensi berbasis QR dengan umpan balik pemindaian langsung
- Notifikasi email asinkron melalui Nodemailer agar tidak menghambat antarmuka
- Hook \`usePolling\` untuk menyinkronkan data dashboard tanpa WebSocket

## Desain

Halaman utama dikembangkan melalui beberapa iterasi untuk menghasilkan tampilan teknologi acara yang bersih, dengan filter kategori, pemilih lokasi, dan kolom pencarian sebagai fokus utama.`,
  },
  {
    slug: "pos-skillage-mart",
    title: "POS Skillage Mart",
    category: "Laravel + Filament",
    description:
      "Panel admin kasir dan inventaris untuk Skillage Mart, toko yang dikelola siswa di sekolah, dibangun dengan Laravel dan Filament.",
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
    body: `## Gambaran Umum

POS Skillage Mart adalah panel admin untuk mengelola toko yang dikelola siswa di sekolah, mencakup produk, stok, dan transaksi. Sistem ini dibangun dengan Laravel dan Filament sebagai framework admin.

## Fitur yang Dibangun

- Resource Filament untuk produk, kategori, dan stok dengan validasi serta tabel yang dapat dicari dan diurutkan
- Akses berbasis peran agar staf dan admin melihat bagian panel yang berbeda
- Alur transaksi yang mengurangi stok secara otomatis dan mencatat riwayat penjualan
- Blade dan Tailwind CSS untuk halaman toko yang dipisahkan dari antarmuka admin

## Alasan Menggunakan Filament

Filament menyediakan tabel, formulir, dan validasi yang siap digunakan sehingga fokus pengembangan dapat diarahkan ke logika bisnis seperti pengurangan stok, izin peran, dan pelaporan.`,
  },
  {
    slug: "attendance",
    title: "Sistem Absensi Sekolah",
    category: "Laravel dan Geotagging",
    description:
      "Sistem absensi berbasis web untuk sekolah dengan check-in bergeotag dan dashboard terpisah untuk pegawai serta admin.",
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
    body: `## Gambaran Umum

Sistem produksi untuk staf SMK Skill Village Islamic School yang menggantikan absensi manual berbasis kertas dengan verifikasi lokasi. Sistem terdiri dari portal pegawai untuk check-in dan riwayat, serta portal admin untuk pemantauan.

## Sisi Pegawai

- Check-in dan check-out bergeotag melalui Google Maps API agar lokasi diverifikasi otomatis
- Dashboard pribadi untuk menampilkan status hari ini dan riwayat terbaru
- Alur check-in sederhana dengan pendekatan mobile-first

## Sisi Admin

- Dashboard dengan visualisasi Recharts untuk memantau tren kehadiran staf
- Log absensi lengkap dengan filter dan penjadwal aturan shift
- Check-out otomatis melalui Laravel Task Scheduler bagi staf yang lupa melakukan check-out`,
  },
  {
    slug: "skillage",
    title: "Skillage Edupark",
    category: "React dan Firebase",
    description:
      "Platform wisata dan pendidikan dengan pemesanan tiket serta CMS konten berbasis peran.",
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
    body: `## Gambaran Umum

Platform taman wisata dan edukasi yang mencakup pemesanan tiket, CMS artikel dengan portal penulis, editor, dan admin, katalog produk, galeri, serta testimoni. Seluruh data dikelola melalui Firebase Realtime Database.

## Implementasi Utama

- Gambar disimpan sebagai base64 di Firebase untuk menghindari penggunaan paket Storage berbayar
- Sistem peran CMS empat tingkat dengan alur persetujuan untuk kontributor baru
- Pembaruan waktu nyata melalui listener \`onValue\` sehingga perubahan konten langsung tampil`,
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
            eyebrow="Proyek Pilihan"
            heading="Beberapa proyek yang telah saya kerjakan"
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
                    Kode
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex items-center gap-1.5 text-xs font-medium text-primary-soft hover:gap-2.5 transition-all"
                  >
                    Studi kasus
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
