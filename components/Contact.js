"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠ Please fill in all fields before submitting.");
      return;
    }

    // Simulate success (replace with backend/email API later)
    setSuccess("✅ Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-darkbg p-12 w-full">
      <h2 className="text-3xl font-bold text-tealaccent text-center mb-10">
        📬 Contact Me
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-5 bg-slate-900/60 backdrop-blur-md p-6 rounded-lg shadow-xl"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-slate-800 text-textlight 
                     focus:outline-none focus:ring-2 focus:ring-tealaccent"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded bg-slate-800 text-textlight 
                     focus:outline-none focus:ring-2 focus:ring-tealaccent"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded bg-slate-800 text-textlight 
                     focus:outline-none focus:ring-2 focus:ring-tealaccent"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-tealaccent text-darkbg rounded 
                     hover:bg-teal-700 transition transform hover:scale-105 shadow-lg font-semibold"
        >
          ✉ Send Message
        </button>

        {/* Error / Success Messages */}
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-400 text-sm mt-2">{success}</p>}
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mt-10">
        <a
          href="https://github.com/viji"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-tealaccent hover:text-teal-700 transition-transform hover:scale-110"
        >
          💻 <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/viji"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-tealaccent hover:text-teal-700 transition-transform hover:scale-110"
        >
          🔗 <span>LinkedIn</span>
        </a>
        <a
          href="mailto:vijiyasri@example.com"
          className="flex items-center gap-2 text-tealaccent hover:text-teal-700 transition-transform hover:scale-110"
        >
          📧 <span>Email</span>
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-400 mt-6">
        I’ll get back to you as soon as possible 🚀
      </p>
    </section>
  );
}
