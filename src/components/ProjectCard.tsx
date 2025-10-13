import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      id={project.name + "-card"}
      className="border-4 p-8 border-solid border-latte-lavender dark:border-macchiato-lavender w-60 dark:bg-macchiato-surface-0 bg-latte-surface-0"
    >
      <a href={project.url} target="_blank">
        <img
          src={project.imgUrl}
          alt={"Thumbnail image for " + project.name}
          className="border-2 border-solid border-latte-blue dark:border-macchiato-blue"
        />
        <h1 className="font-bold pt-10">{project.name}</h1>
        <p>{project.description}</p>
      </a>
    </div>
  );
}
