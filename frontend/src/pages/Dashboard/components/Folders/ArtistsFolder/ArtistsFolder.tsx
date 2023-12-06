import { useEffect } from "react";
import { useApiResource } from "../../../../../hooks";
import { FolderItem } from "../FolderItem/FolderItem";
import { Artist } from "@spotify-dash/types";
import classes from "./ArtistsFolder.module.scss";
import { Link } from "react-router-dom";

export const ArtistsFolder = () => {
  const {
    data: artists,
    loading,
    error,
    fetchData: fetchArtists,
  } = useApiResource<Artist[]>("/artists/top");

  useEffect(() => {
    fetchArtists({ limit: 4 });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!artists) return null;

  return (
    <div>
      <h2>Top Artists</h2>
      <Link className={classes.link} to="/top-artists">
        <div className={classes.folder}>
          {artists.map((artist) => (
            <FolderItem key={artist.id} data={artist} />
          ))}
        </div>
      </Link>
    </div>
  );
};
