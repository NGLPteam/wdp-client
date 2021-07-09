import { useCallback } from "react";
import { useRouter } from "next/router";

function useDrawerQuery() {
  const { query, push } = useRouter();

  const removeDialogQuery = useCallback(() => {
    delete query.drawer;
    push({ query: { ...query } }, undefined, { shallow: true });
  }, [query, push]);

  return {
    type: query?.drawer,
    entity: query?.entity,
    removeDialogQuery,
  };
}

export default useDrawerQuery;
