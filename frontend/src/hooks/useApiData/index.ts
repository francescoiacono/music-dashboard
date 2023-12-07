import { RequestOptions } from "@spotify-dash/types";
import { resourcesService } from "../../services";
import useSWR from "swr";

const createFetcher = <T>(url: string, options?: RequestOptions) => {
  return async (): Promise<T> => {
    const response = await resourcesService.fetchResource<T>(url, options);
    return response;
  };
};

export const useApiResource = <T>(url: string, options?: RequestOptions) => {
  const fetcher = createFetcher<T>(url, options);
  const serializedOptions = JSON.stringify(options);
  const swrKey = [url, serializedOptions];
  const { data, error } = useSWR<T, Error>(swrKey, fetcher);

  return { data, loading: !error && !data, error };
};
