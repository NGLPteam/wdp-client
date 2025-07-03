import { useTranslation } from "react-i18next";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useIsAuthenticated, useSearchQueryVars } from "hooks";
import SearchLayout from "components/composed/search/SearchLayout";
import { query } from "components/composed/search/SearchLayout/SearchLayout";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import HtmlHead from "components/global/HtmlHead";
import { SearchLayoutQuery as Query } from "@/relay/SearchLayoutQuery.graphql";

export default function Search() {
  const isAuth = useIsAuthenticated();
  const { t } = useTranslation();

  const searchQuery = useSearchQueryVars();

  const resultsI18nKey = searchQuery.query
    ? "search.results_for_name"
    : "search.results";

  return (
    <>
      <HtmlHead title="common.search" />
      {isAuth ? (
        <QueryTransitionWrapper<Query> query={query} variables={searchQuery}>
          {({ queryRef }) => {
            return queryRef ? (
              <SearchLayout queryRef={queryRef} />
            ) : (
              <ModelListPageSkeleton
                header={t(resultsI18nKey, {
                  name: searchQuery.query,
                })}
              />
            );
          }}
        </QueryTransitionWrapper>
      ) : null}
    </>
  );
}
