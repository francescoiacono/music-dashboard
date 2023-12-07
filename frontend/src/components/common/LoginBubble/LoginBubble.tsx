import { Link } from "react-router-dom";
import classes from "./LoginBubble.module.scss";
import { BASE_URL } from "../../../api/config";

export const LoginBubble = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <p className={classes.text}>
          Welcome! <br />
          Login to Spotify to get started!
        </p>
        <Link to={`${BASE_URL}/auth/login`}>
          <button className={classes.button}>Login with Spotify</button>
        </Link>
      </div>
    </div>
  );
};
