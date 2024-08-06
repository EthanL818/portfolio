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
import project5_2 from "../assets/project-5-2.png";

import project6_1 from "../assets/project-6.png";
import project6_2 from "../assets/project-6-2.png";

import project7_1 from "../assets/project-7.png";

import project8_1 from "../assets/project-8.png";
import project8_2 from "../assets/project-8-2.png";
import project8_3 from "../assets/project-8-3.png";
import project8_4 from "../assets/project-8-4.png";
import project8_5 from "../assets/project-8-5.png";

import project9_1 from "../assets/project-9.png";
import project9_2 from "../assets/project-9-2.png";
import project9_3 from "../assets/project-9-3.png";
import project9_4 from "../assets/project-9-4.png";
import project9_5 from "../assets/project-9-5.png";

export const NAVIGATION_LINKS = [
  { label: <FaHouseChimney />, href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const PROJECTLIST = [
  {
    title: "Inclusee",
    subtitle:
      "An Adobe Express add-on, created for HackThe6ix 2024, to help users create accessible documents with color contrast checks and dyslexia-friendly text suggestions.",
    media: [
      { type: "image", url: project9_1 },
      { type: "image", url: project9_5 },
      { type: "image", url: project9_2 },
      { type: "image", url: project9_3 },
      { type: "image", url: project9_4 },
    ],
    techStack: ["React", "Adobe Express SDK", "Node.js", "JavaScript"],
    date: "Aug. 2024",
    codeLink: "https://github.com/MAIDENMI/Inclusee",
    liveLink: "https://devpost.com/software/inclusee",
  },
  {
    title: "Recipe Crafter",
    subtitle:
      "A full-stack web application designed for users to input their pantry items, and receive student-friendly healthy recipes based on their ingredients.",
    media: [
      { type: "image", url: project8_1 },
      { type: "youtube", id: "m75qwsV0CPM" },
      { type: "image", url: project8_2 },
      { type: "image", url: project8_3 },
      { type: "image", url: project8_4 },
      { type: "image", url: project8_5 },
    ],
    techStack: ["React", "Next.js", "Firebase", "OpenAI API"],
    date: "Jul. 2024",
    codeLink: "https://github.com/EthanL818/pantry-app",
    liveLink: "https://recipe-crafter-nine.vercel.app/",
  },
  {
    title: "devCircle",
    subtitle:
      "A full-stack digital platform designed for students to share their projects, and receive constructive feedback.",
    media: [
      { type: "image", url: project1_1 },
      { type: "image", url: project1_2 },
      { type: "image", url: project1_3 },
      { type: "image", url: project1_4 },
    ],
    techStack: ["React", "Next.js", "Firebase", "GitHub API"],
    date: "Jun. 2024 - Present",
    codeLink: "https://github.com/EthanL818/dev-circle",
    liveLink: "https://dev-circle-liard.vercel.app/",
  },
  {
    title: "Western TSI Website",
    subtitle:
      "A website designed for the Western Tech for Social Impact club, showcasing their team, projects, and upcoming events.",
    media: [
      { type: "image", url: project5_1 },
      { type: "image", url: project5_2 },
    ],
    techStack: ["React", "Tailwind", "DaisyUI"],
    date: "Jun. 2024 - Present",
    codeLink: "https://github.com/dahan8473/Club_Website",
  },
  {
    title: "Knight Quest",
    subtitle:
      "A souls-like video game created using Unity and C#. Group project for SE2250 Software Construction course.",
    media: [
      { type: "image", url: project3_1 },
      { type: "youtube", id: "oa0dh6nji3c" },
      { type: "image", url: project3_2 },
      { type: "image", url: project3_3 },
      { type: "image", url: project3_4 },
      { type: "youtube", id: "oa0dh6nji3c" },
    ],
    techStack: ["Unity", "C#"],
    date: "Mar. 2024 - Apr. 2024",
    liveLink:
      "https://play.unity.com/en/games/54395d65-3d5e-4e40-900e-b45b1a383e6d/knight-quest",
    codeLink: "https://github.com/your-knight-quest-repo", // You may want to update this if there's a specific repo
  },
  {
    title: "Disaster Tracker",
    subtitle:
      "A web app built in 7 hours for the Western Engineering Competition 2024, featuring rapid disaster data parsing, interactive maps, and dynamic filtering.",
    media: [
      { type: "image", url: project6_1 },
      { type: "image", url: project6_2 },
    ],
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
    media: [
      { type: "image", url: project4_1 },
      { type: "image", url: project4_2 },
      { type: "image", url: project4_3 },
    ],
    techStack: ["Python", "PyQt5", "BeautifulSoup", "Selenium"],
    date: "Jan. 2024 - Feb. 2024",
    codeLink: "https://github.com/EthanL818/gundam-search",
  },
  {
    title: "In English Please",
    subtitle:
      "A full-stack application designed for converting intricate ingredients to simpler terminology via image capture. Group project for Hack Western X.",
    media: [
      { type: "image", url: project2_1 },
      { type: "image", url: project2_4 },
      { type: "image", url: project2_2 },
      { type: "image", url: project2_3 },
    ],
    techStack: ["React", "Node.js", "Express.js", "Google Cloud Vision API"],
    date: "Nov. 2023",
    codeLink: "https://github.com/in-english-please",
    liveLink: "https://devpost.com/software/in-english-please",
  },
  {
    title: "Gamefolio",
    subtitle:
      "A full-stack application designed for storing a portfolio with all your favorite games.",
    media: [{ type: "image", url: project7_1 }],
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
