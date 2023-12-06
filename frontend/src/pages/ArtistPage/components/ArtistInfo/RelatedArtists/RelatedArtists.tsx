import { Artist } from "@spotify-dash/types";
import { useApiResource } from "../../../../../hooks";
import { useEffect } from "react";
import { RelatedArtistsItem } from "./RelatedArtistsItem/RelatedArtistsItem";
import classes from "./RelatedArtists.module.scss";

interface RelatedArtistsProps {
  id: string;
}

export const RelatedArtists: React.FC<RelatedArtistsProps> = ({ id }) => {
  const {
    data: artists,
    loading,
    error,
    fetchData: fetchRelatedArtists,
  } = useApiResource<Artist[]>(`/artists/${id}/related-artists`);

  useEffect(() => {
    fetchRelatedArtists();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!artists) return <div>No artists</div>;

  return (
    <div className={classes.wrapper}>
      <h2>Related Artists</h2>
      <ul className={classes.relatedArtists}>
        {artists.slice(0, 6).map((artist) => (
          <RelatedArtistsItem key={artist.id} artist={artist} />
        ))}
      </ul>
    </div>
  );
};
