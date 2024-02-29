import { graphql } from "react-relay";
import startCase from "lodash/startCase";
import { useTranslation } from "react-i18next";
import { useId } from "react";
import { Connectionish } from "types/graphql-helpers";
import ModelList from "components/composed/model/ModelList";
import ModelListActions from "components/composed/model/ModelListActions";
import { PageHeader } from "components/layout";
import { useIsMobile, useMaybeFragment, useViewPreference } from "hooks";
import { ViewOptions } from "utils/view-options";
import CurrentSearchFilters from "components/composed/search/CurrentSearchFilters";
import SearchWithFilters from "components/composed/search/SearchWithFilters";
import Search from "components/composed/search/Search";
import { ModelListPageFragment$key } from "@/relay/ModelListPageFragment.graphql";
import { ModelListPageSearchFragment$key } from "@/relay/ModelListPageSearchFragment.graphql";
import ModelPagination from "../ModelPagination";
import ModelPageCountActions from "../ModelPageCountActions";
import type { ModelListActionsProps } from "components/composed/model/ModelListActions";
import type { ModelListProps } from "components/composed/model/ModelList";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

export type PaginatedConnectionish = Connectionish & ModelListPageFragment$key;

type ModelListPageProps<
  U extends PaginatedConnectionish,
  V extends Record<string, unknown> = Record<string, unknown>
> = Omit<ModelListProps<U, V>, "view"> &
  Pick<ModelListActionsProps, "viewOptions"> &
  Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
    buttons?: React.ReactNode;
    header?: React.ReactNode;
    showSearch?: boolean;
    hideFilters?: boolean;
    searchData?: ModelListPageSearchFragment$key | null;
  };

function ModelListPage<
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
  hideFilters,
  data,
  searchData,
  ...modelListProps
}: ModelListPageProps<U, V>) {
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
  const listId = useId();

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
        search={
          hideFilters ? (
            <Search />
          ) : (
            showSearch && <SearchWithFilters data={searchScope} />
          )
        }
      />
      {searchScope && <CurrentSearchFilters data={searchScope} />}
      <ModelPageCountActions data={instance} />
      <ModelList<U, V>
        {...modelListProps}
        data={data}
        modelName={modelName}
        view={view}
        listId={listId}
      />
      <ModelPagination data={instance} />
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
