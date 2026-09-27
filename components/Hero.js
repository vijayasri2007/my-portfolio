"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-black via-gray-900 to-black text-white px-12"
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center md:text-left"
      >
        {/* 🔹 Profile Photo */}
        <Image
          src="/profile.jpeg" // ✅ use .jpeg since your file is saved like that
          alt="Vijayasri Sakthivel"
          width={180}
          height={180}
          className="rounded-full mx-auto md:mx-0 mb-6 border-4 border-purple-400 shadow-lg hover:scale-105 transform transition"
        />

        <p className="text-purple-400 font-semibold">Hi, I'm Vijayasri Sakthivel</p>
        <h1 className="text-5xl font-bold mt-2 leading-tight">
          B.E. Computer Science Student
        </h1>
        <p className="mt-4 text-gray-300">
          Driven Computer Science and Engineering student with strong skills in 
          <span className="text-purple-300 font-semibold"> Java, SQL, Data Structures, and Full Stack Development</span>.  
          Passionate about problem-solving, logical thinking, and continuous learning.  
          Seeking to contribute to innovative projects while growing into a versatile software engineer.
        </p>

        {/* Buttons */}
        <div className="space-x-4 mt-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            🚀 View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            🤝 Let's Connect
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.2 }}
        className="mt-12 md:mt-0"
      >
        <div className="relative w-72 h-72 flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute w-48 h-48 bg-purple-400 rounded-full blur-md"></div>
          <div className="relative text-center">
            <p className="text-lg font-semibold text-purple-300">Tech Stack</p>
            <div className="flex space-x-4 mt-4 text-3xl">
              <span title="Java">☕</span>
              <span title="C / OOP">💻</span>
              <span title="HTML / CSS / SQL">🌐</span>
              <span title="Python / Data Analytics">📊</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
