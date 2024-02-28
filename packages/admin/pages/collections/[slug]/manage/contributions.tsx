import { graphql } from "relay-runtime";

import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import type { contributionsManageSlugCollectionsPagesQuery as Query } from "@/relay/contributionsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionContributions({ data }: Props) {
  return (
    <CollectionContributionList<Query>
      nameColumn="contributor"
      data={data?.collection?.contributions}
      headerStyle="secondary"
    />
  );
}

type Props = {
  data: Query["response"];
};

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      useRouteHeader={false}
      query={query}
      refetchTags={["contributions"]}
      {...props}
    />
  );
};
CollectionContributions.getLayout = getLayout;

const query = graphql`
  query contributionsManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      contributions(page: $page, perPage: 20) {
        ...CollectionContributionListFragment
      }
    }
  }
`;

export default CollectionContributions;
