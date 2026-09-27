"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Full Stack Development", level: 80 },
    { name: "Flutter", level: 60 },
    { name: "Cloud Computing", level: 50 },
    { name: "Java Programming", level: 40 },
    { name: "C Programming", level: 40 },
    { name: "Japanese Language (JLPT N5)", level: 70 },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <h2 className="text-3xl font-bold text-accent mb-12 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-slate-900/70 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-accent">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="bg-accent h-4 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
