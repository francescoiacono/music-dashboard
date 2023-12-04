import { RequestOptions } from '@spotify-dash/types';
import { useState } from 'react';
import { resourcesService } from '../../services';

export const useApiResource = <T>(url: string, options: RequestOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAll = async () => {
    setLoading(true);
    try {
      const response = await resourcesService.fetchAllResources<T>(
        url,
        options
      );
      setData(response);
    } catch (error) {
      setError(error as Error['message']);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchAll };
};
