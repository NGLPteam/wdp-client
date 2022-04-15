/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { QueryVariablesContext } from "../contexts";

/**
 * Access the QueryWatcher state context.
 *
 * @returns QueryVariablesContext state
 */
const useQueryVariablesContext = () => {
  const state = useContext(QueryVariablesContext);
  return state;
};

export default useQueryVariablesContext;
