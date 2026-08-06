import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Experience } from "../components/sections/Experience";
import { BlogSection } from "../components/sections/BlogSection";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <BlogSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
