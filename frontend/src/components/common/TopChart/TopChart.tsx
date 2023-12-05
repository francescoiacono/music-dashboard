import { Artist, RequestOptions, Track } from '@spotify-dash/types';
import { useApiResource } from '../../../hooks';
import { useEffect } from 'react';
import { ChartItem } from './ChartItem/ChartItem';

interface TopChartProps {
  type: 'tracks' | 'artists';
}

export const TopChart: React.FC<TopChartProps> = ({ type }) => {
  const options: RequestOptions = {
    limit: 10,
    time_range: 'long_term',
    offset: 0,
  };

  const endpoint = type === 'tracks' ? '/tracks/top' : '/artists/top';

  const {
    data: items,
    loading,
    error,
    fetchAll: fetchData,
  } = useApiResource<Track[] | Artist[]>(endpoint);

  useEffect(() => {
    fetchData(options);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!items) return <div>No {type}</div>;

  return (
    <ol>
      {items.length > 0 &&
        items.map((item: Track | Artist) => (
          <ChartItem key={item.id} item={item} />
        ))}
    </ol>
  );
};
