import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vijayasri Sakthivel Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        {/* 🔹 Navbar */}
        <Navbar />

        {/* 🔹 Page Content */}
        <main className="flex-1 mt-20">{children}</main>

        {/* 🔹 Footer */}
        <footer className="bg-slate-900 text-center py-4 text-[var(--accent)]">
          © {new Date().getFullYear()} Vijayasri Sakthivel — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
