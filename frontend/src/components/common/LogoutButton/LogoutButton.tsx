import classes from "./LogoutButton.module.scss";

export const LogoutButton = () => {
  return (
    <a
      className={classes.logoutButton}
      href="http://localhost:8000/api/auth/logout"
    >
      Log Out
    </a>
  );
};
