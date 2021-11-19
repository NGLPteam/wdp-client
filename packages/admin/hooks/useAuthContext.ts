/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import AuthContext from "contexts/AuthContext";

/**
 * Access the user context
 *
 * @returns AuthContext state
 */
const useAuthContext = () => {
  const state = useContext(AuthContext);
  return state;
};

export default useAuthContext;
