import { FaHouseChimney } from "react-icons/fa6";

import project1_1 from "../assets/project-1.png";
import project1_2 from "../assets/project-1-2.png";
import project1_3 from "../assets/project-1-3.png";
import project1_4 from "../assets/project-1-4.png";

import project2_1 from "../assets/project-2.png";
import project2_2 from "../assets/project-2-2.jpg";
import project2_3 from "../assets/project-2-3.jpg";
import project2_4 from "../assets/project-2-4.gif";

import project3_1 from "../assets/project-3.png";
import project3_2 from "../assets/project-3-2.png";
import project3_3 from "../assets/project-3-3.png";
import project3_4 from "../assets/project-3-4.png";

import project4_1 from "../assets/project-4.png";
import project4_2 from "../assets/project-4-2.png";
import project4_3 from "../assets/project-4-3.png";

import project5_1 from "../assets/project-5.png";

import project6_1 from "../assets/project-6.png";
import project6_2 from "../assets/project-6-2.png";

import project7_1 from "../assets/project-7.png";

export const NAVIGATION_LINKS = [
  { label: <FaHouseChimney />, href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const PROJECTLIST = [
  {
    title: "devCircle",
    subtitle:
      "A full-stack digital platform designed for students to share their projects, and receive constructive feedback.",
    images: [project1_1, project1_2, project1_3, project1_4],
    techStack: ["React", "Next.js", "Firebase"],
    date: "Jun. 2024 - Present",
    codeLink: "https://github.com/EthanL818/dev-circle",
    liveLink: "https://dev-circle-liard.vercel.app/",
  },
  {
    title: "Western TSI Website",
    subtitle:
      "A website designed for the Western Tech for Social Impact club, showcasing their team, projects, and upcoming events.",
    images: [project5_1],
    techStack: ["React", "Tailwind", "DaisyUI"],
    date: "Jun. 2024 - Present",
    codeLink: "https://github.com/dahan8473/Club_Website",
  },
  {
    title: "Knight Quest",
    subtitle:
      "A souls-like video game created using Unity and C#. Group project for SE2250 Software Construction course.",
    images: [project3_1, project3_2, project3_3, project3_4],
    techStack: ["Unity", "C#"],
    date: "Mar. 2024 - Apr. 2024",
    liveLink:
      "https://play.unity.com/en/games/54395d65-3d5e-4e40-900e-b45b1a383e6d/knight-quest",
    codeLink: "https://www.youtube.com/watch?v=oa0dh6nji3c",
  },
  {
    title: "Disaster Tracker",
    subtitle:
      "A web app built in 7 hours for the Western Engineering Competition 2024, featuring rapid disaster data parsing, interactive maps, and dynamic filtering.",
    images: [project6_1, project6_2],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Leaflet.js",
      "Node.js",
      "Express.js",
    ],
    date: "Jan. 2024",
    codeLink: "https://github.com/EthanL818/WEC2024",
  },
  {
    title: "Gundam Search",
    subtitle:
      "A Python powered web-scraping desktop application designed to assist when searching for Gunpla deals.",
    images: [project4_1, project4_2, project4_3],
    techStack: ["Python", "PyQt5", "BeautifulSoup", "Selenium"],
    date: "Jan. 2024 - Feb. 2024",
    codeLink: "https://github.com/EthanL818/gundam-search",
  },
  {
    title: "In English Please",
    subtitle:
      "A full-stack application designed for converting intricate ingredients to simpler terminology via image capture. Group project for Hack Western X.",
    images: [project2_1, project2_4, project2_2, project2_3],
    techStack: ["React", "Node.js", "Express.js", "Google Cloud Vision API"],
    date: "Nov. 2023",
    codeLink: "https://github.com/in-english-please",
    liveLink: "https://devpost.com/software/in-english-please",
  },
  {
    title: "Gamefolio",
    subtitle:
      "A full-stack application designed for storing a portfolio with all your favorite games.",
    images: [project7_1],
    techStack: [
      "EJS",
      "CSS",
      "JavaScript",
      "IGDB API",
      "Node.js",
      "Express.js",
    ],
    date: "May 2023 - Aug. 2023",
    codeLink: "https://github.com/EthanL818/gamefolio",
  },
];
