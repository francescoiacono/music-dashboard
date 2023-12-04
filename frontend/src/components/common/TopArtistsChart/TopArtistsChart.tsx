import { useEffect } from "react";
import { ChartItem } from "./ChartItem/ChartItem";
import { useArtists } from "../../../hooks";

export const TopArtistsChart = () => {
  const { artists, loading, error, fetchArtists } = useArtists();

  useEffect(() => {
    fetchArtists();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ol>
      {artists.length > 0 &&
        artists.map((artist) => <ChartItem key={artist.id} artist={artist} />)}
    </ol>
  );
};
