import type { LucideIcon } from "lucide-react";
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  History,
  MessageSquareQuote,
  Mail,
  GitFork,
  Camera,
  Link2,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Beranda", icon: Home },
  { id: "about", label: "Tentang", icon: User },
  { id: "services", label: "Layanan", icon: Briefcase },
  { id: "skills", label: "Keahlian", icon: Code2 },
  { id: "projects", label: "Proyek", icon: FolderGit2 },
  { id: "experience", label: "Pengalaman", icon: History },
  { id: "blog", label: "Blog", icon: MessageSquareQuote },
  { id: "testimonials", label: "Testimoni", icon: MessageSquareQuote },
  { id: "contact", label: "Kontak", icon: Mail },
];

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/luckytrusted8-svg", icon: GitFork },
  { label: "Instagram", href: "https://www.instagram.com/kyyyyuuuww/?next=%2Fdirect%2Ft%2F17843334251546557%2F&hl=en", icon: Camera },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucky-ubaidillah-1a31b8404/", icon: Link2 },
];
