import { useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "../ui/LoadingScreen";
import { useSessionOnce } from "../../hooks/useSessionOnce";

const SESSION_KEY = "luckyu:intro-seen";

type Phase = "loading" | "exiting" | "done";

/**
 * Gates the whole app behind a one-time (per browser session) intro loader.
 *
 * - First visit this session: shows <LoadingScreen>, counts up, then fades
 *   out while `children` mounts underneath — so the hero's own mount-time
 *   entrance animation plays exactly as the loader disappears.
 * - Any later navigation within the same session: loader is skipped
 *   entirely, children render immediately.
 */
export function AppLoader({ children }: { children: ReactNode }) {
  const [hasSeenBefore] = useSessionOnce(SESSION_KEY);
  const [phase, setPhase] = useState<Phase>(hasSeenBefore ? "done" : "loading");

  function handleFinished() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
    setPhase("exiting");
  }

  // Prevent scrolling while the loader owns the screen.
  if (typeof document !== "undefined") {
    document.body.style.overflow = phase === "loading" ? "hidden" : "";
  }

  const showContent = phase === "exiting" || phase === "done";

  return (
    <>
      <AnimatePresence onExitComplete={() => setPhase("done")}>
        {phase === "loading" && (
          <LoadingScreen key="loading-screen" onFinished={handleFinished} />
        )}
      </AnimatePresence>

      {showContent && children}
    </>
  );
}
