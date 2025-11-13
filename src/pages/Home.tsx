import SplitText from "../components/SplitText.tsx";

export default function Home() {
  return (
    <div
      id="welcome"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <SplitText
        text="Hello! Welcome to codingcorner.dev!"
        className="text-3xl font-bold"
      />
      <h2 className="text-2xl">
        I'm Kyle! You've reached my corner of the internet!
      </h2>
      <section id="about">
        <p className="px-8">
          I'm a 16 year old programmer from New Zealand. I make projects, like{" "}
          <a>this project link needed</a>! I am fluent in python and C++ and
          decent at Java. I'm a member of{" "}
          <a href="hackclub.com" target="_blank" className="underline">
            Hack Club
          </a>
          ! <br />I prefer working in the CLI to any GUI app (which is why I'm
          not the best at UI things XD <br /> I wrote my own neovim config,
          ghostty config, and tmux config, which are the main tools I use to
          program. You can find them on my{" "}
          <a href="github.com/dekoder-py" target="_blank" className="underline">
            GitHub
          </a>
          !
        </p>
      </section>
      <div id="buttons">
        <a href="https://hack.club" target="_blank">
          <img src="/buttons/hackclub.gif" alt="hack club" />
        </a>
        <a href="https://github.com" target="_blank">
          <img src="/buttons/github.gif" alt="hack club" />
        </a>
        <a href="https://eightyeightthirty.one/#" target="_blank">
          <img
            src="https://raw.githubusercontent.com/NotNite/eightyeightthirtyone/main/client/public/88x31.png"
            alt="eightyeightthirtyone"
          />
        </a>
      </div>
    </div>
  );
}
