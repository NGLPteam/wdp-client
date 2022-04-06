/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
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
