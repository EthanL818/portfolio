// ProjectCard.js

import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="max-w-xs bg-zinc-900 border border-zinc-700 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={project.images[0]}
        alt={project.title}
      />
      <div className="p-5">
        <h5 className="text-xl font-bold tracking-tight text-white">
          {project.title}
        </h5>
        <p className="mb-3 text-sm text-gray-500">{project.date}</p>
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
        <p className="mb-3 font-normal text-gray-400">{project.subtitle}</p>
      </div>
    </div>
  );
}
