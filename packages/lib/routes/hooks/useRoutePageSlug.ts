import { useRouter } from "next/router";
import routeQueryArrayToString from "../helpers/routeQueryArrayToString";

export function useRoutePageSlug(): string | undefined | null {
  const router = useRouter();
  const { page } = router.query;
  return routeQueryArrayToString(page);
}

export default useRoutePageSlug;
