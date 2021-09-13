import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Connectionish } from "types/graphql-helpers";
import ModelList from "components/composed/model/ModelList";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import ModelListHeader from "components/composed/model/ModelListHeader";
import ModelListActions from "components/composed/model/ModelListActions";
import { ModelPaginationFragment$key } from "@/relay/ModelPaginationFragment.graphql";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import type { ModelListProps } from "components/composed/model/ModelList";
import type { ModelListActionsProps } from "components/composed/model/ModelListActions";
import { QueryVariablesContext } from "contexts";
import { OperationType } from "relay-runtime";
import { useIsMobile } from "hooks";

export type PaginatedConnectionish = Connectionish &
  ModelPaginationFragment$key &
  ModelPageCountActionsFragment$key;

type ModelListPageProps<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown> = Record<string, unknown>
> = Omit<ModelListProps<T, U, V>, "view"> &
  Pick<ModelListActionsProps, "viewOptions"> & {
    defaultView?: ModelListActionsProps["active"];
    buttons?: ReactNode;
    headerStyle?: "primary" | "secondary";
    hideHeader?: boolean;
  };

function ModelListPage<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
>({
  modelName,
  buttons,
  viewOptions,
  defaultView,
  headerStyle,
  hideHeader,
  ...modelListProps
}: ModelListPageProps<T, U, V>) {
  const isMobile = useIsMobile();
  const [view, setView] = useState(defaultView || DataViewOptions.table);

  useEffect(() => {
    if (isMobile) setView(DataViewOptions.grid);
  }, [isMobile]);

  return (
    <section>
      <ModelListHeader
        modelName={modelName}
        buttons={buttons}
        headerStyle={headerStyle}
        hideHeader={hideHeader}
      />
      <ModelListActions
        viewOptions={viewOptions}
        active={view}
        setView={setView}
      />
      <QueryVariablesContext.Consumer>
        {({ queryVariables, setQueryVariables }) => (
          <ModelList<T, U, V>
            {...modelListProps}
            queryVariables={queryVariables}
            setQueryVariables={setQueryVariables}
            modelName={modelName}
            view={view}
          />
        )}
      </QueryVariablesContext.Consumer>
    </section>
  );
}

export default ModelListPage;
