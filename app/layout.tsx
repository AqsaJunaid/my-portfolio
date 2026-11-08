import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display-sans",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aqsa Junaid | AI Professional & Full-Stack Developer",
  description:
    "Portfolio of Aqsa Junaid — AI Professional with hands-on experience building machine learning and AI-based applications across healthcare systems, deepfake detection, and intelligent systems.",
  keywords: [
    "Aqsa Junaid",
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Aqsa Junaid" }],
  openGraph: {
    title: "Aqsa Junaid | AI Professional & Full-Stack Developer",
    description:
      "AI Professional with hands-on experience in building machine learning and AI-based applications across healthcare systems, deepfake detection, and intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}