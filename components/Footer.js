"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vijayasri2007",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vijayasri-sakthivel/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:vijiyasri2007@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03050d]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute -top-40 left-1/4 opacity-15" />
        <div className="glow-cyan absolute -top-40 right-1/4 opacity-10" />
      </div>

      <div className="section-container relative z-10 py-14">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl font-bold text-white"
            >
              <span className="gradient-text">Vijayasri</span>
              <span>Sakthivel</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Computer Science student passionate about technology,
              problem-solving and building meaningful digital experiences.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  title={social.name}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Icon size={19} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <ArrowUp size={19} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-9 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">
              Vijayasri Sakthivel
            </span>
            . All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
            Designed & built with
            <Heart
              size={13}
              className="text-purple-400 fill-purple-400"
            />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}