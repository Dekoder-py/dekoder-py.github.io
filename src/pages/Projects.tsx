import { ProjectsGrid } from "../components/ProjectGrid";
import type { Project } from "../types";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Virus Shooter",
      description: (
        <p>
          A 2D Platformer I made with some friends in under 12 hours for the{" "}
          <a
            href="https://daydream.hackclub.com"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
          >
            Daydream
          </a>{" "}
          game jam.
        </p>
      ),
      url: "https://dekoder-py.itch.io/daydream-virus-shooter",
      imgUrl: "/assets/virus-shooter.png",
    },

    {
      name: "Guess The Number",
      description: "A number guessing GUI app written in Java with JavaFX.",
      url: "https://github.com/dekoder-py/GuessTheNumber",
      imgUrl: "/assets/guess-the-number.png",
    },

    {
      name: "PyWeather",
      description: (
        <p>
          A CLI weather app written in Python with data from{" "}
          <a
            href="https://tomorrow.io"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
          >
            Tomorrow.io
          </a>
          .
        </p>
      ),
      url: "https://pypi.org/project/pyioweather/",
      imgUrl: "/assets/pyweather.png",
    },

    {
      name: "The Restless Dungeon",
      description: "A text-based adventure game written in Python.",
      url: "https://pypi.org/project/restless-dungeon/",
      imgUrl: "/assets/restless-dungeon.png",
    },
  ];

  return (
    <div
      id="projects"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h2 className="text-2xl font-bold">Things I've Made</h2>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
