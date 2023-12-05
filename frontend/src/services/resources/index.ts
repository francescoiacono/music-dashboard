import { RequestOptions } from '@spotify-dash/types';
import apiFetch from '../../api';
import { buildQueryString } from '../../utils/string';

/**
 * Fetches a resource from the API
 *
 * @param url - The url to fetch the resource from
 * @returns The resource
 *
 */

export const fetchResource = async <T>(
  url: string,
  options?: RequestOptions
): Promise<T> => {
  const queryString = buildQueryString(options || {});
  const updatedUrl = `${url}${queryString}`;

  console.log('updatedUrl', updatedUrl);

  const response = await apiFetch(updatedUrl, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data as T;
};
