/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import PageContext from "contexts/PageContext";

/**
 * Access the user context
 *
 * @returns PageContext state
 */
const usePageContext = () => {
  const state = useContext(PageContext);
  return state;
};

export default usePageContext;
