import axios from "axios";
import { RequestOptions, Track } from "@spotify-dash/types";

export const fetchTopTracks = async (
  accessToken: string,
  options: RequestOptions
): Promise<Track[]> => {
  const { limit, offset, time_range } = options;
  const { data } = await axios.get(
    `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&offset=${offset}&time_range=${time_range}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data.items;
};
