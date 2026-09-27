/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      colors: {
        portfolio: {
          background: "#050816",
          secondary: "#080d1d",
          surface: "#0b1123",
          hover: "#111a32",
          primary: "#8b5cf6",
          secondaryAccent: "#06b6d4",
          foreground: "#f8fafc",
          muted: "#94a3b8",
        },
      },

      boxShadow: {
        glow:
          "0 0 40px rgba(139, 92, 246, 0.18)",
        "glow-cyan":
          "0 0 40px rgba(6, 182, 212, 0.16)",
        "card":
          "0 20px 60px rgba(0, 0, 0, 0.25)",
      },

      backgroundImage: {
        "portfolio-gradient":
          "linear-gradient(135deg, #8b5cf6, #06b6d4)",

        "portfolio-radial":
          "radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 65%)",
      },

      animation: {
        "gradient-shift":
          "gradientShift 8s ease infinite",

        float:
          "float 5s ease-in-out infinite",

        "float-slow":
          "float 7s ease-in-out infinite",

        "pulse-glow":
          "pulseGlow 3s ease-in-out infinite",

        "spin-slow":
          "spin 12s linear infinite",
      },

      keyframes: {
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseGlow: {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};