import React from "react";

interface TableContextType {
  columnCount?: number;
  setColumnCount?: React.Dispatch<React.SetStateAction<number>>;
}

const TableContext = React.createContext<TableContextType>({});

export default TableContext;
