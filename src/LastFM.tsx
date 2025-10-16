// lastfm.ts

type Track = {
  artist: { "#text": string };
  name: string;
  album: { "#text": string };
  date?: { "#text": string };
  url: string;
  "@attr"?: { nowplaying: string };
};

async function getRecentTracks(): Promise<Track[] | null> {
  try {
    const response = await fetch("/api/lastfm");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return data.recenttracks.track;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLastPlayedTrack() {
  const tracks = await getRecentTracks();

  if (!tracks || tracks.length === 0) {
    console.log("No tracks found for this user.");
    return;
  }

  const mostRecent = tracks[0];
  return mostRecent;
}
