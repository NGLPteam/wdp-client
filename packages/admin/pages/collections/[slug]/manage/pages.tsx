import { graphql } from "relay-runtime";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import type { pagesManageSlugCollectionsPagesQuery as Query } from "@/relay/pagesManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionPages({ data }: Props) {
  return (
    <EntityPagesList<Query> data={data?.collection} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["pages"]}
      {...props}
    />
  );
};

CollectionPages.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query pagesManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...EntityPagesListFragment
      ...CollectionLayoutQueryFragment
    }
  }
`;

export default CollectionPages;
