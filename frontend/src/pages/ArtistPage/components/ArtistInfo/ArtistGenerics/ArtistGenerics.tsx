import { Artist } from "@spotify-dash/types";
import { useEffect } from "react";
import { ColorBar } from "../../../../../components/common";
import { useApiResource } from "../../../../../hooks";
import { stringUtils } from "../../../../../utils";
import classes from "./ArtistGenerics.module.scss";

interface ArtistGenericsProps {
  id: string;
}

export const ArtistGenerics: React.FC<ArtistGenericsProps> = ({ id }) => {
  const {
    data: artist,
    loading,
    error,
  } = useApiResource<Artist>(`/artists/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!artist) return <div>No artist</div>;

  return (
    <div className={classes.artistInfo}>
      <img src={artist.images[0].url} alt={artist.name} />
      <div className={classes.text}>
        <h1>{artist.name}</h1>
        <div className={classes.artistGenres}>
          <ul>
            {artist.genres.map((genre) => (
              <li key={genre}>{stringUtils.capitalizeWords(genre)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Popularity</h3>
          <ColorBar value={artist.popularity} />
        </div>

        <div>
          <h3>Followers</h3>
          <p>{stringUtils.formatNumber(artist.followers.total)}</p>
        </div>
      </div>
    </div>
  );
};
