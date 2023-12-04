import { Artist } from "@spotify-dash/types";
import apiFetch from "../../api";

interface RequestOptions {
  limit: number;
  offset: number;
  time_range: string;
}

export const fetchTopArtists = async (options: RequestOptions) => {
  const { limit, offset, time_range } = options;

  try {
    const res = await apiFetch(
      `/artists/top?limit=${limit}&offset=${offset}&time_range=${time_range}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    return data.artists as Artist[];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
