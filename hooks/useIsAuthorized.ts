import { useMemo } from "react";
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
  const { allowedActions: viewerAllowedActions } = useViewerContext();

  return useMemo(() => {
    const checkActions = normalizeArray(actions);
    const actionsList = allowedActions || viewerAllowedActions;

    return actionsList?.some((action) => checkActions.includes(action));
  }, [viewerAllowedActions, allowedActions, actions]);
};

export interface useIsAuthorizedProps {
  actions: string[] | string | null;
  allowedActions?: string[] | readonly string[];
}

export default useIsAuthorized;
