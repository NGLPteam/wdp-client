import { useRouter } from "next/router";

export function useRoutePage(): string | number {
  const router = useRouter();
  const routerPage = parseInt(router.query.page as string) || 1;
  return routerPage;
}

export default useRoutePage;
