import { UserProfile } from "@spotify-dash/types";
import { LogoutButton } from "../..";
import classes from "./UserInformation.module.scss";

interface UserInformationProps {
  profile: UserProfile;
}

export const UserInformation: React.FC<UserInformationProps> = ({
  profile,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <img src={profile.images[1].url} alt="User avatar" />
        <div className={classes.text}>
          <h3>Welcome, {profile.display_name}!</h3>
          <p>{profile.email}</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
