import { useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaBootstrap,
  FaDatabase,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import headshot from "../assets/headshot.png";
import resume from "../assets/resume.pdf";

export default function About({ onArrowClick }) {
  const resumeUrl = resume;
  const githubUrl = "https://github.com/EthanL818";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-40">
        {/* About me */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-purple-500 mb-4">About Me</h1>
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
          {/* Stack */}
          <div className="mt-7">
            <h2 className="text-2xl font-bold text-purple-500 mb-2">Stack</h2>
            <div className="flex flex-wrap gap-4 text-4xl text-white">
              <>
                <SiTypescript
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="TypeScript"
                />
                <SiJavascript
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="JavaScript"
                />
                <FaJava
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Java"
                />
                <FaPython
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Python"
                />
                <SiCsharp
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="C#"
                />
                <FaDatabase
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="SQL"
                />
                <FaHtml5
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="HTML"
                />
                <FaCss3Alt
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="CSS"
                />
                {/* Frameworks/Libraries */}
                <FaReact
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="React"
                />
                <FaBootstrap
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Bootstrap 5"
                />
                <SiTailwindcss
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Tailwind CSS"
                />
                <FaNodeJs
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Node.js"
                />
                <SiNextdotjs
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Next.js"
                />
                <SiExpress
                  className="hover:text-purple-500 transition-colors duration-300"
                  title="Express"
                />
              </>
            </div>
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaChevronDown
          className="text-4xl text-purple-500 cursor-pointer"
          onClick={onArrowClick}
        />
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
