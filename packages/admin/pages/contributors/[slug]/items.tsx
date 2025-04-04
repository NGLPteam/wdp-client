import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import type { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorItemContributions({ queryRef, ...layoutProps }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ContributorLayout {...layoutProps} data={contributor}>
      <ItemContributionList
        data={contributor?.itemContributions}
        headerStyle="secondary"
      />
    </ContributorLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["contributions"]} {...props} />
);

ContributorItemContributions.getLayout = getLayout;

export default ContributorItemContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query itemsSlugContributorsPagesQuery(
    $contributorSlug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutFragment
      ... on OrganizationContributor {
        itemContributions(page: $page, perPage: 20, order: $order) {
          ...ItemContributionListFragment
        }
      }
      ... on PersonContributor {
        itemContributions(page: $page, perPage: 20, order: $order) {
          ...ItemContributionListFragment
        }
      }
    }
  }
`;
