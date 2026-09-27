"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "certifications", "projects", "skills", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `hover:text-tealaccent transition ${
      activeSection === id ? "text-tealaccent font-semibold" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkbg/90 backdrop-blur-md text-textlight shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-tealaccent hover:text-teal-400 transition"
        >
          Viji Portfolio
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#certifications" className={linkClass("certifications")}>Certifications</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-tealaccent focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-darkbg px-6 pb-6 space-y-4 text-center">
          <a href="#home" onClick={() => setIsOpen(false)} className={linkClass("home")}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className={linkClass("about")}>About</a>
          <a href="#certifications" onClick={() => setIsOpen(false)} className={linkClass("certifications")}>Certifications</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className={linkClass("projects")}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className={linkClass("skills")}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className={linkClass("contact")}>Contact</a>
        </div>
      )}
    </nav>
  );
}
