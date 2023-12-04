import { useAuth } from "../../../providers";
import { UserInformation } from "./UserInformation";
import classes from "./Sidebar.module.scss";
import { LoginButton } from "../LoginButton/LoginButton";

export const Sidebar = () => {
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
        </ul>
      </nav>
    </aside>
  );
};
