import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityLinksList from "components/composed/links/EntityLinksList";
import type { linksManageSlugItemsQuery as Query } from "@/relay/linksManageSlugItemsQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageLinks({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? <EntityLinksList data={item} headerStyle="secondary" /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["links"]} modelName="link" {...props} />
);

ManageLinks.getLayout = getLayout;

export default ManageLinks;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query linksManageSlugItemsQuery($slug: Slug!, $page: Int!) {
    item(slug: $slug) {
      ...EntityLinksListFragment
    }
  }
`;
