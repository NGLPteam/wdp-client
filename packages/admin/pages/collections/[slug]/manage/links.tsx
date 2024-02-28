import { graphql } from "relay-runtime";

import EntityLinksList from "components/composed/links/EntityLinksList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import type { linksManageCollectionsPagesQuery as Query } from "@/relay/linksManageCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionLinks({ data }: Props) {
  if (!data || !data.collection) return null;
  return (
    <EntityLinksList<Query> data={data.collection} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["links"]}
      {...props}
    />
  );
};
CollectionLinks.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query linksManageCollectionsPagesQuery($collectionSlug: Slug!, $page: Int!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...EntityLinksListFragment
    }
  }
`;

export default CollectionLinks;
