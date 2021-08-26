import useSWR from "swr";
import api from "../services/api";

export function useFetch<T = any, Error = any> (url: string) {
  const {data, error, mutate } = useSWR<T, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };

}