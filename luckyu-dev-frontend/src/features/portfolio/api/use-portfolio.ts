import { useQuery } from "@tanstack/react-query";
import { getPortfolioBySlug, getPortfolioCategories, getPortfolios } from "./portfolio-api";

export const portfolioKeys = {
  all: ["portfolios"] as const,
  list: (category?: string) => [...portfolioKeys.all, "list", category ?? "all"] as const,
  detail: (slug: string) => [...portfolioKeys.all, "detail", slug] as const,
  categories: () => [...portfolioKeys.all, "categories"] as const,
};

/**
 * Client-side hook for the interactive filter UI on /portfolio.
 * The initial server-rendered list should come from a direct call to
 * getPortfolios() in a Server Component for SEO; this hook takes over
 * once the user starts filtering client-side.
 */
export function usePortfolios(categorySlug?: string) {
  return useQuery({
    queryKey: portfolioKeys.list(categorySlug),
    queryFn: () => getPortfolios(categorySlug),
  });
}

export function usePortfolio(slug: string) {
  return useQuery({
    queryKey: portfolioKeys.detail(slug),
    queryFn: () => getPortfolioBySlug(slug),
    enabled: Boolean(slug),
  });
}

export function usePortfolioCategories() {
  return useQuery({
    queryKey: portfolioKeys.categories(),
    queryFn: getPortfolioCategories,
    staleTime: 5 * 60 * 1000,
  });
}
