import { useRouter } from "next/router";
import { routeQueryArrayToString } from "routes";

export function useRouteSlug(): string | undefined | null {
  const router = useRouter();
  const { slug } = router.query;
  return routeQueryArrayToString(slug);
}

export default useRouteSlug;
