import React from "react";
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
import { useQueryStateContext } from "hooks";
import { ViewOptions } from "utils/view-options";

export interface ModelListProps<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
> extends UseModelListProps<T, U, V> {
  view: ViewOptions;
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
  disableSortBy,
}: ModelListProps<T, U, V>) {
  const { t } = useTranslation();
  const title = modelName ? t(modelName, { count: 2 }) : "";

  const queryState = useQueryStateContext();

  // We can also retrieve `selection` from useModelList if we need it, which we eventually
  // will.
  const { modelGridOrTableProps } = useModelList<T, U, V>({
    queryVariables,
    setQueryVariables,
    columns,
    actions,
    data,
    selectable,
    disableSortBy,
  });

  let ModelListType;
  switch (view) {
    case ViewOptions.table:
      ModelListType = ModelTable;
      break;
    case ViewOptions.grid:
      ModelListType = ModelGrid;
      break;
    default:
      ModelListType = null;
  }

  if (!ModelListType) return null;

  const hasRows = modelGridOrTableProps.rows.length > 0;
  return (
    <>
      <ModelPageCountActions data={data} />
      {queryState.completed && !hasRows ? (
        <NoResultsMessage />
      ) : (
        <>
          <ModelListType<V>
            title={title}
            selectable={selectable}
            {...modelGridOrTableProps}
          />
          <ModelPagination data={data || null} />
        </>
      )}
    </>
  );
}

export default ModelList;
