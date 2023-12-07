import { useEffect } from "react";
import { FolderItem } from "./FolderItem/FolderItem";
import { Artist, Track } from "@spotify-dash/types";
import { Link } from "react-router-dom";
import { useApiResource } from "../../../../../hooks";
import classes from "./Folder.module.scss";

type FolderDataType = Artist | Track;

interface FolderProps {
  title: string;
  itemType: "artist" | "track";
}

export const Folder = ({ title, itemType }: FolderProps) => {
  const { data, loading, error, fetchData } = useApiResource<FolderDataType[]>(
    `/${itemType}s/top`
  );

  useEffect(() => {
    fetchData({ limit: 4 });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return null;

  return (
    <div className={classes.wrapper}>
      <h2>{title}</h2>
      <Link className={classes.link} to={`/top-${itemType}s`}>
        <div className={classes.folder}>
          {data.map((item, index) => (
            <FolderItem key={index} data={item} type={itemType} />
          ))}
        </div>
      </Link>
    </div>
  );
};
