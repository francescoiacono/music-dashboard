import { Artist, Track } from '@spotify-dash/types';
import { Link } from 'react-router-dom';
import classes from './ChartItem.module.scss';

interface ChartItemProps {
  item: Artist | Track;
}

export const ChartItem: React.FC<ChartItemProps> = ({ item }) => {
  let imageUrl: string;
  let name: string;
  let itemUrl: string;

  if (typeof item === 'object' && 'album' in item) {
    imageUrl = item.album.images[0].url;
    name = `${item.name} - ${item.artists[0].name}`;
    itemUrl = `#`;
  } else {
    imageUrl = item.images[0].url;
    name = item.name;
    itemUrl = `/artist/${item.id}`;
  }

  return (
    <Link className={classes.link} to={itemUrl}>
      <li className={classes.container}>
        <img src={imageUrl} alt={name} />
        {name}
      </li>
    </Link>
  );
};
