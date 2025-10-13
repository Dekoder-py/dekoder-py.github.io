import { ProjectCard } from "../components/ProjectCard";
import type Project from "../types";

export default function Projects() {
  const virusShooter: Project {
    name:"Virus Shooter", description: "Daydream desc", url: "https://dekoder-py.itch.io/daydream-virus-shooter", imgUrl: "" />



  return (
    <div
      id="projects"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h2 className="text-2xl font-bold">Things I've Made</h2>
      <ProjectCard project>

        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://dekoder-py.itch.io/daydream-virus-shooter"
              target="_blank"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Virus Shooter
            </a>{" "}
            - A 2D Platformer I made with some friends in &gt;12 hours for the{" "}
            <a
              href="https://daydream.hackclub.com"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
            >
              Daydream
            </a>{" "}
            game jam.
          </li>
          <li>
            <a
              href="https://github.com/dekoder-py/GuessTheNumber"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
            >
              Guess The Number
            </a>{" "}
            - A number guessing GUI app written in Java with JavaFX.
          </li>
          <li>
            <a
              href="https://pypi.org/project/pyioweather/"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
            >
              PyWeather
            </a>{" "}
            - A CLI weather app written in Python with data from{" "}
            <a
              href="https://tomorrow.io"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
            >
              Tomorrow.io
            </a>
            .
          </li>
          <li>
            <a
              href="https://pypi.org/project/restless-dungeon/"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
            >
              The Restless Dungeon
            </a>{" "}
            - A text-based adventure game written in Python.
          </li>
        </ul>
    </div>
  );
}
