import { LogoutButton } from "../..";
import { useAuth } from "../../../../providers";
import classes from "./UserInformation.module.scss";

export const UserInformation = ({}) => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <img src={user.images[1].url} alt="User avatar" />
        <div className={classes.text}>
          <p>Hello, {user.display_name}!</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
