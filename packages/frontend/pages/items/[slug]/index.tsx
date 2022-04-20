import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { SlugItemQuery as Query } from "@/relay/SlugItemQuery.graphql";
import EntityContentLayoutFactory from "components/factories/EntityContentLayoutFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <ItemLayoutQuery data={data}>
          <EntityContentLayoutFactory data={data?.item} />
        </ItemLayoutQuery>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityContentLayoutFactoryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
