"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Code2,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

const projects = [
  {
    title: "SmartLegacy",
    subtitle: "Digital Asset & Inheritance Management",
    category: "AI + Smart Contracts",
    description:
      "An AI-driven digital asset and inheritance management system designed to organize assets, important documents, nominees, and inheritance information in one secure platform.",
    icon: ShieldCheck,
    number: "01",
    gradient: "from-purple-500/20 via-purple-500/5 to-cyan-500/20",
    tags: ["AI", "Smart Contracts", "Digital Assets"],
    featured: true,
    link: "",
  },
  {
    title: "AI-Based Expense Approval Automation",
    subtitle: "Intelligent Workflow Automation",
    category: "AI + Automation",
    description:
      "An AI-powered workflow automation system that processes expense requests, routes approvals, sends notifications, and supports decisions based on expense value.",
    icon: BrainCircuit,
    number: "02",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-purple-500/20",
    tags: ["AI", "n8n", "Automation"],
    featured: true,
    link: "",
  },
  {
    title: "Disaster Communication Without Internet",
    subtitle: "Edge Communication System",
    category: "Mobile + Edge Computing",
    description:
      "An emergency communication concept designed to support SOS communication without internet connectivity using Bluetooth and Wi-Fi Direct with store-and-forward messaging.",
    icon: Smartphone,
    number: "03",
    gradient: "from-blue-500/20 via-blue-500/5 to-purple-500/20",
    tags: ["Android", "Edge Computing", "Bluetooth"],
    featured: false,
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute -top-40 -right-40" />
        <div className="glow-cyan absolute bottom-0 -left-40" />
        <div className="grid-background absolute inset-0 opacity-20" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="section-label">
            <Code2 size={15} />
            <span>Featured Work</span>
          </div>

          <h2 className="section-heading">
            Projects I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>

          <p className="mt-5 text-slate-400 text-base sm:text-lg leading-8 max-w-2xl">
            A collection of projects where I explore software development,
            artificial intelligence, automation, edge computing, and practical
            problem-solving.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-7">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className={`
                  group relative overflow-hidden rounded-3xl
                  border border-white/[0.08]
                  bg-[#0a1020]/80
                  backdrop-blur-xl
                  shadow-xl shadow-black/10
                  ${
                    project.featured
                      ? "lg:first:col-span-1"
                      : ""
                  }
                `}
              >
                {/* Gradient glow */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br ${project.gradient}
                    opacity-40 group-hover:opacity-70
                    transition-opacity duration-500
                  `}
                />

                {/* Top visual area */}
                <div className="relative h-52 overflow-hidden border-b border-white/[0.06]">
                  {/* Abstract grid */}
                  <div className="absolute inset-0 grid-background opacity-40" />

                  {/* Main glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.25, 0.4, 0.25],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"
                  />

                  {/* Center icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative h-24 w-24 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                      <Icon
                        size={42}
                        strokeWidth={1.5}
                        className="text-purple-300"
                      />

                      <div className="absolute inset-0 rounded-3xl ring-1 ring-purple-400/10" />
                    </div>
                  </motion.div>

                  {/* Project number */}
                  <div className="absolute top-5 left-5">
                    <span className="text-xs font-mono text-slate-500">
                      PROJECT / {project.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-5 right-5">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-slate-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-7">
                  <p className="text-sm text-purple-400 font-medium mb-2">
                    {project.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/[0.07]">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors"
                      >
                        <Github size={17} />
                        View Repository
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                        <Sparkles size={16} />
                        Project Showcase
                      </span>
                    )}

                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-purple-400/30 group-hover:text-purple-300 transition-all"
                    >
                      {project.link ? (
                        <ExternalLink size={16} />
                      ) : (
                        <ArrowUpRight size={17} />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-400/20 transition-colors duration-500" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md p-5 sm:p-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-purple-500/10 border border-purple-400/10 flex items-center justify-center">
              <Sparkles size={20} className="text-purple-300" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                More projects are coming
              </p>
              <p className="text-xs text-slate-500 mt-1">
                I&apos;m continuously learning and building new ideas.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/vijayasri2007"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button inline-flex items-center gap-2 whitespace-nowrap"
          >
            <Github size={17} />
            Explore GitHub
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}