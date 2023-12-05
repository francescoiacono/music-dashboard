import { Album } from '@spotify-dash/types';
import classes from './AlbumItem.module.scss';
import { stringUtils } from '../../../../../../utils';

export const AlbumItem = (album: Album) => {
  return (
    <li className={classes.wrapper}>
      <img src={album.images[0].url} alt={album.name} />
      <div className={classes.albumInfo}>
        <h3>{album.name}</h3>
        <p>{stringUtils.parseIsoDate(album.release_date).year}</p>
        <p>{`${album.total_tracks} Tracks`}</p>
      </div>
    </li>
  );
};
