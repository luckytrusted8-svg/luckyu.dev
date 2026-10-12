import type { ProjectEntry } from "../lib/types";

export const projects: ProjectEntry[] = [
  {
    slug: "event-registration",
    title: "Event Registration Platform",
    category: "Full-Stack Event Management",
    description:
      "Platform acara terpadu untuk Spero yang menyatukan pencarian acara, pendaftaran peserta mandiri, dan check-in berbasis QR code dalam satu dashboard terpusat.",
    tech: ["React", "Express.js", "Prisma", "MySQL", "Vite", "Tailwind CSS"],
    github: "https://github.com/Spero-id/event-registration",
    demo: "",
    accent: "purple",
    images: ["/images/projects/event/home-event.png"],
    featured: true,
    order: 1,
    body: `## Gambaran Umum
Event Registration adalah platform acara full-stack yang saya bangun selama magang di Spero. Platform ini mendukung pencarian acara, pendaftaran, dan check-in di lokasi melalui pemindaian kode QR. Tiga tingkat akses admin memastikan setiap staf hanya dapat mengelola hal yang sesuai dengan perannya.`,
  },
  {
    slug: "pos-skillage-mart",
    title: "POS Skillage Mart",
    category: "Point of Sales & Inventory",
    description:
      "Panel admin kasir dan manajemen stok inventaris untuk Skillage Mart dengan pelaporan transaksi realtime, audit log, dan hak akses bertingkat.",
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
POS Skillage Mart adalah panel admin untuk mengelola toko yang dikelola siswa di sekolah, mencakup produk, stok, dan transaksi. Sistem ini dibangun dengan Laravel dan Filament sebagai framework admin.`,
  },
  {
    slug: "attendance",
    title: "Sistem Absensi Geotagging",
    category: "Smart Attendance System",
    description:
      "Sistem absensi berbasis web dengan verifikasi koordinat GPS (geotagging) Google Maps, log absensi otomatis, dan dashboard analitik kehadiran staf.",
    tech: ["Laravel 11", "React", "Inertia.js", "Google Maps API", "Recharts", "MySQL"],
    github: "https://github.com/luckytrusted8-svg/attendance-system",
    demo: "",
    accent: "pink",
    images: [
      "/images/projects/attendance/home-attendance.png",
      "/images/projects/attendance/login-attendance.png",
    ],
    featured: true,
    order: 3,
    body: `## Gambaran Umum
Sistem absensi untuk staf SMK Skill Village Islamic School yang menggantikan absensi manual dengan verifikasi lokasi realtime melalui Google Maps API.`,
  },
  {
    slug: "skillage",
    title: "Skillage Edupark",
    category: "Platform Edukasi & Ticketing",
    description:
      "Platform wisata dan edukasi dengan e-ticketing instan, katalog wahana interaktif, dan CMS artikel multi-author berbasis Firebase.",
    tech: ["React", "Firebase Realtime DB", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/rafazakyyunus-code/skillage-edupark",
    demo: "",
    accent: "purple",
    images: [
      "/images/projects/edupark/home-skillage.jpg",
      "/images/projects/edupark/login-skillage.png",
    ],
    featured: false,
    order: 4,
    body: `## Gambaran Umum
Platform taman wisata dan edukasi yang mencakup pemesanan tiket online, CMS artikel dengan alur persetujuan, dan sinkronisasi data realtime.`,
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
