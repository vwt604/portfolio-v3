"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import { SocialLink } from "../data/portfolioData";

interface HeaderProps {
  name: string;
  title: string;
  description: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export default function Header({
  name,
  title,
  description,
  resumeUrl,
  socialLinks,
}: HeaderProps) {
  // Function to render the correct icon based on the icon name
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
    <header className="md:py-16">
      <div className="container max-w-3xl text-center mt-auto">
        <div className="fade-in">
          <FaLaptopCode className="text-5xl mx-auto mb-6 text-[var(--accent)]" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I&apos;m {name}!
        </h1>
        <div className="fade-in delay-200 text-lg md:text-xl mb-8 text-[var(--text-secondary)]">
          <p>
            {title}
            <br />
            <br />
            {description}
            <br />
            <br />
            Check out my{" "}
            <Link href={resumeUrl} className="font-semibold">
              resume
            </Link>
            .
          </p>
        </div>

        <div className="fade-in delay-300 flex justify-center mb-12">
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
        </div>

        <div className="fade-in delay-400 mt-12">
          <Link
            href="#projects"
            className="scroll-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="scroll-indicator">
              <div className="scroll-dot"></div>
            </div>
            <span>Scroll</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
