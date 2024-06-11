import { useShallowEffect } from "@mantine/hooks";
import { ApiHookReturns } from "../utils/api";

export default function useApi<T>(
  returns: ApiHookReturns<T>,
  effect: (data: T | null, loading: boolean, error: boolean) => void
) {
  useShallowEffect(() => {
    if (returns[2]) console.error(returns[2]);
    effect(returns[0], returns[1], !!returns[2]);
  }, [returns]);
}
