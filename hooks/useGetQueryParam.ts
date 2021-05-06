import { useRouter } from "next/router"; 
import { flattenParam } from "utils/strings";

/**
 * This hook is designed to deal with the fact that params from
 * Next's router return `string | string[]`, when we probably just
 * want a string (especially for page slugs)
 *
 * @param paramName
 * @returns the value of the param
 */
export default function useGetQueryParam(paramName: string): string {
  const router = useRouter();

  return flattenParam(router.query[paramName]);
}