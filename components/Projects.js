"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Disaster Communication Dashboard",
      description:
        "A real-time dashboard for emergency communication using backend APIs. Built with full-stack technologies to ensure reliable alerts and coordination during disasters.",
      link: "https://github.com/viji/disaster-dashboard",
    },
    {
      title: "AI-Based Expense Approval Automation",
      description:
        "An intelligent system that automates expense approval workflows using AI. Designed to reduce manual effort, improve accuracy, and speed up decision-making in financial processes.",
      link: "https://github.com/viji/ai-expense-approval", // update with your actual repo link later
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <h2 className="text-3xl font-bold text-accent mb-12 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-slate-900/70 backdrop-blur-md rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-semibold text-tealaccent mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-tealaccent text-darkbg rounded hover:bg-teal-700 transition"
            >
              🔗 View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
