import { ProjectCard } from "./ProjectCard";
import type { Project } from "../types";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1">
      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

