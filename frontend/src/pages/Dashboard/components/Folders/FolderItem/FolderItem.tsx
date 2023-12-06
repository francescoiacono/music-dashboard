import { Artist, Track } from "@spotify-dash/types";
import classes from "./FolderItem.module.scss";

interface FolderItemProps {
  data: Artist;
}

export const FolderItem: React.FC<FolderItemProps> = ({ data }) => {
  if (data.type === "artist")
    return (
      <div className={classes.item}>
        <img src={data.images[0].url} alt={data.name} />
        <p>{data.name}</p>
      </div>
    );
  return null;
};
