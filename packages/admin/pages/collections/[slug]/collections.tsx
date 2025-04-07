import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionList from "components/composed/collection/CollectionList";
import Layout from "./_layout";
import type { collectionsManageSlugCollectionsPagesQuery as Query } from "__generated__/collectionsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionChildCollections({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <CollectionList
      collections={collection.collections}
      search={collection.search}
      headerStyle="secondary"
      hideHeader
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["collections"]} {...props} />
);

CollectionChildCollections.getLayout = getLayout;

export default CollectionChildCollections;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsManageSlugCollectionsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $slug: Slug!
    $schema: [String!]
  ) {
    collection(slug: $slug) {
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
