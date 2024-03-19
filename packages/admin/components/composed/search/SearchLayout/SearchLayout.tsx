import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { SearchLayoutQuery } from "@/relay/SearchLayoutQuery.graphql";
import SearchResultList from "../SearchResultList";

export default function SearchLayout({ queryRef }: Props) {
  const searchData = usePreloadedQuery<SearchLayoutQuery>(query, queryRef);

  return (
    <section className="a-bg-neutral00">
      <SearchResultList data={searchData?.search} />
    </section>
  );
}

interface Props {
  queryRef: PreloadedQuery<SearchLayoutQuery>;
}

export const query = graphql`
  query SearchLayoutQuery(
    $query: String
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $order: EntityOrder
    $schema: [String!]
  ) {
    search(visibility: ALL) {
      ...SearchResultListFragment
        @arguments(
          query: $query
          page: $page
          predicates: $predicates
          order: $order
          schema: $schema
        )
    }
  }
`;
