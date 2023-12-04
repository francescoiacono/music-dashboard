import { useEffect } from 'react';
import { ChartItem } from './ChartItem/ChartItem';
import { useApiResource } from '../../../hooks/useApiData';
import { Artist, RequestOptions } from '@spotify-dash/types';

export const TopArtistsChart = () => {
  const options: RequestOptions = {
    limit: 10,
    time_range: 'long_term',
    offset: 0,
  };

  const {
    data: artists,
    loading,
    error,
    fetchAll: fetchArtists,
  } = useApiResource<Artist[]>('/artists/top', options);

  useEffect(() => {
    fetchArtists();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!artists) return <div>No Artists</div>;

  return (
    <ol>
      {artists.length > 0 &&
        artists.map((artist) => <ChartItem key={artist.id} artist={artist} />)}
    </ol>
  );
};
