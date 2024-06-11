import { useMemo } from "react";
import { useCookies } from "react-cookie";

export default function useToken(): [
  string | null,
  (token: string | null) => void
] {
  const [cookies, setCookie] = useCookies(["token"]);
  return useMemo(() => {
    return [
      cookies.token ?? null,
      (token: string | null) => {
        setCookie("token", token);
      },
    ];
  }, [cookies.token, setCookie]);
}
