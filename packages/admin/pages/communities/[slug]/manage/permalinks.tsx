import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPermalinksList from "components/composed/permalinks/EntityPermalinksList";
import type { permalinksManageSlugCommunityPermalinksQuery as Query } from "@/relay/permalinksManageSlugCommunityPermalinksQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityPermalinks({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <EntityPermalinksList data={community} headerStyle="secondary" />
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

CommunityPermalinks.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query permalinksManageSlugCommunityPermalinksQuery($slug: Slug!) {
    community(slug: $slug) {
      ...EntityPermalinksListFragment
    }
  }
`;

export default CommunityPermalinks;
