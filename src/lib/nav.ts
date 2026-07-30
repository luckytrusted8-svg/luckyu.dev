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
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: History },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail },
];

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/", icon: GitFork },
  { label: "Instagram", href: "https://instagram.com/", icon: Camera },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Link2 },
];
