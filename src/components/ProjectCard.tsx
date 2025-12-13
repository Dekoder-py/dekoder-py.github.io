import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      id={project.name + "-card"}
      className="
      border-4 border-solid border-macchiato-lavender
      w-full max-w-sm
      rounded-lg shadow-md p-4 flex flex-col
      min-h-80
      bg-macchiato-surface-0
      hover:shadow-2xl hover:scale-[1.02]
      hover:bg-macchiato-surface-1
      hover:text-macchiato-blue
      transition-all duration-300 ease-in-out"
    >
      <a href={project.url} target="_blank">
        <img
          src={project.imgUrl}
          alt={"Thumbnail image for " + project.name}
          className="border-2 border-solid rounded-sm border-macchiato-blue mx-auto"
        />
        <h1 className="font-bold pt-10">{project.name}</h1>
        <p>{project.description}</p>
      </a>
    </div>
  );
}
