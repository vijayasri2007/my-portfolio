"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Sparkles,
} from "lucide-react";

const techStack = [
  { name: "Java", icon: "☕" },
  { name: "React", icon: "⚛️" },
  { name: "SQL", icon: "🗄️" },
  { name: "Python", icon: "🐍" },
];

const floatingItems = [
  {
    icon: Code2,
    title: "Java",
    subtitle: "Development",
    position: "top-4 -left-8 md:-left-16",
    delay: 0,
  },
  {
    icon: Database,
    title: "SQL",
    subtitle: "Database",
    position: "top-28 -right-10 md:-right-20",
    delay: 0.4,
  },
  {
    icon: Layers3,
    title: "Full Stack",
    subtitle: "Development",
    position: "bottom-16 -left-10 md:-left-20",
    delay: 0.8,
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero relative overflow-hidden">
      {/* Background */}
      <div className="hero-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute -top-32 -left-32" />
        <div className="glow-cyan absolute top-1/3 -right-40" />

        <div className="grid-background absolute inset-0 opacity-30" />

        {/* Decorative particles */}
        <motion.div
          className="absolute top-[18%] left-[12%] h-2 w-2 rounded-full bg-purple-400"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute top-[30%] right-[18%] h-1.5 w-1.5 rounded-full bg-cyan-400"
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[35%] h-1.5 w-1.5 rounded-full bg-purple-300"
          animate={{
            x: [0, 20, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center py-28 lg:py-32">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md"
            >
              <span className="status-dot" />
              <span className="text-sm text-slate-300">
                Open to opportunities
              </span>
            </motion.div>

            {/* Small intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-purple-400 font-semibold tracking-wide mb-3"
            >
              Hi, I&apos;m Vijayasri Sakthivel 👋
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Building
              <br />

              <span className="gradient-text">
                Digital Experiences
              </span>

              <br />

              <span className="text-white">
                With Technology.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-7 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 text-slate-400"
            >
              Computer Science and Engineering student passionate about
              building practical and innovative software solutions using{" "}
              <span className="text-purple-300 font-medium">
                Java, SQL, Data Structures
              </span>{" "}
              and{" "}
              <span className="text-cyan-300 font-medium">
                Full Stack Development
              </span>
              .
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-9"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="primary-button inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="secondary-button inline-flex items-center gap-2"
              >
                Let&apos;s Connect
                <Sparkles size={17} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-3 mt-8"
            >
              <a
                href="https://github.com/vijayasri2007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10 transition-all"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/vijayasri-sakthivel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
                Technologies I work with
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm text-sm text-slate-300"
                  >
                    <span>{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="relative flex justify-center items-center min-h-[420px] lg:min-h-[560px]"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] rounded-full border border-purple-500/20 border-dashed"
            />

            {/* Second ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[390px] lg:h-[390px] rounded-full border border-cyan-400/10"
            />

            {/* Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-600/20 blur-[100px]" />

            {/* Profile Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="profile-ring">
                <div className="profile-image relative">
                  <Image
                    src="/profile.jpeg"
                    alt="Vijayasri Sakthivel"
                    fill
                    priority
                    sizes="(max-width: 768px) 260px, 320px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap glass-card px-5 py-3"
              >
                <p className="text-sm font-semibold text-white">
                  Vijayasri Sakthivel
                </p>
                <p className="text-xs text-slate-400 text-center mt-1">
                  CSE Student • Developer
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Cards */}
            {floatingItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 0.8 + item.delay,
                      duration: 0.5,
                    },
                    scale: {
                      delay: 0.8 + item.delay,
                      duration: 0.5,
                    },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    },
                  }}
                  className={`floating-card absolute ${item.position} z-20 hidden sm:flex items-center gap-3`}
                >
                  <div className="skill-icon !w-10 !h-10">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-0 right-0 md:right-4 glass-card px-4 py-3 hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="status-dot" />
                <span className="text-xs text-slate-300">
                  Currently learning
                </span>
              </div>

              <p className="text-sm font-medium text-white mt-1">
                Full Stack Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Explore
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={17} />
        </motion.div>
      </motion.a>
    </section>
  );
}