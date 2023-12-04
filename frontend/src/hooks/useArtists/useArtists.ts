import { Artist, RequestOptions } from "@spotify-dash/types";
import { useState } from "react";
import { resourcesService } from "../../services";

// TODO: Create a useResource hook that takes in a url and returns the resource

export const useArtists = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Fetches the user's top artists from the Spotify API and sets the state
   *
   * @returns void
   */

  const fetchArtists = async () => {
    try {
      setLoading(true);
      const options: RequestOptions = {
        time_range: "long_term",
        limit: 10,
        offset: 0,
      };
      const artists = await resourcesService.fetchAllResources<Artist[]>(
        "/artists/top",
        options
      );

      setArtists(artists);
    } catch (error) {
      setError(error as Error["message"]);
    } finally {
      setLoading(false);
    }
  };

  return {
    artists,
    loading,
    error,
    fetchArtists,
  };
};
