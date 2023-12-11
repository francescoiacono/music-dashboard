import { RequestOptions } from "@spotify-dash/types";
import { resourcesService } from "../../services";
import useSWR from "swr";

const fetcher = async <T>(url: string, options?: RequestOptions) => {
  return await resourcesService.fetchResource<T>(url, options);
};

export const useApiResource = <T>(url: string, options?: RequestOptions) => {
  const serializedOptions = JSON.stringify(options);
  const swrKey = [url, serializedOptions];
  const { data, error } = useSWR<T, Error>(swrKey, () =>
    fetcher<T>(url, options)
  );

  return { data, loading: !error && !data, error };
};
