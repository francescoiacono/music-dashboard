import { RequestOptions } from '@spotify-dash/types';
import { useState } from 'react';
import { resourcesService } from '../../services';

export const useApiResource = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Fetches data from the API and sets the state accordingly.
   *
   * @param options - Options to pass to the API call.
   */

  const fetchData = async (options?: RequestOptions) => {
    setLoading(true);
    try {
      const response = await resourcesService.fetchResource<T>(url, options);
      setData(response);
    } catch (error) {
      setError(error as Error['message']);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
