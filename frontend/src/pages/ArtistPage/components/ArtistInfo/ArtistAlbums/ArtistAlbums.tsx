import { Album, RequestOptions } from '@spotify-dash/types';
import { useApiResource } from '../../../../../hooks';
import { useEffect } from 'react';
import { AlbumItem } from './AlbumItem/AlbumItem';
import classes from './ArtistAlbums.module.scss';

interface ArtistAlbumsProps {
  id: string;
}

export const ArtistAlbums: React.FC<ArtistAlbumsProps> = ({ id }) => {
  const {
    data: albums,
    loading,
    error,
    fetchData: fetchAlbums,
  } = useApiResource<Album[]>(`/artists/${id}/albums`);

  useEffect(() => {
    fetchAlbums({ limit: 5 } as RequestOptions);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!albums) return <div>No albums</div>;

  return (
    <ul className={classes.wrapper}>
      <h2>Albums</h2>
      <div className={classes.albums}>
        {albums.map((album) => (
          <AlbumItem key={album.id} {...album} />
        ))}
      </div>
    </ul>
  );
};
