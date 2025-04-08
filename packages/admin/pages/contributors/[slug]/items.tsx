import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import type { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorItemContributions({ queryRef }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ItemContributionList
      data={contributor?.itemContributions}
      headerStyle="secondary"
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["contributions"]}
    modelName="item_contribution"
    {...props}
  />
);

ContributorItemContributions.getLayout = getLayout;

export default ContributorItemContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query itemsSlugContributorsPagesQuery(
    $slug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $slug) {
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
