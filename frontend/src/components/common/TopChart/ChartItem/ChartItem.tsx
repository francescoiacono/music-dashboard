import { Artist, Track } from '@spotify-dash/types';
import classes from './ChartItem.module.scss';

interface ChartItemProps {
  item: Artist | Track;
}

export const ChartItem: React.FC<ChartItemProps> = ({ item }) => {
  let imageUrl: string;
  let name: string;
  if (typeof item === 'object' && 'album' in item) {
    imageUrl = item.album.images[0].url;
    name = `${item.name} - ${item.artists[0].name}`;
  } else {
    imageUrl = item.images[0].url;
    name = item.name;
  }

  return (
    <li className={classes.container}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  );
};
