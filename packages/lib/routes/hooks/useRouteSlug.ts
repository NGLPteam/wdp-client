import { useParams } from "next/navigation";
import routeQueryArrayToString from "../helpers/routeQueryArrayToString";

export function useRouteSlug(): string | undefined | null {
  const { slug } = useParams();
  return routeQueryArrayToString(slug);
}

export default useRouteSlug;
