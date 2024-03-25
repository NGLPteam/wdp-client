import { useParams } from "next/navigation";
import routeQueryArrayToString from "../helpers/routeQueryArrayToString";

export function useRoutePageSlug(): string | undefined | null {
  const { page } = useParams();
  return routeQueryArrayToString(page);
}

export default useRoutePageSlug;
