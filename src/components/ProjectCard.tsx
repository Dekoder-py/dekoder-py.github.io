import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      id={project.name + "-card"}
      className="
      border-4 border-solid border-latte-lavender dark:border-macchiato-lavender
      w-full max-w-sm
      rounded-lg shadow-md p-4 flex flex-col
      min-h-80
      bg-latte-surface-0 dark:bg-macchiato-surface-0
      hover:shadow-2xl hover:scale-[1.02]
      hover:bg-latte-surface-1 dark:hover:bg-macchiato-surface-1
      hover:text-latte-blue dark:hover:text-macchiato-blue
      transition-all duration-300 ease-in-out"
    >
      <a href={project.url} target="_blank">
        <img
          src={project.imgUrl}
          alt={"Thumbnail image for " + project.name}
          className="border-2 border-solid border-latte-blue rounded-sm dark:border-macchiato-blue mx-auto"
        />
        <h1 className="font-bold pt-10">{project.name}</h1>
        <p>{project.description}</p>
      </a>
    </div>
  );
}
