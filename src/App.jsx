import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="overflow-x-hidden tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <Hero />
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>{" "}
    </main>
  );
}
