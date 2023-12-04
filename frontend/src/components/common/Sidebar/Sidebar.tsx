import { useAuth } from "../../../providers";
import { Link } from "../Link/Link";
import { UserInformation } from "./UserInformation";

export const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside>
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
