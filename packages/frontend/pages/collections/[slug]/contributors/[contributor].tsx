import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import CommunityLayout from "components/composed/community/CommunityLayout";
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
        <CommunityLayout
          data={data}
          communityData={data?.collection?.community}
        >
          <EntityLayoutFactory data={data?.collection}>
            <ContributorDetailBlock
              backRoute="collection"
              data={data?.contributor}
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
  query ContributorSlugCollectionQuery($slug: Slug!, $contributor: Slug!) {
    collection(slug: $slug) {
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
