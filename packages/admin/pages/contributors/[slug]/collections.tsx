import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import type { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorCollectionContributions({ queryRef }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <CollectionContributionList
      data={contributor.collectionContributions}
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

ContributorCollectionContributions.getLayout = getLayout;

export default ContributorCollectionContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsSlugContributorsPagesQuery(
    $slug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $slug) {
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
