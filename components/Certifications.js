"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Maximize2,
  X,
} from "lucide-react";

const certificates = [
  "/cert1.jpeg",
  "/cert2.jpeg",
  "/cert3.jpeg",
  "/cert4.jpeg",
  "/cert5.jpeg",
  "/cert6.jpeg",
  "/cert7.jpeg",
  "/cert8.jpeg",
  "/cert9.jpeg",
  "/cert10.jpeg",
];

export default function Certifications() {
  const scrollRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = 360;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="section relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute top-10 left-1/4 opacity-20" />
        <div className="glow-cyan absolute bottom-10 right-1/4 opacity-20" />
      </div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-label">ACHIEVEMENTS</span>

          <h2>
            My <span className="gradient-text">Certifications</span>
          </h2>

          <p>
            A collection of certifications and learning milestones from my
            technical journey.
          </p>
        </motion.div>

        {/* Certificate Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="skill-icon">
              <Award size={22} />
            </div>

            <div>
              <p className="text-white font-semibold">
                Learning Milestones
              </p>

              <p className="text-sm text-[var(--muted)]">
                {certificates.length} certificates
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous certificates"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] text-white flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400/30 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next certificates"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] text-white flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Certificate Carousel */}
        <div className="relative">
          {/* Left gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Right gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none hidden md:block" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.08, 0.5),
                }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-[280px] sm:w-[330px] lg:w-[370px] snap-start"
              >
                <div className="glass-card rounded-2xl p-4 group h-full">
                  {/* Certificate image */}
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-black/20">
                    <Image
                      src={certificate}
                      alt={`Certificate ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 330px, 370px"
                      className="object-contain transition duration-700 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCertificate(certificate)
                        }
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition"
                      >
                        <Maximize2 size={16} />
                        View Certificate
                      </button>
                    </div>

                    {/* Number */}
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card information */}
                  <div className="pt-4 px-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[var(--secondary)] font-semibold">
                          Achievement
                        </p>

                        <h3 className="mt-1 text-white font-semibold">
                          Certificate {index + 1}
                        </h3>
                      </div>

                      <div className="skill-icon w-9 h-9 min-w-9">
                        <Award size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-5">
          <p className="text-xs text-[var(--muted)]">
            ← Scroll to explore certificates →
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-card rounded-2xl p-3 md:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-black border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition"
              >
                <X size={20} />
              </button>

              {/* Large image */}
              <div className="relative w-full h-[60vh] md:h-[75vh]">
                <Image
                  src={selectedCertificate}
                  alt="Certificate preview"
                  fill
                  sizes="90vw"
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}