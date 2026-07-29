import { apiClient } from "@/lib/api-client";
import type { ApiCollection, ApiResource, Portfolio, PortfolioCategory } from "@/types/api";

export async function getPortfolios(categorySlug?: string): Promise<ApiCollection<Portfolio>> {
  const { data } = await apiClient.get<ApiCollection<Portfolio>>("/portfolios", {
    params: categorySlug ? { category: categorySlug } : undefined,
  });
  return data;
}

export async function getPortfolioBySlug(slug: string): Promise<ApiResource<Portfolio>> {
  const { data } = await apiClient.get<ApiResource<Portfolio>>(`/portfolios/${slug}`);
  return data;
}

export async function getPortfolioCategories(): Promise<ApiCollection<PortfolioCategory>> {
  const { data } = await apiClient.get<ApiCollection<PortfolioCategory>>("/portfolio-categories");
  return data;
}
