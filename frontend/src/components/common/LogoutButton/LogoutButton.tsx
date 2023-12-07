import { Link } from "react-router-dom";
import { BASE_URL } from "../../../api/config";
import classes from "./LogoutButton.module.scss";

export const LogoutButton = () => {
  return (
    <Link className={classes.logoutButton} to={`${BASE_URL}/auth/logout`}>
      Log Out
    </Link>
  );
};
