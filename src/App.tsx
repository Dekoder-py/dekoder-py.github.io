import "./App.css";

function App() {
  return (
    <>
      <div
        id="welcome"
        className="h-screen flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-3xl font-bold">Hi! I'm Kyle.</h1>
        <h2 className="pb-20 text-2xl">
          Welcome to my corner of the internet!
        </h2>
        <div id="mouse-scroll"></div>
      </div>

      <div
        id="about"
        className="flex flex-col items-center justify-center text-center pb-20"
      >
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>
          I'm a 15 year old programmer based in New Zealand. <br />I enjoy
          programming, homelabbing, Raspberry Pis, and being a part of{" "}
          <a
            href="https://hackclub.com"
            target="_blank"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Hack Club
          </a>
          !
        </p>
      </div>

      <div
        id="projects"
        className="justify-center items-center text-center pb-20"
      >
        <h2 className="text-2xl font-bold">Things I've Made</h2>
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
            </a>.
          </li>
        </ul>
      </div>

      <footer className="items-center justify-center text-center bg-gray-200 dark:bg-[#2e2e2e] text-black dark:text-white/90 p-10">
        Made in 2025 by Dekoder-py (Kyle). Source code{" "}
        <a
          href="https://github.com/dekoder-py/react-website"
          target="_blank"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
        >
          here
        </a>
        .
      </footer>
    </>
  );
}

export default App;
