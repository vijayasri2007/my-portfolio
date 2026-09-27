"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Server,
  Globe,
  Boxes,
  GitBranch,
  Languages,
  Terminal,
  Cpu,
} from "lucide-react";

const skills = [
  {
    name: "Java Programming",
    description: "Object-oriented programming, problem solving and application development.",
    icon: Code2,
    category: "Programming",
    level: "Intermediate",
  },
  {
    name: "C Programming",
    description: "Programming fundamentals, logic building and data structures.",
    icon: Terminal,
    category: "Programming",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    description: "Backend development, APIs and server-side JavaScript.",
    icon: Server,
    category: "Backend",
    level: "Learning",
  },
  {
    name: "Next.js",
    description: "Modern React-based web applications and full-stack development.",
    icon: Boxes,
    category: "Web",
    level: "Learning",
  },
  {
    name: "HTML & CSS",
    description: "Responsive layouts, semantic HTML and modern UI styling.",
    icon: Globe,
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "SQL",
    description: "Database queries, data management and relational databases.",
    icon: Database,
    category: "Database",
    level: "Intermediate",
  },
  {
    name: "OOP",
    description: "Classes, objects, inheritance, polymorphism and encapsulation.",
    icon: Cpu,
    category: "Core Concept",
    level: "Intermediate",
  },
  {
    name: "Cloud Computing",
    description: "Understanding cloud concepts, services and application deployment.",
    icon: Cloud,
    category: "Cloud",
    level: "Learning",
  },
  {
    name: "DevOps",
    description: "CI/CD concepts, development workflows and deployment practices.",
    icon: GitBranch,
    category: "DevOps",
    level: "Learning",
  },
  {
    name: "Japanese",
    description: "JLPT N5 certified with continued Japanese language learning.",
    icon: Languages,
    category: "Language",
    level: "JLPT N5",
  },
];

const categoryIcons = {
  Programming: Code2,
  Backend: Server,
  Web: Globe,
  Frontend: Globe,
  Database: Database,
  "Core Concept": Cpu,
  Cloud: Cloud,
  DevOps: GitBranch,
  Language: Languages,
};

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute -left-40 top-20" />
        <div className="glow-cyan absolute -right-40 bottom-20" />
        <div className="grid-background absolute inset-0 opacity-20" />
      </div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="section-label">
            <Code2 size={15} />
            <span>My Expertise</span>
          </div>

          <h2 className="section-heading">
            Technologies &{" "}
            <span className="gradient-text">Skills</span>
          </h2>

          <p className="mt-5 text-slate-400 text-base sm:text-lg leading-8 max-w-2xl">
            Technologies and concepts I&apos;m learning and using to build
            software applications, solve problems and explore modern
            development practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon || categoryIcons[skill.category];

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >
                <div className="glass-card h-full p-6 transition-all duration-500 group-hover:border-purple-400/20 group-hover:bg-white/[0.045]">
                  {/* Icon + category */}
                  <div className="flex items-start justify-between">
                    <div className="skill-icon">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-500">
                      {skill.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {skill.description}
                  </p>

                  {/* Level */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-600">
                      Current level
                    </span>

                    <span className="text-xs font-medium text-purple-300">
                      {skill.level}
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Technology Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card p-5 sm:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="shrink-0">
              <p className="text-sm font-semibold text-white">
                Currently expanding
              </p>
              <p className="text-xs text-slate-500 mt-1">
                My development toolkit
              </p>
            </div>

            <div className="h-px md:h-8 md:w-px bg-white/[0.08]" />

            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Node.js",
                "Next.js",
                "SQL",
                "DevOps",
                "Cloud",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 hover:text-white hover:border-purple-400/20 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}