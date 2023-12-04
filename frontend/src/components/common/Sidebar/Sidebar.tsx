import { useAuth } from "../../../providers";
import { Link } from "../Link/Link";
import { UserInformation } from "./UserInformation";
import classes from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside className={classes.wrapper}>
      {user && <UserInformation profile={user} />}
      <nav>
        <ul>
          {!user ? (
            <li>
              <Link to="http://localhost:8000/api/auth/login">Login</Link>
            </li>
          ) : (
            <li>
              <Link to="http://localhost:8000/api/auth/logout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};
