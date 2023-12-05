import { Artist } from '@spotify-dash/types';
import { useApiResource } from '../../../../../hooks';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface RelatedArtistsProps {
  id: string;
}

export const RelatedArtists: React.FC<RelatedArtistsProps> = ({ id }) => {
  const {
    data: artists,
    loading,
    error,
    fetchData: fetchRelatedArtists,
  } = useApiResource<Artist[]>(`/artists/${id}/related-artists`);

  useEffect(() => {
    fetchRelatedArtists();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!artists) return <div>No artists</div>;

  return (
    <div>
      <h2>Related Artists</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
