import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";
import { AuthContextProvider } from "contexts/AuthContext";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import type { orderManageSlugOrderingsPagesQuery as Query } from "@/relay/orderManageSlugOrderingsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionOrder({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <EntityOrderingList data={collection} headerStyle="secondary" />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["orderings"]} {...props} />
);

CollectionOrder.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query orderManageSlugOrderingsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...EntityOrderingListFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionOrder;
