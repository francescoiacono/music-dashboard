import { Track } from "@spotify-dash/types";
import { stringUtils } from "../../../../../../utils";
import classes from "./TopTrackItem.module.scss";
import { Link } from "react-router-dom";

interface TopTrackItemProps {
  track: Track;
}

export const TopTrackItem: React.FC<TopTrackItemProps> = ({ track }) => {
  return (
    <Link
      className={classes.link}
      to={track.external_urls.spotify}
      target="_blank"
    >
      <li className={classes.wrapper}>
        <div>
          <img src={track.album.images[0].url} alt={track.name} />
          <p className={classes.trackName}>{track.name}</p>
        </div>
        <p>{stringUtils.formatDuration(track.duration_ms)}</p>
        <p>{track.album.name}</p>
      </li>
    </Link>
  );
};
