import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";
import type { orderManageSlugOrderingsPagesQuery as Query } from "@/relay/orderManageSlugOrderingsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionOrder({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <EntityOrderingList data={collection} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["orderings"]}
    modelName="ordering"
    {...props}
  />
);

CollectionOrder.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query orderManageSlugOrderingsPagesQuery($slug: Slug!, $page: Int!) {
    collection(slug: $slug) {
      ...EntityOrderingListFragment
    }
  }
`;

export default CollectionOrder;
