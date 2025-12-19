"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { SocialLink } from "../data/portfolioData";

interface MobileNavigationProps {
  socialLinks: SocialLink[];
}

const iconMap: Record<string, React.ElementType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

export default function MobileNavigation({
  socialLinks,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", num: 1, label: "About" },
    { id: "services", num: 2, label: "Services" },
    { id: "projects", num: 3, label: "Projects" },
    { id: "contact", num: 4, label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-[var(--accent-cyan)] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-[var(--accent-cyan)] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-[var(--accent-cyan)] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[var(--bg-primary)] z-[105] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center px-8">
          {/* Navigation Items */}
          <nav className="flex flex-col items-center gap-6 mb-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="bg-transparent border-none text-[var(--text-emphasis)] cursor-pointer font-mono hover:text-[var(--accent-cyan)] transition-colors duration-200 text-lg"
              >
                <span className="text-[var(--accent-cyan)]">0{item.num}.</span>{" "}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="mb-12">
            <ThemeToggle />
          </div>

          {/* Footer with Social Links */}
          <footer className="flex flex-col items-center gap-6">
            <div className="flex gap-6 items-center">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon.toLowerCase()];
                return Icon ? (
                  <a
                    key={link.platform}
                    href={link.url}
                    aria-label={link.platform}
                    className="text-[var(--text-dim)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                  >
                    <Icon size={24} />
                  </a>
                ) : null;
              })}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
