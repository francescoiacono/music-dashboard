import { Link } from 'react-router-dom';
import classes from './NavigationLinks.module.scss';

const links = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'Top Artists',
    path: '/top-artists',
  },
  {
    name: 'Top Tracks',
    path: '/top-tracks',
  },
];

export const NavigationLinks = () => {
  return (
    <nav className={classes.wrapper}>
      <ul className={classes.links}>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
