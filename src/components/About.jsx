import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.png";
import resume from "../assets/resume.pdf";
import aboutBackground from "../assets/about-background.jpg";

export default function About() {
  const resumeUrl = resume;
  const githubUrl = "https://github.com/EthanL818";

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-40">
        {/* About me */}
        <div className="md:w-1/2">
          <span className="font-extrabold mb-4 text-5xl inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
            ABOUT ME
          </span>
          <p className="text-xl text-white mb-7">
            Hi, I'm Ethan, entering my third year of software engineering. I
            have a passion for programming and love creating cool projects.
            Currently interested particularly in AI and AI-powered applications.
            <br />
            <br />
            When I'm not programming, you can probably find me suffering through
            schoolwork, watching shows, or playing video games.
            <br />
            <br />
            If you have any questions, collaboration ideas, or simply want to
            say hello, you can find me on LinkedIn and GitHub. I'm always open
            to networking, sharing knowledge, and collaborating on exciting
            projects.
          </p>

          {/* Button container with flexbox */}
          <div className="flex justify-start space-x-4">
            <HoverButton
              buttonContent="View Resume"
              onClick={() => window.open(resumeUrl, "_blank")}
            />
            <HoverButton
              buttonContent={<FaGithub className="text-3xl" />}
              onClick={() => window.open(githubUrl, "_blank")}
              square
            />
          </div>
        </div>
        {/* Headshot */}
        <div className="md:w-1/3 flex justify-end">
          <div className="relative overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 backdrop-blur-3xl">
              <img
                src={headshot}
                alt="About me"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${aboutBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    </div>
  );
}

function HoverButton({ buttonContent, onClick, square }) {
  const buttonRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (event) => {
    if (!buttonRef.current || isFocused) return;

    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-flex ${
        square ? "w-12" : "px-6"
      } h-12 items-center justify-center overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-950 font-medium text-gray-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f)`,
        }}
      />
      {buttonContent}
    </button>
  );
}
