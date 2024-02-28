import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";
import SearchResultList from "../SearchResultList";

export default function SearchLayout({ data }: Props) {
  const searchData = useMaybeFragment(fragment, data);

  return (
    <section className="a-bg-neutral00">
      <SearchResultList data={searchData?.search} />
    </section>
  );
}

interface Props {
  data?: SearchLayoutFragment$key | null;
}

const fragment = graphql`
  fragment SearchLayoutFragment on Searchable
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
    schema: { type: "[String!]", defaultValue: [] }
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
