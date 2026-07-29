export const siteConfig = {
  name: "Luckyu.dev",
  title: "Luckyu.dev — Full Stack Web Developer",
  description:
    "Luckyu.dev membantu bisnis, startup, UMKM, sekolah, organisasi, dan personal brand membangun website modern, cepat, responsif, aman, dan scalable.",
  keywords: [
    "full stack developer",
    "jasa pembuatan website",
    "web developer freelance",
    "Next.js developer",
    "Laravel developer",
    "Luckyu.dev",
  ],
  author: "Lucky Ubaidillah",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://luckyu.dev",
  ogImage: "/images/og-image.jpg",
  links: {
    github: "https://github.com/luckyu-dev",
    linkedin: "https://linkedin.com/in/luckyu-dev",
    instagram: "https://instagram.com/luckyu.dev",
    whatsapp: "https://wa.me/6281234567890",
  },
} as const;
