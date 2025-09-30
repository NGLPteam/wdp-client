import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPermalinksList from "components/composed/permalinks/EntityPermalinksList";
import type { permalinksManageSlugItemPermalinksQuery as Query } from "@/relay/permalinksManageSlugItemPermalinksQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemPermalinks({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <EntityPermalinksList data={item} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["permalinks"]}
    modelName="permalink"
    {...props}
  />
);

ItemPermalinks.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query permalinksManageSlugItemPermalinksQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityPermalinksListFragment
    }
  }
`;

export default ItemPermalinks;
