import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import type { contributionsManageSlugItemsQuery as Query } from "@/relay/contributionsManageSlugItemsQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageContributions({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <ItemContributionList
      nameColumn="contributor"
      data={item.contributions}
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

ManageContributions.getLayout = getLayout;

export default ManageContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query contributionsManageSlugItemsQuery(
    $slug: Slug!
    $page: Int!
    $order: ContributionOrder
  ) {
    item(slug: $slug) {
      contributions(page: $page, perPage: 20, order: $order) {
        ...ItemContributionListFragment
      }
    }
  }
`;
