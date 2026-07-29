import { apiClient } from "@/lib/api-client";
import type { About, ApiCollection, ApiResource, Service, SkillCategory } from "@/types/api";

export async function getAbout(): Promise<About | null> {
  try {
    const { data } = await apiClient.get<ApiResource<About>>("/about");
    return data.data;
  } catch {
    // Not seeded yet — the About singleton row doesn't exist until the
    // admin fills it in. Treat as "no content yet", not an error.
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const { data } = await apiClient.get<ApiCollection<Service>>("/services");
    return data.data;
  } catch {
    return [];
  }
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  try {
    const { data } = await apiClient.get<ApiCollection<SkillCategory>>("/skills");
    return data.data;
  } catch {
    return [];
  }
}
