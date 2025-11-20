import { useState, useEffect } from "react";
import Button88x31 from "../components/Button88x31.tsx";
import { getLastPlayedTrack } from "../LastFM.tsx";
import CopySnippet from "../components/CopySnippet.tsx";

function changeQuote() {
  const quoteText = document.getElementById("quote");
  if (!quoteText) return;

  const quoteList = [
    "Neovim is superior to everything",
    "Wow, you found the only actually interactive thing on here!",
    "I am personally offended if your map doesn't have NZ on it",
    "Check out site.slitrostudio.me next!",
    "Check out os.slitrostudio.me next!",
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
  const [songText, setSongText] = useState<string>("loading...");

  useEffect(() => {
    const fetchSong = async () => {
      const track = await getLastPlayedTrack();
      if (track) {
        const isPlaying = track["@attr"]?.nowplaying === "true";
        const lastPlayedIndex = track["date"]?.["#text"].indexOf(",");
        const lastPlayed = track["date"]?.["#text"].substring(
          0,
          lastPlayedIndex,
        );
        const song = `${track.name} by ${track.artist["#text"]}`;
        setSongText(
          isPlaying
            ? `I'm currently listening to ${song}!`
            : `The last song I listened to was ${song} on ${lastPlayed}.`,
        );
      } else {
        setSongText(
          "Couldn't load song data from LastFM! (Please let me know if the issue persists - kyle@codingcorner.dev)",
        );
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 120 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <div
        id="welcome"
        className="items-center justify-center text-center flex flex-col"
      >
        <img
          src="/assets/pfp.png"
          height={150}
          width={150}
          className="rounded"
        />
        <h1 className="text-3xl font-bold">
          Hello! Welcome to codingcorner.dev!
        </h1>
        <h2 className="text-2xl">You've reached my corner of the internet!</h2>
      </div>
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

        <div
          id="webring"
          className="my-8 items-center justify-center text-center flex"
        >
          <a href="https://ctp-webr.ing/codingcorner/previous">
            <svg
              className="arrow-icon"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="#cdd6f4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M5 12L11 6M5 12L11 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a href="https://ctp-webr.ing/">
            <img
              src="/assets/catppuccin-logo.png"
              height={42}
              width={42}
              alt="Catppuccin Webring"
            />
          </a>
          <a href="https://ctp-webr.ing/codingcorner/next">
            <svg
              className="arrow-icon"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="#cdd6f4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </div>

        <p id="song" className="mt-5">
          <b>{songText}</b>
        </p>
      </section>
      <section
        id="quote-section"
        onClick={changeQuote}
        className="rounded px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 dark:bg-macchiato-lavender dark:text-macchiato-surface-0 text-latte-surface-0 bg-latte-lavender"
      >
        <p id="quote">Click me for fun words ;)</p>
      </section>

      <h2 className="text-2xl">The 88x31 Grid</h2>
      <span>
        Copy my button code to add it to your site: <CopySnippet />
      </span>

      <div
        id="buttons"
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(88px,1fr))] 
          md:max-w-[calc(8*88px)] gap-2 place-items-center
        "
      >
        <Button88x31
          url="https://codingcorner.dev"
          imgSrc="/buttons/codingcorner.png"
          alt="coding corner"
        />

        <Button88x31
          url="https://site.slitrostudio.me"
          imgSrc="https://site.slitrostudio.me/Slitro2.png"
          alt="Slitro Studio"
        />

        <Button88x31
          url="https://poy.ooo"
          imgSrc="/buttons/poyo.png"
          alt="Poyo"
        />

        <Button88x31
          url="https://errorcodezero.dev/"
          imgSrc="https://errorcodezero.dev/button.png"
          alt="ErrorCode0"
        />

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
