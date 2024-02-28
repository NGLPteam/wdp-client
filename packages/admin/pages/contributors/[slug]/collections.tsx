import { graphql } from "relay-runtime";

import ContributorLayoutQuery from "components/composed/contributor/ContributorLayoutQuery";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import type { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorCollectionContributions({ data }: Props) {
  return (
    <CollectionContributionList<Query>
      data={data?.contributor?.collectionContributions}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ContributorLayoutQuery<Query, Props>
      query={query}
      {...props}
      refetchTags={["contributions"]}
    />
  );
};
ContributorCollectionContributions.getLayout = getLayout;

export default ContributorCollectionContributions;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsSlugContributorsPagesQuery(
    $contributorSlug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutQueryFragment
      ... on OrganizationContributor {
        collectionContributions(page: $page, perPage: 20, order: $order) {
          ...CollectionContributionListFragment
        }
      }
      ... on PersonContributor {
        collectionContributions(page: $page, perPage: 20, order: $order) {
          ...CollectionContributionListFragment
        }
      }
    }
  }
`;
