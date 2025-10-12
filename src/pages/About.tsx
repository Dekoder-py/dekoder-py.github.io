import { useEffect, useState } from "react";
import { getLastPlayedTrack } from "../LastFM";

export default function About() {
  const [lastSong, setLastSong] = useState<string>();

  useEffect(() => {
    async function fetchLastSong() {
      const track = await getLastPlayedTrack();

      if (!track) {
        setLastSong("I tried to search LastFM but something went wrong :(");
        return;
      }

      const isNowPlaying = track["@attr"]?.nowplaying === "true";

      if (track) {
        if (isNowPlaying)
          setLastSong(
            `I'm currently listening to ${track.name} by ${track.artist["#text"]}.`,
          );
        else
          setLastSong(
            `The last song I listened to was ${track.name} by ${track.artist["#text"]}`,
          );
      }
    }

    // Fetch immediately
    fetchLastSong();

    // Fetch every 15 seconds
    const interval = setInterval(fetchLastSong, 150 * 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      id="about"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
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
        <br />
        Sometimes I listen to music. <span id="lastFM-song">{lastSong}</span>
      </p>
    </div>
  );
}
