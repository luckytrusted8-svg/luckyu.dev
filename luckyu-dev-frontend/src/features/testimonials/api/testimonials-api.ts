import { apiClient } from "@/lib/api-client";
import type { ApiCollection, Testimonial } from "@/types/api";

export async function getTestimonials(): Promise<ApiCollection<Testimonial>> {
  const { data } = await apiClient.get<ApiCollection<Testimonial>>("/testimonials");
  return data;
}
