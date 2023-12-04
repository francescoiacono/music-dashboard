import classes from "./LoginButton.module.scss";

export const LoginButton = () => {
  return (
    <a
      className={classes.loginButton}
      href="http://localhost:8000/api/auth/login"
    >
      Login to Spotify
    </a>
  );
};
