/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import UserContext from "contexts/UserContext";

/**
 * Access the user context
 *
 * @returns UserContext state
 */
const useUserContext = () => {
  const state = useContext(UserContext);
  return state;
};

export default useUserContext;

/**
 * Determine if a user action is allowed
 *
 * @param string[]
 * @returns boolean
 */
export const useIsUserActionAllowed = (actions: string[]) => {
  const { allowedActions } = useContext(UserContext);

  return useMemo(
    () => allowedActions?.some((action) => actions.includes(action)),
    [allowedActions, actions]
  );
};
