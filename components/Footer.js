export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-[var(--foreground)] py-8 mt-10 border-t border-slate-700 text-center">
      {/* Social Links */}
      <div className="flex justify-center gap-10 mb-6">
        <a
          href="mailto:vijiyasri@example.com"
          className="flex items-center gap-2 text-accent hover:text-teal-400 transition-transform hover:scale-110"
        >
          📧 <span>Email</span>
        </a>
        <a
          href="https://github.com/viji"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:text-teal-400 transition-transform hover:scale-110"
        >
          💻 <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/viji"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:text-teal-400 transition-transform hover:scale-110"
        >
          🔗 <span>LinkedIn</span>
        </a>
      </div>

      {/* Divider */}
      <div className="w-24 h-1 bg-tealaccent mx-auto mb-4 rounded-full"></div>

      {/* Copyright */}
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} <span className="text-accent font-semibold">Vijayasri Sakthivel</span>. All rights reserved.
      </p>
    </footer>
  );
}
