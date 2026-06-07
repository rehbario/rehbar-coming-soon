import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const inter = Inter({ variable: "--font-heading", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata = {
  title: "Rehbar — AI-Powered Engineering Entry Test Prep",
  description:
    "Smart MCQ practice, mock tests, and an AI mentor for NUST NET, ECAT, UET, NED, GIKI & PIEAS. Launching July 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
