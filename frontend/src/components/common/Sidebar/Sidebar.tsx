import { useAuth } from "../../../hooks";
import { Link } from "../Link/Link";
import { UserInformation } from "./UserInformation";

export const Sidebar = () => {
  const { isAuthenticated, userProfile } = useAuth();

  return (
    <aside>
      {isAuthenticated && userProfile && (
        <UserInformation profile={userProfile} />
      )}
      <nav>
        <ul>
          {!isAuthenticated ? (
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
