/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import TableContext from "../contexts/TableContext";

/**
 * Access the user context
 *
 * @returns PageContext state
 */
const useTableContext = () => {
  const state = useContext(TableContext);
  return state;
};

export default useTableContext;
