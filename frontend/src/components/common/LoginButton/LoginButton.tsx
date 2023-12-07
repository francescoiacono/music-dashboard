import { Link } from "react-router-dom";
import { BASE_URL } from "../../../api/config";
import classes from "./LoginButton.module.scss";

export const LoginButton = () => {
  return (
    <Link className={classes.loginButton} to={`${BASE_URL}/auth/login`}>
      Login to Spotify
    </Link>
  );
};
