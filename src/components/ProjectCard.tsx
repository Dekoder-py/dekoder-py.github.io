import Project from "../types.ts";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div id={project.name + "-card"}>
      <a href={project.url} target="_blank">
        <img src={project.imgUrl} alt={"Thumbnail image for " + project.name} />
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </a>
    </div>
  );
}
