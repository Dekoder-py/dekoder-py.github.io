import { ProjectsGrid } from "../components/ProjectGrid";
import type { Project } from "../types";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Slack Annoyance",
      description: (
        <p>
          A slack bot, written in python, that uses{" "}
          <a
            href="https://ai.hackclub.com/"
            className="underline hover:text-macchiato-blue hover:font-bold"
            target="_blank"
          >
            Hack Club AI
          </a>{" "}
          to respond sarcastically to messages.
        </p>
      ),
      url: "https://github.com/heycastawhat/slack-annoyance",
      imgUrl: "/assets/slack-annoyance.png",
    },
    {
      name: "Virus Shooter",
      description: (
        <p>
          A 2D Platformer I made with some friends in under 12 hours for the{" "}
          <a
            href="https://daydream.hackclub.com"
            className="underline hover:text-macchiato-blue hover:font-bold"
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
            className="underline hover:text-macchiato-blue hover:font-bold"
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
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 mx-4"
    >
      <h2 className="pt-10 text-2xl font-bold">Things I've Made</h2>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
