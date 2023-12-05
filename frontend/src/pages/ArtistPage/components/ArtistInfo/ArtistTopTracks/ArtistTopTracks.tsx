import { Track } from '@spotify-dash/types';
import { useApiResource } from '../../../../../hooks';
import { useEffect } from 'react';

interface ArtistTopTracksProps {
  id: string;
}

export const ArtistTopTracks: React.FC<ArtistTopTracksProps> = ({ id }) => {
  const {
    data: tracks,
    loading,
    error,
    fetchData: fetchArtistTopTracks,
  } = useApiResource<Track[]>(`/artists/${id}/top-tracks`);

  useEffect(() => {
    fetchArtistTopTracks();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tracks) return <div>No tracks</div>;

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.name} - {track.album.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
