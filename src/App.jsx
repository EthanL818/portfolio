import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="overflow-x-hidden tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <Hero />
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>{" "}
    </main>
  );
}
