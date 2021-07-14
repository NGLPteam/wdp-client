import { useMemo } from "react";
import { useViewerContext } from "hooks";
import { normalizeArray } from "helpers";

// I would probably lean toward a single, flexible interface for auth checks. Eg: useAuthorizationCheck(ability, object) and have object be flexible. If object is a set of objects, the ability could be checked against each of them. If object is a single object, the ability is checked against that object. If object is null, then it's a global ability check.

/**
 * Determine if a user action is allowed
 *
 * @returns boolean
 */
export const useIsAuthorized = ({ actions }: useIsAuthorizedProps) => {
  const { allowedActions } = useViewerContext();
  const checkActions = normalizeArray(actions);

  return useMemo(
    () => allowedActions?.some((action) => checkActions.includes(action)),
    [allowedActions, checkActions]
  );
};

interface useIsAuthorizedProps {
  actions: string[] | string | null;
}

export default useIsAuthorized;
