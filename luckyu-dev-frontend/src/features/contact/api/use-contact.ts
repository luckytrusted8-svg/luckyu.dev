import { useMutation } from "@tanstack/react-query";
import { submitContactMessage } from "./contact-api";

export function useSubmitContactMessage() {
  return useMutation({
    mutationFn: submitContactMessage,
  });
}
