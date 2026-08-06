import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GitFork, ArrowUpRight, ArrowRight } from "lucide-react";
import type { ProjectEntry } from "../../lib/types";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectThumb } from "../ui/ProjectThumb";
import { Tag } from "../ui/Tag";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { cn } from "../../utils/cn";

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
  {
    slug: "luckystore-mini-commerce",
    title: "LuckyStore Mini Commerce",
    category: "UI Prototype E-Commerce",
    description:
      "Desain UI/UX prototype e-commerce responsif untuk toko online dengan katalog produk, detail produk, dan keranjang belanja.",
    tech: ["React", "Vite","JavaScript", "Tailwind CSS"],
    github: "https://luckytrusted8-svg.github.io/E-commerce.mini/",
    demo: "",
    accent: "blue",
    images: [
      "/images/projects/luckystore/home-luckystore.png",
      "/images/projects/luckystore/product-detail-luckystore.png",
    ],
    featured: false,
    order: 5,
    body: `## Gambaran Umum

LuckyStore Mini Commerce adalah prototype UI/UX untuk aplikasi e-commerce yang dibangun dengan React, Vite, dan Tailwind CSS. Proyek ini fokus pada desain antarmuka yang bersih dan responsif untuk pengalaman berbelanja yang optimal di semua perangkat.

## Komponen UI yang Dibangun

- Header dengan navigasi dan keranjang belanja
- Hero section dengan banner promosi "Diskon Besar Hari Ini"
- Grid katalog produk dengan kartu produk yang interaktif
- Halaman detail produk dengan galeri gambar dan informasi lengkap
- Sistem rating dan review produk
- Tombol aksi (Masukkan Keranjang, Beli Sekarang)
- Desain responsif mobile-first dengan Tailwind CSS

## Fokus Desain

Desain antarmuka memprioritaskan kemudahan navigasi dan visual hierarchy yang jelas. Penggunaan warna cerah (khususnya orange/red) menciptakan sense of urgency untuk fitur promosi, sementara layout yang terstruktur membuat produk mudah ditemukan dan dibandingkan.`,
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}

export function Projects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const displayedProjects = sorted.slice(0, 4);

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
          {displayedProjects.map((project) => (
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

        {sorted.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/all-projects"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
                  "bg-[linear-gradient(135deg,#111827_0%,#334155_100%)] text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.24)] hover:shadow-[0_14px_36px_-10px_rgba(15,23,42,0.32)]"
                )}
              >
                Lihat Lainnya
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
