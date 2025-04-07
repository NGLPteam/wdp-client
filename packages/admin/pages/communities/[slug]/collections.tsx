import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { collectionsSlugCommunitiesPagesQuery as Query } from "__generated__/collectionsSlugCommunitiesPagesQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityChildCollections({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <CollectionList
      collections={community?.collections}
      search={community?.search}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["collections"]} {...props} />
);

CommunityChildCollections.getLayout = getLayout;

export default CommunityChildCollections;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsSlugCommunitiesPagesQuery(
    $order: EntityOrder
    $page: Int!
    $slug: Slug!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $schema: [String!]
  ) {
    community(slug: $slug) {
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
      search(visibility: ALL, maxDepth: 1) {
        ...CollectionListSearchFragment
          @arguments(
            query: $query
            page: $page
            predicates: $predicates
            order: $order
            hasQuery: $hasQuery
            schema: $schema
          )
      }
    }
  }
`;
