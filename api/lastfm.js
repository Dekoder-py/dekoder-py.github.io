export default async function handler(req, res) {
  const USERNAME = "your-nemesis";
  const API_KEY = process.env.LASTFM_API_KEY;

  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Failed to fetch from LastFM:", err);
    res.status(500).json({ error: "Failed to fetch Last.fm data" });
  }
}

