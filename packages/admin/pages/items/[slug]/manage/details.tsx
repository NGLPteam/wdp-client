import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import type { detailsManageSlugItemsQuery as Query } from "@/relay/detailsManageSlugItemsQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageDetails({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <ItemUpdateForm data={item} />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["schema", "parent"]} {...props} />
);

ManageDetails.getLayout = getLayout;

export default ManageDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query detailsManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...ItemUpdateFormFragment
      ...AuthContextFragment
    }
  }
`;
