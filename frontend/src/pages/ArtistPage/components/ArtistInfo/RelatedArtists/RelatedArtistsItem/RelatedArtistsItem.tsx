import { Artist } from "@spotify-dash/types";
import { Link } from "react-router-dom";
import classes from "./RelatedArtistsItem.module.scss";

interface RelatedArtistsItemProps {
  artist: Artist;
}

export const RelatedArtistsItem: React.FC<RelatedArtistsItemProps> = ({
  artist,
}) => {
  return (
    <Link className={classes.link} to={"/artist/" + artist.id}>
      <li className={classes.item}>
        <img src={artist.images[0].url} alt={artist.name} />
        <p>{artist.name}</p>
      </li>
    </Link>
  );
};
