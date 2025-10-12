import { useEffect, useState } from "react";
import { getLastPlayedTrack } from "../LastFM";

export default function About() {
  const [lastSong, setLastSong] = useState<string>("OH NO! It seems I couldn't find anything :(");

  useEffect(() => {
    async function fetchLastSong() {
      const track = await getLastPlayedTrack();
      if (track) {
        setLastSong(`${track.artist["#text"]} - ${track.name}.`);
      }
    }

    // Fetch immediately
    fetchLastSong();

    // Fetch every 10 seconds
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
        Sometimes I listen to music. The last thing I listened to was:{" "}
        <span id="lastFM-song">{lastSong}</span>
      </p>
    </div>
  );
}
