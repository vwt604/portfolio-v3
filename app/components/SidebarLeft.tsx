"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { SocialLink } from "../data/portfolioData";

interface SidebarLeftProps {
  socialLinks: SocialLink[];
}

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function SidebarLeft({ socialLinks }: SidebarLeftProps) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-12 hidden md:flex flex-col items-center justify-end pb-5 z-50">
      <div className="flex flex-col gap-5 items-center">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon.toLowerCase()];
          return Icon ? (
            <a
              key={link.platform}
              href={link.url}
              aria-label={link.platform}
              className="text-[var(--text-dim)] hover:text-[var(--accent-cyan)] hover:-translate-y-1 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ) : null;
        })}
        <div className="w-px h-24 bg-[var(--text-muted)] mt-2.5" />
      </div>
    </aside>
  );
}
