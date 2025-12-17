"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SocialLink } from "../data/portfolioData";
import Link from "next/link";

interface FooterProps {
  socialLinks: SocialLink[];
  resumeUrl: string;
}

export default function Footer({ socialLinks, resumeUrl }: FooterProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "FaLinkedin":
        return <FaLinkedin />;
      case "FaGithub":
        return <FaGithub />;
      case "FaEnvelope":
        return <FaEnvelope />;
      default:
        return null;
    }
  };

  return (
    <footer className="py-8 bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              aria-label={link.platform}
              className="social-link"
            >
              {renderIcon(link.icon)}
            </Link>
          ))}
          <Link href={resumeUrl} aria-label="Resume" className="social-link">
            <FaFileAlt />
          </Link>
        </div>
        <div className="text-center mt-6 text-sm text-[var(--text-secondary)]">
          <p>vanessayeung.dev &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
