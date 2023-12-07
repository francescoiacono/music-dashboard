import { RequestOptions } from "@spotify-dash/types";
import { buildQueryString } from "../../utils/string";
import apiFetch from "../../api";

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

  const response = await apiFetch(updatedUrl, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data as T;
};
