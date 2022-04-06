/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import GlobalContext from "contexts/GlobalContext";

/**
 * Access the user context
 *
 * @returns GlobalContext state
 */
const useGlobalContext = () => {
  const state = useContext(GlobalContext);
  return state;
};

export default useGlobalContext;
