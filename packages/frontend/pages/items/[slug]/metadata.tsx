import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import AppLayout from "components/global/AppLayout";
import { metadataSlugItemQuery as Query } from "@/relay/metadataSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import EntityMetadataFactory from "components/factories/EntityMetadataFactory";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <AppLayout data={data} communityData={data?.item?.community}>
          <EntityLayoutFactory data={data?.item}>
            <EntityMetadataFactory data={data?.item} />
          </EntityLayoutFactory>
        </AppLayout>
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
      community {
        ...AppLayoutCommunityFragment
      }
    }
    ...AppLayoutFragment
  }
`;
