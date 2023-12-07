import { Folder } from "./Folder/Folder";
import classes from "./Folders.module.scss";

export const Folders = () => {
  return (
    <div className={classes.folders}>
      <Folder title="Top Artists" itemType="artist" />
      <Folder title="Top Tracks" itemType="track" />
    </div>
  );
};
