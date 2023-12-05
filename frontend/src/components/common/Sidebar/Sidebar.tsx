import React from 'react';
import { useAuth } from '../../../providers';
import { UserInformation } from './UserInformation';
import { LoginButton } from '../LoginButton/LoginButton';
import classes from './Sidebar.module.scss';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';

export const Sidebar = React.memo(() => {
  const { user } = useAuth();

  return (
    <aside className={classes.wrapper}>
      {user ? <UserInformation profile={user} /> : <LoginButton />}
      <NavigationLinks />
    </aside>
  );
});
