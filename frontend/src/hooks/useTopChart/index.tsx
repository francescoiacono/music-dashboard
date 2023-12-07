import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useApiResource } from "../useApiData";
import { stringUtils } from "../../utils";
import { Artist, RequestOptions, Track } from "@spotify-dash/types";
import { ChartTypes } from "../../types";

export const useTopChart = (type: ChartTypes) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [options, setOptions] = useState<RequestOptions>({
    limit: parseInt(searchParams.get("limit") ?? "10"),
    time_range: searchParams.get("time_range") || "long_term",
    offset: parseInt(searchParams.get("offset") ?? "0"),
  });

  const {
    data: items,
    loading,
    error,
  } = useApiResource<Artist[] | Track[]>(`/${type}/top`, options);

  const updateQueryParams = useCallback(() => {
    const params = stringUtils.buildQueryString(options);
    setSearchParams(params);
  }, [options, setSearchParams]);

  useEffect(() => {
    updateQueryParams();
  }, [options, updateQueryParams]);

  return { items, options, loading, error, setOptions };
};
