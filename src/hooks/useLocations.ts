import { useFetch } from "@mantine/hooks";
import { useMemo } from "react";
import { ApiHookReturns, ApiResponse } from "../utils/api";

export type Location = {
  id: number;
  nama: string;
};

export default function useLocations(): ApiHookReturns<Location[]> {
  const { data, loading, error } = useFetch<ApiResponse<Location[]>>(
    `${import.meta.env.VITE_BACKEND_URL}/locations`
  );

  return useMemo(() => {
    if (error) return [null, false, error];
    if (loading || data == null) return [null, true, null];
    if (data.error) return [null, false, data.error];
    return [data.data!, false, null];
  }, [data, error, loading]);
}
