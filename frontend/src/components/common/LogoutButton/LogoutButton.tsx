import { Link } from 'react-router-dom';
import classes from './LogoutButton.module.scss';

export const LogoutButton = () => {
  return (
    <Link
      className={classes.logoutButton}
      to='http://localhost:8000/api/auth/logout'
    >
      Log Out
    </Link>
  );
};
