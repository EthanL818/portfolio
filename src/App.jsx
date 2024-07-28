import Projects from "./components/Projects";
import { PROJECTLIST } from "./constants";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="overflow-x-hidden tracking-tighter text-gray-200 antialiased min-h-screen relative">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects projectList={PROJECTLIST} />
      </section>
    </main>
  );
}
