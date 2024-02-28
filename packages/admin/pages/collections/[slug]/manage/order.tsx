import { graphql } from "relay-runtime";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";
import type { orderManageSlugOrderingsPagesQuery as Query } from "@/relay/orderManageSlugOrderingsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionOrder({ data }: Props) {
  if (!data || !data.collection) return null;
  return (
    <EntityOrderingList<Query> data={data.collection} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["orderings"]}
      {...props}
    />
  );
};
CollectionOrder.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query orderManageSlugOrderingsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...EntityOrderingListFragment
    }
  }
`;

export default CollectionOrder;
