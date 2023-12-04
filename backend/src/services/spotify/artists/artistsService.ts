import axios from "axios";

interface RequestOptions {
  limit: number;
  offset: number;
  time_range: string;
}

export const fetchTopArtists = async (
  accessToken: string,
  options: RequestOptions
) => {
  const { limit, offset, time_range } = options;

  const { data } = await axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&offset=${offset}&time_range=${time_range}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log(data);

  return data;
};
