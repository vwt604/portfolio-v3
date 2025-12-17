import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/2 overflow-hidden">
        <Link href={project.githubUrl}>
          <Image
            src={project.image}
            alt={`${project.title} Project`}
            width={600}
            height={400}
          />
        </Link>
      </div>
      <div className="md:w-1/2 p-6">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">{project.technologies.join(" · ")}</div>
          <div className="flex flex-wrap">
            <Link href={project.githubUrl} className="project-link">
              View project <FaAngleRight className="ml-1" />
            </Link>
            {project.demoUrl && (
              <Link href={project.demoUrl} className="project-link">
                Live demo <FaAngleRight className="ml-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
