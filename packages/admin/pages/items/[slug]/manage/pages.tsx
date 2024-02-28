import { graphql } from "relay-runtime";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import type { pagesManageSlugItemsQuery as Query } from "@/relay/pagesManageSlugItemsQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManagePages({ data }: Props) {
  return <EntityPagesList<Query> data={data?.item} headerStyle="secondary" />;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["pages"]}
      {...props}
    />
  );
};
ManagePages.getLayout = getLayout;

export default ManagePages;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query pagesManageSlugItemsQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...EntityPagesListFragment
      ...ItemLayoutQueryFragment
    }
  }
`;
