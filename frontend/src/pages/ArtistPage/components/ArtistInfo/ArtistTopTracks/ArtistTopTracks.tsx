import { Track } from "@spotify-dash/types";
import { useApiResource } from "../../../../../hooks";
import { useEffect } from "react";
import { TopTrackItem } from "./TopTrackItem/TopTrackItem";
import classes from "./ArtistTopTracks.module.scss";

interface ArtistTopTracksProps {
  id: string;
}

export const ArtistTopTracks: React.FC<ArtistTopTracksProps> = ({ id }) => {
  const {
    data: tracks,
    loading,
    error,
  } = useApiResource<Track[]>(`/artists/${id}/top-tracks`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!tracks) return <div>No tracks</div>;

  return (
    <div className={classes.wrapper}>
      <h2>Top Tracks</h2>
      <ul>
        {tracks.slice(0, 5).map((track) => (
          <TopTrackItem key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
};
