import { useEffect } from 'react';
import { useApiResource } from '../../../../hooks';
import { Artist } from '@spotify-dash/types';

interface ArtistInfoProps {
  id: string;
}

export const ArtistInfo: React.FC<ArtistInfoProps> = ({ id }) => {
  const {
    data: artist,
    loading,
    error,
    fetchOne: fetchArtist,
  } = useApiResource<Artist>(`/artists/${id}`);

  useEffect(() => {
    fetchArtist();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!artist) return <div>No artist</div>;

  return (
    <div>
      <div>
        <img src={artist.images[0].url} alt={artist.name} />
        <h1>{artist.name}</h1>
      </div>
      <div>
        <h2>Genres</h2>
        <ul>
          {artist.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Popularity</h2>
        <p>{artist.popularity}</p>
      </div>

      <div>
        <h2>Followers</h2>
        <p>{artist.followers.total}</p>
      </div>
    </div>
  );
};
