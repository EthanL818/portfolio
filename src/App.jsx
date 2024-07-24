import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  const parallax = useRef(null);
  const totalPages = 5;

  function scrollToNext(nextPage) {
    if (parallax.current) {
      parallax.current.scrollTo(nextPage);
    }
  }

  return (
    <main className="overflow-x-hidden tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <Parallax pages={totalPages} ref={parallax}>
        <ParallaxLayer>
          <Hero onArrowClick={() => scrollToNext(1)} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <About onArrowClick={() => scrollToNext(2)} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <h2>projects</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <h2>skills</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}>
          <h2>contact</h2>
        </ParallaxLayer>
      </Parallax>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </main>
  );
}
