import { useEffect, useState } from "react";
import { getLastPlayedTrack } from "../LastFM";

interface TrackInfo {
  name: string;
  artist: string;
  url: string;
  nowPlaying: boolean;
}

export default function About() {
  const [track, setTrack] = useState<TrackInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLastSong() {
      const data = await getLastPlayedTrack();

      if (!data) {
        setError("I tried to search LastFM but something went wrong :(");
        return;
      }

      const nowPlaying = data["@attr"]?.nowplaying === "true";

      setTrack({
        name: data.name,
        artist: data.artist["#text"],
        url: data.url,
        nowPlaying,
      });
      setError(null);
    }

    fetchLastSong();
    const interval = setInterval(fetchLastSong, 150 * 1000);
    return () => clearInterval(interval);
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
        Sometimes I listen to music.{" "}
        {error ? (
          <span>{error}</span>
        ) : track ? (
          <>
            {track.nowPlaying ? (
              <>
                I&apos;m currently listening to{" "}
                <a
                  href={track.url}
                  target="_blank"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {track.name}
                </a>{" "}
                by {track.artist}.
              </>
            ) : (
              <>
                The last song I listened to was{" "}
                <a
                  href={track.url}
                  target="_blank"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {track.name}
                </a>{" "}
                by {track.artist}.
              </>
            )}
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
