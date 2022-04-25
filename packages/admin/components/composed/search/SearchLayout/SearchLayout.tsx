import React, { useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import SearchResultList from "../SearchResultList";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";
import { useSearchQueryVars } from "hooks";

export default function SearchLayout({ data, refetch }: Props) {
  const searchData = useMaybeFragment(fragment, data);

  const searchVars = useSearchQueryVars();

  const handleRefetch = useCallback(
    (vars = {}) => refetch({ ...vars }),
    [refetch]
  );

  useEffect(() => {
    handleRefetch(searchVars);
  }, [searchVars, handleRefetch]);

  return (
    <section className="a-bg-neutral00">
      <SearchResultList
        searchQuery={searchVars.query}
        data={searchData?.search}
      />
    </section>
  );
}

interface Props {
  data?: SearchLayoutFragment$key | null;
  refetch: (vars: Record<string, string>) => void;
  isLoading?: boolean;
}

const fragment = graphql`
  fragment SearchLayoutFragment on Searchable
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
  ) {
    search(visibility: ALL) {
      ...SearchResultListFragment
        @arguments(
          query: $query
          page: $page
          predicates: $predicates
          order: $order
        )
    }
  }
`;
