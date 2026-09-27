"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vijayasri2007",
    icon: Github,
    description: "View my projects",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vijayasri-sakthivel/",
    icon: Linkedin,
    description: "Connect with me",
  },
  {
    name: "Email",
    href: "mailto:vijiyasri2007@gmail.com",
    icon: Mail,
    description: "Send me an email",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in all the fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      setError("Please write a message with at least 10 characters.");
      return;
    }

    try {
      setIsSubmitting(true);

      /*
       * IMPORTANT:
       * This is ready for a real API/email service.
       *
       * Example:
       *
       * const response = await fetch("/api/contact", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify({
       *     name,
       *     email,
       *     message,
       *   }),
       * });
       *
       * if (!response.ok) {
       *   throw new Error("Failed to send message");
       * }
       *
       * For now, we keep the frontend functional without
       * pretending that an email was actually delivered.
       */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setSuccess(
        "Your message is ready to be connected to the email service."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-purple absolute -top-40 left-1/4 opacity-20" />
        <div className="glow-cyan absolute -bottom-40 right-1/4 opacity-20" />
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
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p>
            Have a project idea, opportunity or simply want to say hello?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 max-w-6xl mx-auto">
          {/* Left Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="glass-card rounded-3xl p-7 md:p-9 h-full">
              <span className="section-label">CONTACT</span>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Let&apos;s build something{" "}
                <span className="gradient-text">meaningful.</span>
              </h3>

              <p className="mt-5 text-[var(--foreground-secondary)] leading-7">
                I&apos;m always interested in learning, collaborating on
                projects and exploring opportunities where I can apply my
                technical skills.
              </p>

              {/* Availability */}
              <div className="mt-8 flex items-center gap-3">
                <span className="status-dot" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Open to opportunities
                  </p>

                  <p className="text-xs text-[var(--muted)] mt-1">
                    Projects • Internships • Collaboration
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="mt-8 flex items-center gap-4">
                <div className="skill-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-[var(--muted)]">Location</p>

                  <p className="text-white font-medium">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:vijiyasri2007@gmail.com"
                className="mt-5 flex items-center gap-4 group"
              >
                <div className="skill-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-[var(--muted)]">Email</p>

                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    vijiyasri2007@gmail.com
                  </p>
                </div>
              </a>

              {/* Social links */}
              <div className="mt-10 pt-7 border-t border-white/10">
                <p className="text-sm font-medium text-white mb-4">
                  Find me online
                </p>

                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={
                          social.name === "Email" ? undefined : "_blank"
                        }
                        rel={
                          social.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="group flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={19}
                            className="text-[var(--secondary)]"
                          />

                          <div>
                            <p className="text-sm font-medium text-white">
                              {social.name}
                            </p>

                            <p className="text-xs text-[var(--muted)]">
                              {social.description}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="text-[var(--muted)] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-7 md:p-9"
          >
            <div className="mb-7">
              <span className="section-label">SEND A MESSAGE</span>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Start a conversation
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground-secondary)] mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground-secondary)] mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--foreground-secondary)] mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea, project or opportunity..."
                  rows={7}
                  className="contact-input resize-none"
                />

                <div className="flex justify-end mt-2">
                  <span className="text-xs text-[var(--muted)]">
                    {formData.message.length} characters
                  </span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3"
                >
                  <AlertCircle
                    size={18}
                    className="text-red-400 mt-0.5 flex-shrink-0"
                  />

                  <p className="text-sm text-red-300">{error}</p>
                </motion.div>
              )}

              {/* Success */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-400 mt-0.5 flex-shrink-0"
                  />

                  <p className="text-sm text-green-300">{success}</p>
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="primary-button w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-[var(--muted)]">
                I&apos;ll get back to you as soon as possible.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}