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
      className="py-24 px-4 md:px-36 max-w-[1200px] mx-auto"
    >
      <h2 className="flex items-center text-[28px] font-semibold text-[var(--heading-dark)] mb-10">
        <SectionNumber num={3} /> Projects
        <span className="flex-1 h-px bg-[var(--bg-secondary)] ml-5 max-w-[300px]" />
      </h2>

      {/* Featured Projects */}
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`grid grid-cols-1 items-center relative gap-4 ${
                !isEven ? "md:grid-cols-[55%_45%]" : "md:grid-cols-[45%_55%]"
              }`}
            >
              {isEven ? (
                <>
                  {/* Image Left */}
                  <a
                    href={project.link}
                    className="relative aspect-[16/10] rounded overflow-hidden group block"
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-[var(--accent-cyan)]/30 hover:bg-transparent transition-all duration-300" />
                  </a>
                  {/* Content Right */}
                  <div className="text-right md:pl-10">
                    <p className="text-[var(--accent-cyan)] font-mono text-xs mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-2xl text-[var(--heading-dark)] mb-5">
                      {project.title}
                    </h3>
                    <div className="bg-[var(--bg-secondary)] p-6 rounded mb-5 md:-ml-20 relative z-[2]">
                      <p className="text-[var(--text-primary)] leading-relaxed text-[15px]">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex justify-end gap-3 mb-4 flex-wrap">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[var(--text-dim)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end gap-4">
                      <a
                        href={project.link}
                        className="text-[var(--text-emphasis)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Content Left */}
                  <div className="text-left md:pr-10 md:order-1">
                    <p className="text-[var(--accent-cyan)] font-mono text-xs mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-2xl text-[var(--heading-dark)] mb-5">
                      {project.title}
                    </h3>
                    <div className="bg-[var(--bg-secondary)] p-6 rounded mb-5 md:-mr-20 relative z-[2]">
                      <p className="text-[var(--text-primary)] leading-relaxed text-[15px]">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex gap-3 mb-4 flex-wrap">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-[var(--text-dim)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="text-[var(--text-emphasis)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  {/* Image Right */}
                  <a
                    href={project.link}
                    className="relative aspect-[16/10] rounded overflow-hidden group md:order-2 block"
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-[var(--accent-cyan)]/30 hover:bg-transparent transition-all duration-300" />
                  </a>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
