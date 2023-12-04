import { Track } from '@spotify-dash/types';
import classes from './ChartItem.module.scss';

interface ChartItemProps {
  track: Track;
}

export const ChartItem: React.FC<ChartItemProps> = ({ track }) => {
  return (
    <li className={classes.container}>
      <img src={track.album.images[0].url} alt={track.name} />
      <p>
        {track.name} - {track.artists[0].name}
      </p>
    </li>
  );
};
