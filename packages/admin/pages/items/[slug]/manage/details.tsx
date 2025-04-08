import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import type { detailsManageSlugItemsQuery as Query } from "@/relay/detailsManageSlugItemsQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageDetails({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? <ItemUpdateForm data={item} /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["schema", "parent"]}
    showLoadingCircle
    {...props}
  />
);

ManageDetails.getLayout = getLayout;

export default ManageDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsManageSlugItemsQuery($slug: Slug!) {
    item(slug: $slug) {
      ...ItemUpdateFormFragment
    }
  }
`;
