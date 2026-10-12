import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Experience } from "../components/sections/Experience";
import { Testimonials } from "../components/sections/Testimonials";
import { BlogSection } from "../components/sections/BlogSection";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <BlogSection />
      <Contact />
      <Footer />
    </>
  );
}
