import { useRouter } from "next/router";
import get from "lodash/get";

/**
 * Returns router query value
 *
 * @param paramName
 * @returns the value of the param
 */
export default function useGetQuery(paramName: string): string | string[] {
  const router = useRouter();

  return get(router, `query.${paramName}`);
}
