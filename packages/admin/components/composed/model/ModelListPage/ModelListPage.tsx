import React from "react";
import type { ReactNode } from "react";
import { graphql } from "react-relay";
import startCase from "lodash/startCase";
import { useTranslation } from "react-i18next";
import { OperationType } from "relay-runtime";
import { useUID } from "react-uid";
import ModelPageCountActions from "../ModelPageCountActions";
import ModelPagination from "../ModelPagination";
import { Connectionish } from "types/graphql-helpers";
import ModelList from "components/composed/model/ModelList";
import ModelListActions from "components/composed/model/ModelListActions";
import type { ModelListProps } from "components/composed/model/ModelList";
import type { ModelListActionsProps } from "components/composed/model/ModelListActions";
import { QueryVariablesContext } from "contexts";
import { PageHeader } from "components/layout";
import { useIsMobile, useMaybeFragment, useViewPreference } from "hooks";
import { ViewOptions } from "utils/view-options";
import CurrentSearchFilters from "components/composed/search/CurrentSearchFilters";
import SearchWithFilters from "components/composed/search/SearchWithFilters";
import { ModelListPageFragment$key } from "@/relay/ModelListPageFragment.graphql";
import { ModelListPageSearchFragment$key } from "@/relay/ModelListPageSearchFragment.graphql";

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
    header?: ReactNode;
    showSearch?: boolean;
    searchData?: ModelListPageSearchFragment$key | null;
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
  showSearch,
  data,
  searchData,
  ...modelListProps
}: ModelListPageProps<T, U, V>) {
  const { t } = useTranslation();

  const instance = useMaybeFragment<U>(fragment, data);

  const searchScope = useMaybeFragment(searchFragment, searchData);

  const [selectedView, setView] = useViewPreference(
    `nglp::${modelName}.listView`
  );

  const isMobile = useIsMobile();

  // Lists should always display as grid on mobile
  const view = isMobile ? ViewOptions.grid : selectedView;

  // List ID needed for view controls to reference table or grid area
  const listId = useUID();

  const pageHeader = modelName
    ? startCase(t(`glossary.${modelName}`, { count: 2 }))
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
        search={showSearch && <SearchWithFilters data={searchScope} />}
      />
      {searchScope && <CurrentSearchFilters data={searchScope} />}
      <QueryVariablesContext.Consumer>
        {({ queryVariables, setQueryVariables }) => (
          <>
            <ModelPageCountActions data={instance} />
            <ModelList<T, U, V>
              {...modelListProps}
              data={data}
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

const searchFragment = graphql`
  fragment ModelListPageSearchFragment on SearchScope {
    ...CurrentSearchFiltersFragment
    ...SearchWithFiltersFragment
  }
`;
