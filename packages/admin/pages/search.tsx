import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useIsAuthenticated, useSearchQueryVars } from "hooks";
import SearchLayout from "components/composed/search/SearchLayout";
import { query } from "components/composed/search/SearchLayout/SearchLayout";
import { SearchLayoutQuery as Query } from "@/relay/SearchLayoutQuery.graphql";

export default function Search() {
  const isAuth = useIsAuthenticated();

  const searchQuery = useSearchQueryVars();

  return isAuth ? (
    <QueryTransitionWrapper<Query> query={query} variables={searchQuery}>
      {({ queryRef }) => queryRef && <SearchLayout queryRef={queryRef} />}
    </QueryTransitionWrapper>
  ) : null;
}
