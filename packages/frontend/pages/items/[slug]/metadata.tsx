import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { metadataSlugItemQuery as Query } from "@/relay/metadataSlugItemQuery.graphql";
import EntityMetadataLayoutFactory from "components/factories/EntityMetadataLayoutFactory";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <EntityMetadataLayoutFactory data={data?.item} />
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query metadataSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityMetadataLayoutFactoryFragment
      community {
        ...CommunityLayoutFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
