import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import type { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorCollectionContributions({
  queryRef,
  ...layoutProps
}: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ContributorLayout {...layoutProps} data={contributor}>
      <CollectionContributionList
        data={contributor.collectionContributions}
        headerStyle="secondary"
      />
    </ContributorLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["contributions"]} {...props} />
);

ContributorCollectionContributions.getLayout = getLayout;

export default ContributorCollectionContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsSlugContributorsPagesQuery(
    $contributorSlug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutFragment
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
