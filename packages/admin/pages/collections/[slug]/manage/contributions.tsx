import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import type { contributionsManageSlugCollectionsPagesQuery as Query } from "@/relay/contributionsManageSlugCollectionsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionContributions({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <CollectionContributionList
      nameColumn="contributor"
      data={collection.contributions}
      headerStyle="secondary"
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["contributions"]}
    modelName="collection_contribution"
    {...props}
  />
);
type Props = {
  queryRef: PreloadedQuery<Query>;
};

CollectionContributions.getLayout = getLayout;

const query = graphql`
  query contributionsManageSlugCollectionsPagesQuery(
    $slug: Slug!
    $page: Int!
    $order: ContributionOrder
  ) {
    collection(slug: $slug) {
      contributions(page: $page, perPage: 20, order: $order) {
        ...CollectionContributionListFragment
      }
    }
  }
`;

export default CollectionContributions;
