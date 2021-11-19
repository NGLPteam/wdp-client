import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { SlugCollectionsPageQuery as Query } from "@/relay/SlugCollectionsPageQuery.graphql";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import CollectionSlugRedirect from "components/composed/collection/CollectionSlugRedirect";

function CollectionSlug({ data }: Props) {
  return <CollectionSlugRedirect data={data?.collection} />;
}

type Props = {
  data: Query["response"];
};

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};

CollectionSlug.getLayout = getLayout;

export default CollectionSlug;

const query = graphql`
  query SlugCollectionsPageQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...CollectionSlugRedirectFragment
    }
  }
`;
