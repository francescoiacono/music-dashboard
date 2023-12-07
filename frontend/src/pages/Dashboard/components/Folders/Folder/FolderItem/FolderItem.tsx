import { Artist, Track } from "@spotify-dash/types";
import classes from "./FolderItem.module.scss";

interface FolderItemProps {
  data: Artist | Track;
  type: "artist" | "track";
}

export const FolderItem = ({ data, type }: FolderItemProps) => {
  switch (type) {
    case "artist":
      const artistData = data as Artist;
      return (
        <div className={classes.item}>
          <img src={artistData.images[0].url} alt={artistData.name} />
          <p>{artistData.name}</p>
        </div>
      );
    case "track":
      const trackData = data as Track;
      return (
        <div className={classes.item}>
          <img src={trackData.album.images[0].url} alt={trackData.name} />
          <p>{trackData.name}</p>
        </div>
      );
    default:
      return null;
  }
};
