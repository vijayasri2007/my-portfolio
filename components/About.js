"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-darkbg text-textlight px-12 py-20 gap-12"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0"
      >
        <Image
          src="/profile.jpg" // replace with your actual profile image
          alt="Vijayasri Sakthivel"
          width={250}
          height={250}
          className="rounded-full shadow-lg border-4 border-tealaccent hover:scale-105 transform transition"
        />
      </motion.div>

      {/* Description + Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-accent mb-6">About Me</h2>
        <p className="text-lg text-textmuted leading-relaxed">
          I’m <span className="text-accent font-semibold">Vijayasri Sakthivel</span>, 
          a Computer Science and Engineering student at Kongunadu College of Engineering and Technology, Tamil Nadu.  
          With a current CGPA of <span className="text-accent">8.7/10</span>, I am driven by a passion for 
          <span className="text-accent"> problem-solving, logical thinking, and continuous learning</span>.
        </p>

        <p className="mt-6 text-lg text-textmuted leading-relaxed">
          My career objective is to contribute to innovative projects by applying my skills in 
          <span className="text-accent"> Java, SQL, Data Structures, and Full Stack Development</span>, 
          while growing into a versatile software engineer.
        </p>

        {/* Highlights */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-xl shadow-glow"
          >
            <h3 className="text-xl font-semibold text-accent mb-4">Strengths</h3>
            <ul className="space-y-2 text-textmuted">
              <li>✔ Problem-Solving and Logical Thinking</li>
              <li>✔ Adaptable and eager for continuous learning</li>
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl shadow-glow"
          >
            <h3 className="text-xl font-semibold text-accent mb-4">Languages</h3>
            <ul className="space-y-2 text-textmuted">
              <li>🌍 English</li>
              <li>🌍 Tamil</li>
            </ul>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 text-left"
        >
          <h3 className="text-2xl font-semibold text-accent mb-4">Education</h3>
          <ul className="space-y-4 text-textmuted">
            <li>
              🎓 B.E. Computer Science and Engineering — Kongunadu College of Engineering and Technology (2024–2028)  
              <span className="text-accent"> CGPA: 8.7/10</span>
            </li>
            <li>
              🎓 Higher Secondary Certificate — Government Higher Secondary School, Balasamudram (2024)  
              <span className="text-accent"> Percentage: 89.16%</span>
            </li>
            <li>
              🎓 SSLC — St. Mary’s High School, Thottiam (2022)  
              <span className="text-accent"> Percentage: 79.20%</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
