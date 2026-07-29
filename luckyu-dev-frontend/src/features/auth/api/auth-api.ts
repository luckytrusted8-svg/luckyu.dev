import { apiClient, ensureCsrfCookie } from "@/lib/api-client";
import type { LoginFormValues } from "@/lib/validators/auth";
import type { AuthUser } from "@/types/api";

export async function login(payload: LoginFormValues): Promise<AuthUser> {
  await ensureCsrfCookie();
  const { data } = await apiClient.post<AuthUser>("/admin/login", payload);
  return data;
}

export async function logout(): Promise<void> {
  await apiClient.post("/admin/logout");
}

export async function getCurrentUser(): Promise<AuthUser> {
  const { data } = await apiClient.get<AuthUser>("/admin/me");
  return data;
}
