import { apiClient } from "@/lib/api-client";
import type { ApiCollection, ApiResource, BlogPost } from "@/types/api";

export async function getBlogPosts(categorySlug?: string, page = 1): Promise<ApiCollection<BlogPost>> {
  const { data } = await apiClient.get<ApiCollection<BlogPost>>("/blog-posts", {
    params: { category: categorySlug, page },
  });
  return data;
}

export async function getBlogPostBySlug(slug: string): Promise<ApiResource<BlogPost>> {
  const { data } = await apiClient.get<ApiResource<BlogPost>>(`/blog-posts/${slug}`);
  return data;
}
