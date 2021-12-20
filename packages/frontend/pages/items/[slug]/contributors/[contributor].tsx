import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import CommunityLayout from "components/composed/community/CommunityLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import ContributorDetailBlock from "components/composed/contributor/ContributorDetailBlock";
import { ContributorSlugItemQuery as Query } from "@/relay/ContributorSlugItemQuery.graphql";

export default function ItemPage() {
  const router = useRouter();
  const { slug: slugQuery, contributor: contributorQuery } = router.query;
  const slug = routeQueryArrayToString(slugQuery);
  const contributor = routeQueryArrayToString(contributorQuery);

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, contributor }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <EntityLayoutFactory data={data?.item}>
            <ContributorDetailBlock data={data?.contributor} />
          </EntityLayoutFactory>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query ContributorSlugItemQuery($slug: Slug!, $contributor: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment

      community {
        ...CommunityLayoutFragment
      }
    }

    contributor(slug: $contributor) {
      ...ContributorDetailBlockFragment
    }

    ...CommunityLayoutAppFragment
  }
`;
