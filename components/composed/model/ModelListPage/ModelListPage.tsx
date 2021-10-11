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
import { useIsMobile, useViewPreference } from "hooks";
import { ViewOptions } from "utils/view-options";
import { useUID } from "react-uid";

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

  const isMobile = useIsMobile();

  // Lists should always display as grid on mobile
  const view = isMobile ? ViewOptions.grid : selectedView;

  // List ID needed for view controls to reference table or grid area
  const listId = useUID();

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
        listId={listId}
      />
      <QueryVariablesContext.Consumer>
        {({ queryVariables, setQueryVariables }) => (
          <ModelList<T, U, V>
            {...modelListProps}
            queryVariables={queryVariables}
            setQueryVariables={setQueryVariables}
            modelName={modelName}
            view={view}
            listId={listId}
          />
        )}
      </QueryVariablesContext.Consumer>
    </section>
  );
}

export default ModelListPage;
