import { useCallback } from "react";
import { useRouter } from "next/router";

function useDrawerQuery() {
  const { query, push } = useRouter();

  const removeDialogQuery = useCallback(() => {
    delete query.drawer;
    push({ query: { ...query } }, undefined, { shallow: true });
  }, [query, push]);

  return {
    type:
      query?.drawer && typeof query.drawer === "string" ? query.drawer : null,
    model: query?.model,
    removeDialogQuery,
    hideOnClickOutside: query?.hideOnClickOutside,
  };
}

export default useDrawerQuery;
