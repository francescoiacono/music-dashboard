import { Album } from '@spotify-dash/types';
import classes from './AlbumItem.module.scss';

export const AlbumItem = (album: Album) => {
  return (
    <li className={classes.wrapper}>
      <img src={album.images[0].url} alt={album.name} />
      <div>
        <h3>{album.name}</h3>
        <p>Release Date: {album.release_date}</p>
      </div>
    </li>
  );
};
