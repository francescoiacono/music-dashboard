import { Track } from '@spotify-dash/types';
import { stringUtils } from '../../../../../../utils';
import classes from './TopTrackItem.module.scss';

interface TopTrackItemProps {
  track: Track;
}

export const TopTrackItem: React.FC<TopTrackItemProps> = ({ track }) => {
  return (
    <li className={classes.wrapper}>
      <div>
        <img src={track.album.images[0].url} alt={track.name} />
        <p>{track.name}</p>
      </div>
      <p>{stringUtils.formatDuration(track.duration_ms)}</p>
      <p>{track.album.name}</p>
    </li>
  );
};
