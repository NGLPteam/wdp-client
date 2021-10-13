import React from "react";
import { graphql } from "react-relay";
import type { ReactNode } from "react";
import startCase from "lodash/startCase";
import { useTranslation } from "react-i18next";
import { Connectionish } from "types/graphql-helpers";
import ModelList from "components/composed/model/ModelList";
import ModelListActions from "components/composed/model/ModelListActions";
import type { ModelListProps } from "components/composed/model/ModelList";
import type { ModelListActionsProps } from "components/composed/model/ModelListActions";
import { QueryVariablesContext } from "contexts";
import { OperationType } from "relay-runtime";
import { PageHeader } from "components/layout";
import { useIsMobile, useMaybeFragment, useViewPreference } from "hooks";
import { ViewOptions } from "utils/view-options";
import { useUID } from "react-uid";
import { ModelListPageFragment$key } from "@/relay/ModelListPageFragment.graphql";
import ModelPageCountActions from "../ModelPageCountActions";
import ModelPagination from "../ModelPagination";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

export type PaginatedConnectionish = Connectionish & ModelListPageFragment$key;

type ModelListPageProps<
  T extends OperationType,
  U extends PaginatedConnectionish,
  V extends Record<string, unknown> = Record<string, unknown>
> = Omit<ModelListProps<T, U, V>, "view"> &
  Pick<ModelListActionsProps, "viewOptions"> &
  Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
    buttons?: ReactNode;
    header?: string;
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
  header,
  ...modelListProps
}: ModelListPageProps<T, U, V>) {
  const { t } = useTranslation();

  const instance = useMaybeFragment<U>(fragment, modelListProps.data);

  const [selectedView, setView] = useViewPreference(
    `nglp::${modelName}.listView`
  );

  const isMobile = useIsMobile();

  // Lists should always display as grid on mobile
  const view = isMobile ? ViewOptions.grid : selectedView;

  // List ID needed for view controls to reference table or grid area
  const listId = useUID();

  const pageHeader = modelName
    ? startCase(t(`glossary.${modelName}.label`, { count: 2 }))
    : "";

  return (
    <section>
      <PageHeader
        title={header || pageHeader}
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
          <>
            <ModelPageCountActions data={instance} />
            <ModelList<T, U, V>
              {...modelListProps}
              data={modelListProps.data}
              queryVariables={queryVariables}
              setQueryVariables={setQueryVariables}
              modelName={modelName}
              view={view}
              listId={listId}
            />
            <ModelPagination data={instance} />
          </>
        )}
      </QueryVariablesContext.Consumer>
    </section>
  );
}

export default ModelListPage;

const fragment = graphql`
  fragment ModelListPageFragment on Paginated {
    ...ModelPageCountActionsFragment
    ...ModelPaginationFragment
  }
`;
