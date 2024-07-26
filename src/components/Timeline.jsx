import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "July 2024 - Sept 2024",
    title: "Software Engineering Fellow @ Headstarter.ai",
    description:
      "Honed software engineering skills by rapidly building and shipping 5 AI projects in a 7-week fellowship at Headstarter.ai.",
    link: "https://headstarter.co/",
  },
  {
    date: "May 2024 - June 2024",
    title: 'Completion of the "Next.js Firebase" course on Fireship.io',
    description:
      "Completed course on building a full-stack application with Next.js and Firebase, using it as a foundation to develop devCircle.",
    link: "https://fireship.io/courses/react-next-firebase/",
  },
  {
    date: "May 2024",
    title: "Chatbot Developer @ ITEK-Metallic Solutions",
    description:
      "Optimized chatbot performance through continuous refinement and training, resulting in high user satisfaction and reduced need for human intervention.",
  },
  {
    date: "May 2023 - Sept. 2023",
    title:
      'Completion of "The Complete 2023 Web Development Bootcamp" on Udemy',
    description:
      "Completed full-stack web development course over Summer 2023.",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    date: "May 2023 - Aug. 2023",
    title: "Product Effectiveness Analyst @ RBC Insurance",
    description:
      "Performed user acceptance testing within Agile software development environment on various digital e-Applications, managing bug testing, tracking, and resolution via the Jira platform.",
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-l-4 border-purple-500 dark:border-purple-700">
      {timelineData.map((item, index) => (
        <li key={index} className="mb-12 ml-8">
          <div className="absolute w-4 h-4 bg-purple-500 rounded-full mt-1.5 -left-2.5 border-4 border-gray"></div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <time className="mb-2 text-lg font-medium leading-none text-purple-600 dark:text-purple-400">
              {item.date}
            </time>
            <h3 className="text-2xl font-semibold text-white dark:text-white">
              {item.title}
            </h3>
            <p className="mb-4 text-lg font-normal text-gray-300 dark:text-gray-300">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-small text-gray-900 bg-purple-200 border border-gray-200 rounded-lg hover:bg-purple-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-purple-700 dark:text-gray-200 dark:border-purple-500 dark:hover:text-white dark:hover:bg-purple-800 dark:focus:ring-purple-800"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </motion.div>
        </li>
      ))}
    </ol>
  );
}
