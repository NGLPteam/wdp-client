import { graphql } from "relay-runtime";
import type { GetLayout } from "@wdp/lib/types/page";
import type { itemsSlugItemsPagesQuery as Query } from "__generated__/itemsSlugItemsPagesQuery.graphql";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemList from "components/composed/item/ItemList";

function ItemChildItems({ data }: Props) {
  return (
    <ItemList<Query>
      data={data?.item?.items}
      searchData={data?.item?.search}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      query={query}
      {...props}
      refetchTags={["items"]}
    />
  );
};
ItemChildItems.getLayout = getLayout;

export default ItemChildItems;

type Props = {
  data: Query["response"];
  refetchTags: string[];
};

const query = graphql`
  query itemsSlugItemsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $itemSlug: Slug!
    $schema: [String!]
  ) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
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
