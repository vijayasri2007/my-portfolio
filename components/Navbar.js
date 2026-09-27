"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 pt-4"
      >
        <nav
          className={`
            mx-auto max-w-7xl
            transition-all duration-500
            rounded-2xl
            border
            ${
              scrolled
                ? "border-white/10 bg-[#080d1d]/85 shadow-2xl shadow-purple-950/20 backdrop-blur-2xl"
                : "border-white/[0.06] bg-white/[0.025] backdrop-blur-xl"
            }
          `}
        >
          <div className="h-[68px] px-5 sm:px-7 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              {/* Logo Icon */}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/20">
                <span className="text-lg font-bold text-white">V</span>

                <span className="absolute inset-0 rounded-xl border border-white/20" />
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-white leading-none">
                  Vijayasri
                </p>

                <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-slate-500">
                  Portfolio
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative px-4 py-2.5
                      rounded-xl
                      text-sm
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.05]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-purple-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/vijayasri2007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
              >
                <Github size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vijayasri-sakthivel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
              >
                <Linkedin size={17} />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/10 transition-all hover:-translate-y-0.5 hover:shadow-purple-500/25"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-purple-400/30 hover:text-white"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="overflow-hidden border-t border-white/[0.06]"
              >
                <div className="p-4 space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          w-full flex items-center justify-between
                          rounded-xl px-4 py-3
                          text-left text-sm
                          transition-all
                          ${
                            isActive
                              ? "bg-purple-500/10 text-white border border-purple-400/10"
                              : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                          }
                        `}
                      >
                        <span>{item.name}</span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
                        )}
                      </motion.button>
                    );
                  })}

                  {/* Mobile Resume */}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white"
                  >
                    <Download size={16} />
                    Download Resume
                    <ArrowUpRight size={15} />
                  </a>

                  {/* Mobile Socials */}
                  <div className="flex gap-2 pt-3">
                    <a
                      href="https://github.com/vijayasri2007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-sm text-slate-400 hover:text-white"
                    >
                      <Github size={16} />
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/vijayasri-sakthivel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-sm text-slate-400 hover:text-white"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Prevent content from hiding behind fixed navbar */}
      <div className="h-4 md:h-5" />
    </>
  );
}