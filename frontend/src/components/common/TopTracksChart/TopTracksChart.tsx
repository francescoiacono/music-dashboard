import { useEffect } from 'react';
import { useApiResource } from '../../../hooks/useApiData';
import { Track, RequestOptions } from '@spotify-dash/types';
import { ChartItem } from './ChartItem/ChartItem';

export const TopTracksChart = () => {
  const options: RequestOptions = {
    limit: 10,
    time_range: 'long_term',
    offset: 0,
  };

  const {
    data: tracks,
    loading,
    error,
    fetchAll: fetchTracks,
  } = useApiResource<Track[]>('/tracks/top', options);

  useEffect(() => {
    fetchTracks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tracks) return <div>No Tracks</div>;

  return (
    <ol>
      {tracks.length > 0 &&
        tracks.map((t) => <ChartItem track={t} key={t.id} />)}
    </ol>
  );
};
