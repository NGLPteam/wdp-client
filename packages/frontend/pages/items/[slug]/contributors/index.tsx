import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { ItemContributionsBlock } from "components/composed/contribution/ContributionsBlock";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { contributorsSlugItemQuery as Query } from "@/relay/contributorsSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <EntityLayoutFactory data={data?.item}>
            <ItemContributionsBlock
              data={data?.item?.contributions}
              background="neutral00"
            />
          </EntityLayoutFactory>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query contributorsSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      community {
        ...CommunityLayoutFragment
      }
      contributions {
        ...ItemContributionsBlockFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
