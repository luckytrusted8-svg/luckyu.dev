/**
 * Shared API types. These mirror the shape of Laravel API Resources
 * (see backend/app/Http/Resources/*) — keep both sides in sync manually,
 * or generate this file from the OpenAPI spec once the backend stabilizes.
 */

export interface ApiMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface ApiCollection<T> {
  data: T[];
  meta?: ApiMeta;
}

export interface ApiResource<T> {
  data: T;
}

export interface MediaItem {
  id: number;
  url: string;
  thumb_url: string | null;
  name: string;
}

export interface About {
  title: string;
  description: string;
  photo: MediaItem | null;
  cv_url: string | null;
  years_experience: number;
  projects_completed: number;
  happy_clients: number;
  satisfaction_rate: number;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  is_featured: boolean;
  order: number;
}

export interface PortfolioCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Portfolio {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: PortfolioCategory;
  tech_stack: string[];
  demo_url: string | null;
  github_url: string | null;
  is_featured: boolean;
  thumbnail: MediaItem | null;
  gallery: MediaItem[];
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  icon: string | null;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
}

export interface Testimonial {
  id: number;
  client_name: string;
  company: string;
  message: string;
  rating: number;
  avatar: MediaItem | null;
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  cover_image: MediaItem | null;
  published_at: string;
  meta_title: string | null;
  meta_description: string | null;
}

export interface SocialMedia {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  roles: string[];
}
