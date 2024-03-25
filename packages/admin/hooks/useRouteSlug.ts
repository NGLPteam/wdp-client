import { useRouter } from "next/router";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";

export default function useRouteSlug(): string | undefined | null {
  const router = useRouter();
  const { slug } = router.query;
  return routeQueryArrayToString(slug);
}
