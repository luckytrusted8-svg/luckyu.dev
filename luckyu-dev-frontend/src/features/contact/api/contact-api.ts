import { apiClient } from "@/lib/api-client";
import type { ContactFormValues } from "@/lib/validators/contact";

export async function submitContactMessage(payload: ContactFormValues) {
  const { data } = await apiClient.post("/contact-messages", payload);
  return data;
}
