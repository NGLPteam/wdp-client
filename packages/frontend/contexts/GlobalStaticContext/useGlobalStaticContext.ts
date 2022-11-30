/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import GlobalStaticContext from "./GlobalStaticContext";

/**
 * Access the user context
 *
 * @returns GlobalStaticContext state
 */
const useGlobalContext = () => {
  const state = useContext(GlobalStaticContext);
  return state;
};

export default useGlobalContext;
