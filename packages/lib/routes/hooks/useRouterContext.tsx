/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import RouterContext from "../contexts/RouterContext";

/**
 * Access the page context
 *
 * @returns PageContext state
 */
const useRouterContext = () => {
  const state = useContext(RouterContext);
  return state;
};

export default useRouterContext;
