export default function Home() {
  return (
    <div
      id="welcome"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h1 className="text-3xl font-bold pt-22">
        Hello! Welcome to codingcorner.dev!
      </h1>
      <h2 className="text-2xl">You've reached my corner of the internet!</h2>
      <section id="about">
        <p className="px-8">
          I'm Kyle, a 16 year old programmer from New Zealand. I make projects,
          like{" "}
          <a
            href="https://pypi.org/project/restless-dungeon/"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            this
          </a>
          ! I am fluent in python and C++ and decent at Java. I'm a member of{" "}
          <a
            href="https://hack.club"
            target="_blank"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            Hack Club
          </a>
          ! <br />I prefer working in the CLI to any GUI app (which is why I'm
          not the best at UI things XD) <br /> 
          I've also written my own neovim,
          ghostty, and tmux configs, which are the main tools I use to
          program. You can find them on my{" "}
          <a
            href="https://github.com/dekoder-py"
            target="_blank"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            GitHub
          </a>
          !
        </p>
      </section>
      <div
        id="buttons"
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(88px,1fr))] 
          md:max-w-[calc(8*88px)] gap-2 place-items-center
        "
      >
        <img src="/buttons/codingcorner.png" alt="coding corner" />
        <a href="https://hack.club" target="_blank">
          <img src="/buttons/hackclub.gif" alt="hack club" />
        </a>
        <a href="https://github.com" target="_blank">
          <img src="/buttons/github.gif" alt="github" />
        </a>
        <a href="https://apple.com" target="_blank">
          <img src="/buttons/macosmade.gif" alt="made with macos" />
        </a>
        <a href="https://neovim.io" target="_blank">
          <img src="/buttons/neovim.gif" alt="neovim" />
        </a>
        <a href="https://www.vim.org" target="_blank">
          <img src="/buttons/vim.gif" alt="vim" />
        </a>
        <a href="https://home-assistant.io" target="_blank">
          <img src="/buttons/home-assistant.gif" alt="home assistatn" />
        </a>
        <a href="https://slitrostudio.me" target="_blank">
          <img
            src="https://slitrostudio.me/Slitro2.png"
            alt="Slitro Studio"
          />
        </a>
        <a href="https://apple.com" target="_blank">
          <img src="/buttons/apple.gif" alt="apple" />
        </a>
        <a href="https://notbyai.fyi" target="_blank">
          <img src="/buttons/notbyai.png" alt="notbyai" />
        </a>
        <a href="https://eightyeightthirty.one/#" target="_blank">
          <img src="/buttons/88x31.png" alt="eightyeightthirtyone" />
        </a>
        <a href="https://anybrowser.org" target="_blank">
          <img src="/buttons/detect.gif" alt="anybrowser" />
        </a>
      </div>
    </div>
  );
}
