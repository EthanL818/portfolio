import Projects from "./components/Projects";
import { PROJECTLIST } from "./constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Divider from "./components/Divider";

export default function App() {
  return (
    <main className="overflow-x-hidden tracking-tighter text-gray-200 antialiased min-h-screen relative">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Divider />
      <section id="projects">
        <Projects projectList={PROJECTLIST} />
      </section>
    </main>
  );
}
