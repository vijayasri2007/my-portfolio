"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Brain,
  Database,
  Rocket,
  GraduationCap,
  Languages,
  Lightbulb,
  Target,
} from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I enjoy breaking complex problems into simple and practical solutions.",
  },
  {
    icon: Code2,
    title: "Developer Mindset",
    description:
      "Building my skills in Java, SQL, Data Structures and Full Stack Development.",
  },
  {
    icon: Brain,
    title: "Continuous Learner",
    description:
      "Always exploring new technologies and improving my technical knowledge.",
  },
  {
    icon: Rocket,
    title: "Future Goal",
    description:
      "Aspiring to grow into a versatile software engineer and build meaningful products.",
  },
];

const education = [
  {
    year: "2024 — 2028",
    title: "B.E. Computer Science and Engineering",
    institution: "Kongunadu College of Engineering and Technology",
    result: "CGPA: 8.7 / 10",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Higher Secondary Certificate",
    institution: "Government Higher Secondary School, Balasamudram",
    result: "Percentage: 89.16%",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "SSLC",
    institution: "St. Mary's High School, Thottiam",
    result: "Percentage: 79.20%",
    icon: GraduationCap,
  },
];

const skills = [
  { name: "Java", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Data Structures", icon: Brain },
  { name: "Full Stack Development", icon: Rocket },
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute top-20 -left-40 opacity-30" />
        <div className="glow-cyan absolute bottom-20 -right-40 opacity-20" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-label">GET TO KNOW ME</span>

          <h2>
            About <span className="gradient-text">Me</span>
          </h2>

          <p>
            A little about my journey, mindset and what drives me to keep
            learning and building.
          </p>
        </motion.div>

        {/* Main About Grid */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          {/* Profile Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-purple-500/20 to-cyan-400/20 blur-2xl" />

              {/* Image Card */}
              <div className="glass-card relative p-3 rounded-[2rem]">
                <div className="relative overflow-hidden rounded-[1.5rem] min-h-[460px]">
                   <Image
               
                    src="/profile.jpeg"
                    alt="Vijayasri Sakthivel"
                    width={420}
                    height={500}
                    priority
                    className="w-full max-w-[380px] h-[460px] object-cover object-top transition duration-700 hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                  {/* Bottom label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="glass-card px-4 py-3 rounded-xl backdrop-blur-xl">
                      <p className="text-sm text-[var(--muted)]">
                        Computer Science & Engineering
                      </p>

                      <p className="text-lg font-semibold text-white">
                        Vijayasri Sakthivel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating experience card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="floating-card absolute -right-8 top-10 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="skill-icon">
                    <Code2 size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--muted)]">Currently</p>
                    <p className="font-semibold text-white">Learning & Building</p>
                  </div>
                </div>
              </motion.div>

              {/* CGPA card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="floating-card absolute -left-8 bottom-16 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="skill-icon">
                    <Target size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--muted)]">Academic</p>
                    <p className="font-semibold text-white">8.7 / 10 CGPA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--secondary)]">
              WHO I AM
            </span>

            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              Turning curiosity into{" "}
              <span className="gradient-text">technical skills.</span>
            </h3>

            <div className="mt-6 space-y-5 text-[var(--foreground-secondary)] leading-8">
              <p>
                I'm{" "}
                <span className="text-white font-semibold">
                  Vijayasri Sakthivel
                </span>
                , a Computer Science and Engineering student at Kongunadu
                College of Engineering and Technology, Tamil Nadu.
              </p>

              <p>
                I am passionate about{" "}
                <span className="gradient-text font-semibold">
                  problem-solving, logical thinking and continuous learning
                </span>
                . I enjoy understanding how technology works and transforming
                ideas into practical solutions.
              </p>

              <p>
                My current focus is strengthening my foundation in{" "}
                <span className="text-white font-medium">
                  Java, SQL, Data Structures and Full Stack Development
                </span>
                , while exploring modern technologies and building projects.
              </p>
            </div>

            {/* Skill Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-[var(--foreground-secondary)] backdrop-blur-sm transition"
                  >
                    <Icon size={16} className="text-[var(--secondary)]" />
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="section-label">MY APPROACH</span>

            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
              What <span className="gradient-text">drives me</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="glass-card group p-6 rounded-2xl"
                >
                  <div className="skill-icon mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education + Languages */}
        <div className="mt-24 grid lg:grid-cols-[1.5fr_0.7fr] gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-7 md:p-9"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="skill-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <span className="section-label">ACADEMIC JOURNEY</span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Education
                </h3>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent" />

              <div className="space-y-8">
                {education.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.12,
                      }}
                      className="relative pl-10"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border border-purple-400/40 bg-[#080d1d] flex items-center justify-center">
                        <Icon size={12} className="text-purple-400" />
                      </div>

                      <span className="text-xs font-semibold tracking-wider text-[var(--secondary)]">
                        {item.year}
                      </span>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {item.institution}
                      </p>

                      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                        {item.result}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card rounded-3xl p-7 md:p-9 h-fit"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="skill-icon">
                <Languages size={22} />
              </div>

              <div>
                <span className="section-label">COMMUNICATION</span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Languages
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">English</span>
                  <span className="text-sm text-[var(--muted)]">
                    Professional
                  </span>
                </div>

                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">Tamil</span>
                  <span className="text-sm text-[var(--muted)]">
                    Native
                  </span>
                </div>

                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Small quote */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm leading-6 text-[var(--muted)] italic">
                "Learn continuously. Build intentionally. Grow consistently."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}