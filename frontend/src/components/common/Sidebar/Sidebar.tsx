import React from "react";
import { useAuth } from "../../../providers";
import { UserInformation } from "./UserInformation";
import { LoginButton } from "../LoginButton/LoginButton";
import classes from "./Sidebar.module.scss";

export const Sidebar = React.memo(() => {
  const { user } = useAuth();

  return (
    <aside className={classes.wrapper}>
      {user && <UserInformation profile={user} />}
      <nav>
        <ul>
          {!user && (
            <li>
              <LoginButton />
            </li>
          )}
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/top-artists">Top Artists</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
});
