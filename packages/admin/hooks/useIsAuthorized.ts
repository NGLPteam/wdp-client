import { useMemo } from "react";
import useAuthContext from "./useAuthContext";
import { useViewerContext } from "hooks";
import { normalizeArray } from "helpers";

/**
 * Determine if the user is authorized to perform an action.
 * Pass in allowedActions to compare against an array of actions.
 * Leave empty to compare against global viewer actions.
 *
 * @returns boolean
 */
export const useIsAuthorized = ({
  actions,
  allowedActions,
}: useIsAuthorizedProps) => {
  // Global viewer permissions
  const { allowedActions: viewerAllowedActions } = useViewerContext();
  // Entity level permissions
  const { allowedActions: entityAllowedActions } = useAuthContext();

  return useMemo(() => {
    const checkActions = normalizeArray(actions);
    const permissions = entityAllowedActions
      ? [...viewerAllowedActions, ...entityAllowedActions]
      : viewerAllowedActions;
    const actionsList = allowedActions || permissions;

    return actionsList?.some((action) => checkActions.includes(action));
  }, [viewerAllowedActions, entityAllowedActions, allowedActions, actions]);
};

export interface useIsAuthorizedProps {
  actions: string[] | string | null;
  allowedActions?: string[] | readonly string[];
}

export default useIsAuthorized;
