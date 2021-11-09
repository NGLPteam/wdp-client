/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { QueryStateContext } from "../contexts";

/**
 * Access the QueryWatcher state context.
 *
 * @returns QueryStateContext state
 */
const useQueryStateContext = () => {
  const state = useContext(QueryStateContext);
  return state;
};

export default useQueryStateContext;
