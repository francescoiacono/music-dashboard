import { ArtistAlbums } from "./ArtistAlbums/ArtistAlbums";
import { ArtistTopTracks } from "./ArtistTopTracks/ArtistTopTracks";
import { RelatedArtists } from "./RelatedArtists/RelatedArtists";
import { ArtistGenerics } from "./ArtistGenerics/ArtistGenerics";
import { useParams } from "react-router-dom";

export const ArtistInfo = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Artist ID not found</div>;
  }

  return (
    <>
      <ArtistGenerics id={id} />
      <div style={{ display: "flex", gap: "2rem" }}>
        <ArtistTopTracks id={id} />
        <RelatedArtists id={id} />
      </div>
      <ArtistAlbums id={id} />
    </>
  );
};
