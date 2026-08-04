import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "./components/layout/MainLayout";
import { AppLoader } from "./components/layout/AppLoader";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { useLenis } from "./hooks/useLenis";

function ScrollToTopOnNavigate() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
}

function AppShell() {
  useLenis();
  return (
    <MainLayout>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
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