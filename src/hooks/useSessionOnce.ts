import { useState } from "react";

/**
 * Tracks a one-time "seen this session" flag in sessionStorage.
 * Returns [hasSeenBefore, markAsSeen].
 *
 * hasSeenBefore is computed once on mount (lazy initializer), so a fresh
 * tab/session always starts false; reloading within the same tab session
 * (or navigating between routes) will read true and skip whatever this
 * gates — e.g. a first-load intro screen.
 */
export function useSessionOnce(key: string): [boolean, () => void] {
  const [hasSeenBefore] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(key) === "1";
    } catch {
      // sessionStorage unavailable (privacy mode, SSR, etc.) — treat as unseen
      return false;
    }
  });

  function markAsSeen() {
    try {
      sessionStorage.setItem(key, "1");
    } catch {
      // ignore — non-critical
    }
  }

  return [hasSeenBefore, markAsSeen];
}
