import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { metadataSlugItemQuery as Query } from "@/relay/metadataSlugItemQuery.graphql";
import EntityMetadataFactory from "components/factories/EntityMetadataFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemMetadata({ data }: Props) {
  return <EntityMetadataFactory data={data?.item} />;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

ItemMetadata.getLayout = getLayout;

const query = graphql`
  query metadataSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityMetadataFactoryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
