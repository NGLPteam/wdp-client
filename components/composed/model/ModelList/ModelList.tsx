import React from "react";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import { NoResultsMessage } from "components/atomic";
import ModelTable from "components/composed/model/ModelTable";
import ModelGrid from "components/composed/model/ModelGrid";
import ModelPageCountActions from "components/composed/model/ModelPageCountActions";
import ModelPagination from "components/composed/model/ModelPagination";
import type { PaginatedConnectionish } from "components/composed/model/ModelListPage";
import useModelList from "components/composed/model/ModelList/hooks/useModelList";
import type { UseModelListProps } from "components/composed/model/ModelList/hooks/useModelList";
import { ModelNames } from "helpers";
import { useTranslation } from "react-i18next";
import { OperationType } from "relay-runtime";

export interface ModelListProps<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
> extends UseModelListProps<T, U, V> {
  view: DataViewOptions;
  modelName: Lowercase<ModelNames>;
}

function ModelList<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
>({
  queryVariables,
  setQueryVariables,
  modelName,
  selectable = false,
  data,
  view,
  columns,
  actions,
}: ModelListProps<T, U, V>) {
  const { t } = useTranslation("glossary");
  const title = modelName ? t(modelName, { count: 2 }) : "";

  // We can also retrieve `selection` from useModelList if we need it, which we eventually
  // will.
  const { modelGridOrTableProps } = useModelList<T, U, V>({
    queryVariables,
    setQueryVariables,
    columns,
    actions,
    data,
    selectable,
  });

  let ModelListType;
  switch (view) {
    case DataViewOptions.table:
      ModelListType = ModelTable;
      break;
    case DataViewOptions.grid:
      ModelListType = ModelGrid;
      break;
    default:
      ModelListType = null;
  }

  const hasRows = modelGridOrTableProps.rows.length > 0;

  return (
    <>
      <ModelPageCountActions data={data} />
      {hasRows && ModelListType ? (
        <>
          <ModelListType<V>
            title={title}
            selectable={selectable}
            {...modelGridOrTableProps}
          />
          <ModelPagination data={data} />
        </>
      ) : (
        <NoResultsMessage />
      )}
    </>
  );
}

export default ModelList;
