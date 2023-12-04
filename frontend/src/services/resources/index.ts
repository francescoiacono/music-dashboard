import { RequestOptions } from '@spotify-dash/types';
import apiFetch from '../../api';

/**
 * Fetches a single resource from the API
 *
 * @param url - The url to fetch the resource from
 * @returns The resource
 *
 */

export const fetchResource = async <T>(url: string): Promise<T> => {
  const response = await apiFetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data as T;
};

/**
 * Fetches all resources from the API
 *
 * @param url - The url to fetch the resources from
 * @param options - The options to pass to the API
 * @returns an array of resources
 *
 */

export const fetchAllResources = async <T>(
  url: string,
  options: RequestOptions
): Promise<T> => {
  const { limit, offset, time_range } = options;
  const updatedUrl = `${url}?limit=${limit}&offset=${offset}&time_range=${time_range}`;

  const response = await apiFetch(updatedUrl, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: T = await response.json();
  return data;
};
