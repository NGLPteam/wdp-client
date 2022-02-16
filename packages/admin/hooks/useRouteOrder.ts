import { useRouter } from "next/router";

export function useRouteOrder(): string | number {
  const router = useRouter();
  const routerPage = parseInt(router.query.order as string) || "RECENT";
  return routerPage;
}

export default useRouteOrder;
