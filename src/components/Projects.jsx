import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import Spline from "@splinetool/react-spline";

function Modal({ project, onClose }) {
  const modalRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const modalElement = modalRef.current;

    // Add class for animation
    modalElement.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => {
      modalElement.classList.remove("opacity-0", "translate-y-4");
    }, 100);

    // Lock scroll when modal is open
    disableBodyScroll(modalElement);

    return () => {
      // Unlock scroll when modal is closed
      enableBodyScroll(modalElement);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackgroundClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
    >
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-8 max-w-3xl w-full relative transform transition-transform duration-300 ease-in-out">
        <div className="relative">
          {project.images && project.images.length > 0 && (
            <img
              className="rounded-t-lg w-full h-96 object-cover mb-4 transition-opacity duration-300 ease-in-out"
              src={project.images[currentImageIndex]}
              alt={project.title}
            />
          )}
          <button
            onClick={handlePrevImage}
            className="absolute left-0 top-1/2 mx-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-0 top-1/2 mx-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-white mb-2">
          {project.title}
        </h5>
        <p className="mb-2 text-sm text-gray-500">{project.date}</p>
        <div className="mb-3 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-transparent border border-purple-700 hover:bg-purple-700 text-white text-xs px-2.5 py-0.5 rounded-lg whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mb-4 font-normal text-gray-400">{project.subtitle}</p>
        <div className="flex space-x-4">
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <IoCodeSlash className="mr-1 h-4 w-4" />
              View Code
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projectList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black overflow-hidden">
      {/* Spline in background */}
      <div className="absolute inset-0 z-0 brightness-75 blur-sm">
        <Spline scene="https://prod.spline.design/SAw5j4HB1JGtUcNe/scene.splinecode" />
      </div>
      <div className="relative w-full max-w-screen-xl z-10">
        <h1 className="font-extrabold mb-4 mt-10 text-6xl text-center animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
          PROJECTS
        </h1>
        <p className="text-2xl text-center mb-10 text-white-700">
          A selection of my recent work
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projectList.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}
