// lastfm.ts

type Track = {
  artist: { "#text": string };
  name: string;
  album: { "#text": string };
  date?: { "#text": string };
  url: string;
  "@attr"?: { nowplaying: string };
};

type RecentTracksResponse = {
  recenttracks: {
    track: Track[];
    "@attr": {
      user: string;
      page: string;
      totalPages: string;
      perPage: string;
      total: string;
    };
  };
};

async function getRecentTracks(
  username: string,
  apiKey: string,
): Promise<Track[] | null> {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: RecentTracksResponse = await response.json();
    return data.recenttracks.track;
  } catch (error) {
    console.error("Failed to fetch recent tracks:", error);
    return null;
  }
}

const API_KEY = "11b81837efe1582587af2de11af1d7b6";
const USERNAME = "your-nemesis";

export async function getLastPlayedTrack() {
  const tracks = await getRecentTracks(USERNAME, API_KEY);

  if (!tracks || tracks.length === 0) {
    console.log("No tracks found for this user.");
    return;
  }

  const mostRecent = tracks[0];
  return mostRecent;
}
