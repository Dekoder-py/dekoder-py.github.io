import { useState, useEffect } from "react";
import Button88x31 from "../components/Button88x31.tsx";
import { getLastPlayedTrack } from "../LastFM.tsx";

function changeQuote() {
  const quoteText = document.getElementById("quote");
  if (!quoteText) return;

  const quoteList = [
    "Neovim is superior to everything",
    "Wow, you found the only actually interactive thing on here!",
    "I am personally offended if your map doesn't have NZ on it",
    "Check out slitrostudio.me next!",
    "Send me an email: kyle@codingcorner.dev",
    "If it's broken, IT WORKS FOR ME",
    "C++ is fun",
    "I like python",
    "Don't use microsoft edge",
    "Hello, World!",
    "Laptop stickers are peak",
    "The terminal is the only correct place to work",
  ];
  const chosenQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  quoteText.textContent = chosenQuote;
}

export default function Home() {
  const [song, setSong] = useState<string>("loading...");

  useEffect(() => {
    const fetchSong = async () => {
      const track = await getLastPlayedTrack();
      if (track) {
        const isPlaying = track["@attr"]?.nowplaying === "true";
        const songText = `${track.name} by ${track.artist["#text"]}`;
        setSong(isPlaying ? `🎵 ${songText}` : songText);
      } else {
        setSong("couldn't load song data");
      }
    };
    fetchSong();
  }, []);
  return (
    <div
      id="welcome"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h1 className="text-3xl font-bold">
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
          I've also written my own neovim, ghostty, and tmux configs, which are
          the main tools I use to program. You can find them on my{" "}
          <a
            href="https://github.com/dekoder-py"
            target="_blank"
            className="underline hover:text-latte-blue dark:hover:text-macchiato-blue"
          >
            GitHub
          </a>
          !
        </p>

        <p id="songs"> The last song I listened to was {song} </p>
      </section>

      <section
        id="quote-section"
        onClick={changeQuote}
        className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 border-rounded border-2 dark:bg-macchiato-lavender dark:text-macchiato-surface-0 text-latte-surface-0 bg-latte-lavender"
      >
        <p id="quote">Click me for fun words ;)</p>
      </section>

      <div
        id="buttons"
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(88px,1fr))] 
          md:max-w-[calc(8*88px)] gap-2 place-items-center
        "
      >
        <Button88x31 imgSrc="/buttons/codingcorner.png" alt="coding corner" />

        <Button88x31
          url="https://hack.club"
          imgSrc="/buttons/hackclub.gif"
          alt="hack club"
        />

        <Button88x31
          url="https://github.com"
          imgSrc="/buttons/github.gif"
          alt="github"
        />

        <Button88x31
          url="https://apple.com"
          imgSrc="/buttons/macosmade.gif"
          alt="made with macOS"
        />

        <Button88x31
          url="https://neovim.io"
          imgSrc="/buttons/neovim.gif"
          alt="neovim"
        />

        <Button88x31
          url="https://www.vim.org"
          imgSrc="/buttons/vim.gif"
          alt="vim"
        />

        <Button88x31
          url="https://home-assistant.io"
          imgSrc="/buttons/home-assistant.gif"
          alt="home assistant"
        />

        <Button88x31
          url="https://slitrostudio.me"
          imgSrc="https://slitrostudio.me/Slitro2.png"
          alt="Slitro Studio"
        />

        <Button88x31
          url="https://apple.com"
          imgSrc="/buttons/apple.gif"
          alt="apple"
        />

        <Button88x31
          url="https://notbyai.fyi"
          imgSrc="/buttons/notbyai.png"
          alt="not by ai"
        />

        <Button88x31
          url="https://eightyeightthirty.one/#"
          imgSrc="/buttons/88x31.png"
          alt="eighty eight thirty one"
        />

        <Button88x31
          url="https://anybrowser.org"
          imgSrc="/buttons/detect.gif"
          alt="viewable on any browser"
        />
      </div>
    </div>
  );
}
