import { graphql } from "relay-runtime";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import ItemList from "components/composed/item/ItemList";
import type { GetLayout } from "@wdp/lib/types/page";
import type { itemsSlugCollectionsPagesQuery as Query } from "__generated__/itemsSlugCollectionsPagesQuery.graphql";

function CollectionChildItems({ data }: Props) {
  return (
    <ItemList<Query>
      searchData={data?.collection?.search}
      data={data?.collection?.items}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      query={query}
      refetchTags={["items"]}
      {...props}
    />
  );
};
CollectionChildItems.getLayout = getLayout;

export default CollectionChildItems;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query itemsSlugCollectionsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $collectionSlug: Slug!
    $schema: [String!]
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
      search(visibility: ALL, maxDepth: 1) {
        ...ItemListSearchFragment
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
