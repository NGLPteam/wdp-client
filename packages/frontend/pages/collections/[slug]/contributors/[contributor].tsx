import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import ContributorDetailBlock from "components/composed/contributor/ContributorDetailBlock";
import { ContributorSlugCollectionQuery as Query } from "@/relay/ContributorSlugCollectionQuery.graphql";

export default function CollectionContributor() {
  const router = useRouter();
  const { slug: slugQuery, contributor: contributorQuery } = router.query;
  const slug = routeQueryArrayToString(slugQuery);
  const contributor = routeQueryArrayToString(contributorQuery);

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, contributor }}>
      {({ data }) => (
        <CommunityChildLayout
          data={data}
          communityData={data?.collection?.community}
        >
          <EntityLayoutFactory data={data?.collection}>
            <ContributorDetailBlock
              backRoute="collection"
              data={data?.contributor}
            />
          </EntityLayoutFactory>
        </CommunityChildLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query ContributorSlugCollectionQuery($slug: Slug!, $contributor: Slug!) {
    collection(slug: $slug) {
      ...EntityLayoutFactoryFragment
      community {
        ...CommunityHeroFragment
        ...CommunityChildLayoutFragment
      }
    }
    contributor(slug: $contributor) {
      ...ContributorDetailBlockFragment
    }
    ...CommunityChildLayoutAppFragment
  }
`;
