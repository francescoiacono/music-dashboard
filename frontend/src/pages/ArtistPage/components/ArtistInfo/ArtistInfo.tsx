import { useEffect } from 'react';
import { useApiResource } from '../../../../hooks';
import { Artist } from '@spotify-dash/types';

interface ArtistInfoProps {
  id: string;
}

export const ArtistInfo: React.FC<ArtistInfoProps> = ({ id }) => {
  const { data, loading, error, fetchOne } = useApiResource<Artist>(
    `/artists/${id}`
  );

  useEffect(() => {
    fetchOne();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>No artist</div>;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};
