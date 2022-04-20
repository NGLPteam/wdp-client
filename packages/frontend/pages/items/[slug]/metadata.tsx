import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { metadataSlugItemQuery as Query } from "@/relay/metadataSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import EntityMetadataFactory from "components/factories/EntityMetadataFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <ItemLayoutQuery data={data}>
          <EntityLayoutFactory data={data?.item}>
            <EntityMetadataFactory data={data?.item} />
          </EntityLayoutFactory>
        </ItemLayoutQuery>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query metadataSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...EntityMetadataFactoryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
