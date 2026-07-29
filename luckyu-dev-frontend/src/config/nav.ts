export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const adminNav = [
  { label: "Dashboard", href: "/admin" },
  { label: "About", href: "/admin/about" },
  { label: "Services", href: "/admin/services" },
  { label: "Portfolio", href: "/admin/portfolio" },
  { label: "Skills", href: "/admin/skills" },
  { label: "Experience", href: "/admin/experience" },
  { label: "Testimonials", href: "/admin/testimonials" },
  { label: "Blog", href: "/admin/blog" },
  { label: "Messages", href: "/admin/messages" },
  { label: "Social Media", href: "/admin/social-media" },
  { label: "SEO", href: "/admin/seo" },
  { label: "Settings", href: "/admin/settings" },
] satisfies NavItem[];
