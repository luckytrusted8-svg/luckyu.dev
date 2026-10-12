import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { BlogSection } from "../components/sections/BlogSection";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Skills />
      <Experience />
      <BlogSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
