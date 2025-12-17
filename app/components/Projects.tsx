import ProjectCard from "./ProjectCard";
import { Project } from "../data/portfolioData";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} />
              {index < projects.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
