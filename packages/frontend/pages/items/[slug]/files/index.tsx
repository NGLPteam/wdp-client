import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { filesSlugItemQuery as Query } from "@/relay/filesSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import AssetsBlock from "components/composed/asset/AssetsBlock";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <ItemLayoutQuery data={data}>
          <EntityLayoutFactory data={data?.item}>
            <AssetsBlock data={data?.item?.assets} />
          </EntityLayoutFactory>
        </ItemLayoutQuery>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query filesSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      assets {
        ...AssetsBlockFragment
      }
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
