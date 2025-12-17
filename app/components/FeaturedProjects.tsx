"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FeaturedProject } from "../data/shopifyPortfolioData";

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

const SectionNumber = ({ num }: { num: number }) => (
  <span className="text-[var(--accent-cyan)] font-mono text-sm mr-2">
    0{num}.
  </span>
);

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-6 sm:px-12 md:px-24 lg:px-36 max-w-[1200px] mx-auto"
    >
      <h2 className="flex items-center text-2xl md:text-[28px] font-semibold text-[var(--heading-dark)] mb-8 md:mb-10">
        <SectionNumber num={3} /> Projects
        <span className="flex-1 h-px bg-[var(--bg-secondary)] ml-5 max-w-[300px]" />
      </h2>

      {/* Featured Projects */}
      <div className="flex flex-col gap-12 md:gap-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative ${
                !isEven
                  ? "md:grid md:grid-cols-[55%_45%] md:items-center md:gap-4"
                  : "md:grid md:grid-cols-[45%_55%] md:items-center md:gap-4"
              }`}
            >
              {/* Background Image - Always rendered first for mobile overlay */}
              <a
                href={project.link}
                className={`relative aspect-[16/10] rounded overflow-hidden group block ${
                  !isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[var(--accent-cyan)]/30 md:hover:bg-transparent transition-all duration-300" />
              </a>

              {/* Content - Overlays on mobile, side-by-side on desktop */}
              <div
                className={`absolute inset-0 flex flex-col justify-center p-6 md:relative md:inset-auto md:p-0 ${
                  isEven
                    ? "text-left md:text-right md:pl-0 md:pr-0 md:order-2"
                    : "text-left md:pr-0 md:pl-0 md:order-1"
                }`}
              >
                <p className="text-[var(--accent-cyan)] font-mono text-xs mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl text-[var(--heading-dark)] mb-4 md:mb-5 font-semibold">
                  <a
                    href={project.link}
                    className="text-[var(--heading-dark)] no-underline hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <div
                  className={`bg-transparent md:bg-[var(--bg-secondary)] p-0 md:p-6 rounded mb-4 md:mb-5 relative z-[2] ${
                    isEven ? "md:-ml-20" : "md:-mr-20"
                  }`}
                >
                  <p className="text-[var(--text-primary)] leading-relaxed text-sm md:text-[15px]">
                    {project.desc}
                  </p>
                </div>
                <div
                  className={`flex gap-3 mb-4 flex-wrap ${
                    isEven ? "md:justify-end" : "justify-start"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-[var(--text-dim)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    isEven ? "md:justify-end" : "justify-start"
                  }`}
                >
                  <a
                    href={project.link}
                    className="text-[var(--text-emphasis)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
