"use client";

import Image from "next/image";
import { AboutContent } from "../data/shopifyPortfolioData";

interface AboutProps {
  about: AboutContent;
  profileImage?: string;
}

const SectionNumber = ({ num }: { num: number }) => (
  <span className="text-[var(--accent-cyan)] font-mono text-sm mr-2">
    0{num}.
  </span>
);

export default function About({ about, profileImage = "/assets/glasswalls.jpg" }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 px-6 sm:px-12 md:px-24 lg:px-36 max-w-[1200px] mx-auto">
      <h2 className="flex items-center text-2xl md:text-[28px] font-semibold text-[var(--heading-dark)] mb-8 md:mb-10">
        <SectionNumber num={1} /> About Me
        <span className="flex-1 h-px bg-[var(--bg-secondary)] ml-5 max-w-[300px]" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-12">
        <div>
          {about.paragraphs.slice(0, -1).map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed mb-4 text-sm md:text-base text-[var(--text-primary)]"
            >
              {paragraph.split(/(startups|established brands|creative agencies)/).map((part, i) => {
                if (["startups", "established brands", "creative agencies"].includes(part)) {
                  return (
                    <span key={i} className="text-[var(--accent-cyan)]">
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          ))}
          <p className="leading-relaxed mb-6 text-sm md:text-base text-[var(--text-primary)]">
            {about.paragraphs[about.paragraphs.length - 1]}
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 list-none p-0 m-0">
            {about.technologies.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)]"
              >
                <span className="text-[var(--accent-cyan)]">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-[300px] mx-auto">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[var(--accent-cyan)] rounded transition-all duration-200" />
            <div className="relative w-full aspect-square rounded overflow-hidden group">
              <Image
                src={profileImage}
                alt="Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[var(--accent-cyan)]/30 hover:bg-transparent transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
