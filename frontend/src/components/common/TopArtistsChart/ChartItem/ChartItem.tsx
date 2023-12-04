import { Artist } from "@spotify-dash/types";
import classes from "./ChartItem.module.scss";

interface ChartItemProps {
  artist: Artist;
}

export const ChartItem: React.FC<ChartItemProps> = ({ artist }) => {
  return (
    <li className={classes.container}>
      <img src={artist.images[0].url} />
      <p>{artist.name}</p>
    </li>
  );
};
