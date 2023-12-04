import { UserProfile } from "@spotify-dash/types";

interface UserInformationProps {
  profile: UserProfile;
}

export const UserInformation: React.FC<UserInformationProps> = ({
  profile,
}) => {
  return (
    <div>
      <img src={profile.images[0].url} alt="User avatar" />
      <p>{profile.display_name}</p>
      <p>{profile.country}</p>
      <p>{profile.email}</p>
    </div>
  );
};
