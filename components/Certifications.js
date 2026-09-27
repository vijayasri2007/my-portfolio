"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications() {
  const certificates = [
    "/cert1.jpg",
    "/cert2.jpg",
    "/cert3.jpg",
    "/cert4.jpg",
    "/cert5.jpg",
    "/cert6.jpg",
    "/cert7.jpg",
    "/cert8.jpg",
    "/cert9.jpg",
    "/cert10.jpg",
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section
      id="certifications"
      className="relative bg-[var(--background)] p-12 w-full overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-accent text-center mb-10">
        Certifications
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-accent text-[var(--background)] p-2 rounded-full shadow-lg hover:bg-teal-700 z-10 transition"
      >
        ◀
      </button>

      {/* Certificates Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 scroll-smooth overflow-x-auto no-scrollbar"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-slate-900/70 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <Image
              src={cert}
              alt={`Certificate ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg shadow-md hover:shadow-xl transition"
            />
            <p className="text-sm text-accent mt-2">
              Certificate {index + 1}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent text-[var(--background)] p-2 rounded-full shadow-lg hover:bg-teal-700 z-10 transition"
      >
        ▶
      </button>
    </section>
  );
}
