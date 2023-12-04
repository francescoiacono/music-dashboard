import { useEffect, useState } from "react";
import { artistsService } from "../../../services";
import { Artist } from "@spotify-dash/types";

export const TopArtistsChart = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchArtists = async () => {
    try {
      setLoading(true);
      const options = {
        time_range: "long_term",
        limit: 10,
        offset: 0,
      };
      const artists = await artistsService.fetchTopArtists(options);
      setArtists(artists);
    } catch (error) {
      setError(error as Error["message"]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  useEffect(() => {}, [artists]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <ol>{artists.length > 0 && artists.map((m) => <li>{m.name}</li>)}</ol>;
};
