/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import ViewerContext from "contexts/ViewerContext";

/**
 * Access the user context
 *
 * @returns ViewerContext state
 */
const useViewerContext = () => {
  const state = useContext(ViewerContext);
  return state;
};

export default useViewerContext;

/**
 * Determine if a user action is allowed
 *
 * @param string[]
 * @returns boolean
 */
export const useIsUserActionAllowed = (actions: string[]) => {
  const { allowedActions } = useContext(ViewerContext);

  return useMemo(
    () => allowedActions?.some((action) => actions.includes(action)),
    [allowedActions, actions]
  );
};
