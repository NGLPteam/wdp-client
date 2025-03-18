import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import type { contributionsManageSlugItemsQuery as Query } from "@/relay/contributionsManageSlugItemsQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageContributions({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <ItemContributionList
          nameColumn="contributor"
          data={item.contributions}
          headerStyle="secondary"
        />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["contributions"]} {...props} />
);

ManageContributions.getLayout = getLayout;

export default ManageContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query contributionsManageSlugItemsQuery(
    $itemSlug: Slug!
    $page: Int!
    $order: ContributionOrder
  ) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...AuthContextFragment
      contributions(page: $page, perPage: 20, order: $order) {
        ...ItemContributionListFragment
      }
    }
  }
`;
