import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { MainLayout } from "./components/layout/MainLayout";
import { AppLoader } from "./components/layout/AppLoader";
import { Home } from "./pages/Home";
import { useLenis } from "./hooks/useLenis";

// Dynamic import untuk halaman sekunder agar bundle awal lebih ringan
const ProjectDetail = lazy(() => import("./pages/ProjectDetail").then((m) => ({ default: m.ProjectDetail })));
const AllProjects = lazy(() => import("./pages/AllProjects").then((m) => ({ default: m.AllProjects })));
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const BlogDetail = lazy(() => import("./pages/BlogDetail").then((m) => ({ default: m.BlogDetail })));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />
    </div>
  );
}

function ScrollToTopOnNavigate() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.slice(1));
      const frame = requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      });

      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function AppShell() {
  useLenis();
  return (
    <MainLayout>
      <ScrollToTopOnNavigate />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLoader>
        <AppShell />
      </AppLoader>
    </BrowserRouter>
  );
}
