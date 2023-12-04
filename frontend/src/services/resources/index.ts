import { RequestOptions } from "@spotify-dash/types";
import apiFetch from "../../api";

export const x = 0;

export const fetchResource = async <T>(url: string): Promise<T> => {
  const response = await apiFetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data as T;
};

export const fetchAllResources = async <T>(
  url: string,
  options: RequestOptions
): Promise<T> => {
  const { limit, offset, time_range } = options;
  const updatedUrl = `${url}?limit=${limit}&offset=${offset}&time_range=${time_range}`;

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
