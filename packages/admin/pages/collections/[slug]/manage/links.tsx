import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityLinksList from "components/composed/links/EntityLinksList";
import type { linksManageCollectionsPagesQuery as Query } from "@/relay/linksManageCollectionsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionLinks({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <EntityLinksList data={collection} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["links"]} modelName="link" {...props} />
);

CollectionLinks.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query linksManageCollectionsPagesQuery($slug: Slug!, $page: Int!) {
    collection(slug: $slug) {
      ...EntityLinksListFragment
    }
  }
`;

export default CollectionLinks;
