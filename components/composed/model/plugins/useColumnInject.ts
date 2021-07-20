import genericColumns from "../helpers/columns";

const useColumnInject = (hooks) => {
  hooks.allColumns.push((columns, { instance }) => {
    const { injectColumns: injectColumnNames } = instance;
    const injectColumns = injectColumnNames.map(
      (columnType) => genericColumns[columnType]
    );
    const [first, ...rest] = columns;

    return [first, ...injectColumns, ...rest];
  });
};

useColumnInject.pluginName = "useColumnInject";

export default useColumnInject;
