import Timeline from "./Timeline";
import experienceBackground from "../assets/experience-background.jpg";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen text-gray-200"
    >
      <div className="container mx-auto px-5 py-24">
        <div className="text-center">
          <h1 className="font-extrabold mb-8 text-4xl sm:text-4xl md:text-5xl inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
            EXPERIENCE
          </h1>
        </div>

        <div className="w-3/4 mx-auto backdrop-blur-sm">
          <Timeline />
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center brightness-75"
          style={{
            backgroundImage: `url(${experienceBackground})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    </section>
  );
}
