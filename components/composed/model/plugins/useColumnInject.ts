import genericColumns from "../helpers/columns";
import type { Hooks, Row } from "react-table";

type GenericColumnTypes = keyof typeof genericColumns;

const useColumnInject = (hooks: Hooks) => {
  hooks.allColumns.push((columns, { instance }) => {
    const { injectColumns: injectColumnNames } = instance;
    const injectColumns = injectColumnNames.map(
      (columnType: GenericColumnTypes) => genericColumns[columnType]
    );
    const [first, ...rest] = columns;

    return [first, ...injectColumns, ...rest];
  });
};

useColumnInject.pluginName = "useColumnInject";

export default useColumnInject;
