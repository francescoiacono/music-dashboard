import { ArtistAlbums } from "./ArtistAlbums/ArtistAlbums";
import { ArtistTopTracks } from "./ArtistTopTracks/ArtistTopTracks";
import { RelatedArtists } from "./RelatedArtists/RelatedArtists";
import { ArtistGenerics } from "./ArtistGenerics/ArtistGenerics";
import { useParams } from "react-router-dom";
import classes from "./ArtistInfo.module.scss";

export const ArtistInfo = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Artist ID not found</div>;
  }

  return (
    <>
      <ArtistGenerics id={id} />
      <div className={classes.row}>
        <ArtistTopTracks id={id} />
        <RelatedArtists id={id} />
      </div>
      <ArtistAlbums id={id} />
    </>
  );
};
