"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-hidden transition-all duration-300 ${
        isScrolled
          ? "border-b border-navy/5 bg-white/80 shadow-[0_4px_20px_-8px_rgba(30,58,95,0.15)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <nav className="section-shell relative flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="group font-display text-lg font-bold tracking-tight text-navy transition-colors duration-300 hover:text-accent sm:text-xl"
        >
          Aqsa Junaid
          <span className="text-accent transition-transform duration-300 group-hover:scale-125 inline-block">
            
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 rounded-full border border-navy/5 bg-white/40 p-1.5 backdrop-blur-sm md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy/70 transition-all duration-200 hover:bg-accent hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Let&apos;s Talk
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 border-t border-navy/5 bg-white/95 pb-6 pt-4 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy/80 transition-colors hover:bg-accent/8 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary w-full"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
