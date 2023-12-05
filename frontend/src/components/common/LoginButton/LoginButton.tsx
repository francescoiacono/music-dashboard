import { Link } from 'react-router-dom';
import classes from './LoginButton.module.scss';

export const LoginButton = () => {
  return (
    <Link
      className={classes.loginButton}
      to='http://localhost:8000/api/auth/login'
    >
      Login to Spotify
    </Link>
  );
};
