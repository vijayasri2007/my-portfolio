"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-darkbg text-textlight">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Certifications Section */}
      <Certifications />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
