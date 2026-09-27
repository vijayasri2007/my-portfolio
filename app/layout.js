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
  title: "Vijayasri Sakthivel | Computer Science Student",
  description:
    "Vijayasri Sakthivel's professional portfolio — Computer Science and Engineering student skilled in Java, SQL, Data Structures, Full Stack Development, Cloud Computing and AI.",
  keywords: [
    "Vijayasri Sakthivel",
    "Computer Science Student",
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "SQL",
    "Data Structures",
    "Cloud Computing",
    "AI",
    "Portfolio",
  ],
  authors: [
    {
      name: "Vijayasri Sakthivel",
    },
  ],
  creator: "Vijayasri Sakthivel",
  openGraph: {
    title: "Vijayasri Sakthivel | Portfolio",
    description:
      "Computer Science and Engineering student passionate about software development, problem solving and emerging technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {/* Premium Fixed Navigation */}
        <Navbar />

        {/* Main Portfolio */}
        <main>{children}</main>
      </body>
    </html>
  );
}