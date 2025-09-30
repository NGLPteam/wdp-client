import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPermalinksList from "components/composed/permalinks/EntityPermalinksList";
import type { permalinksManageSlugCollectionPermalinksQuery as Query } from "@/relay/permalinksManageSlugCollectionPermalinksQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionPermalinks({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <EntityPermalinksList data={collection} headerStyle="secondary" />
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

CollectionPermalinks.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query permalinksManageSlugCollectionPermalinksQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityPermalinksListFragment
    }
  }
`;

export default CollectionPermalinks;
