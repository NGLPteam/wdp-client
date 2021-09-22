import React from "react";
import type { ReactNode } from "react";
import { Connectionish } from "types/graphql-helpers";
import ModelList from "components/composed/model/ModelList";
import ModelListHeader from "components/composed/model/ModelListHeader";
import ModelListActions from "components/composed/model/ModelListActions";
import { ModelPaginationFragment$key } from "@/relay/ModelPaginationFragment.graphql";
import { ModelPageCountActionsFragment$key } from "@/relay/ModelPageCountActionsFragment.graphql";
import type { ModelListProps } from "components/composed/model/ModelList";
import type { ModelListActionsProps } from "components/composed/model/ModelListActions";
import { QueryVariablesContext } from "contexts";
import { OperationType } from "relay-runtime";
import PageHeader from "components/layout/PageHeader";
import { useViewPreference } from "hooks";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

export type PaginatedConnectionish = Connectionish &
  ModelPaginationFragment$key &
  ModelPageCountActionsFragment$key;

type ModelListPageProps<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown> = Record<string, unknown>
> = Omit<ModelListProps<T, U, V>, "view"> &
  Pick<ModelListActionsProps, "viewOptions"> &
  Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
    buttons?: ReactNode;
  };

function ModelListPage<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown>
>({
  modelName,
  buttons,
  viewOptions,
  headerStyle,
  hideHeader,
  ...modelListProps
}: ModelListPageProps<T, U, V>) {
  const [selectedView, setView] = useViewPreference(
    `nglp::${modelName}.listView`
  );

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
        selectedView={selectedView}
        setView={setView}
      />
      <QueryVariablesContext.Consumer>
        {({ queryVariables, setQueryVariables }) => (
          <ModelList<T, U, V>
            {...modelListProps}
            queryVariables={queryVariables}
            setQueryVariables={setQueryVariables}
            modelName={modelName}
            view={selectedView}
          />
        )}
      </QueryVariablesContext.Consumer>
    </section>
  );
}

export default ModelListPage;
