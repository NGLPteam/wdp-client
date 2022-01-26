import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import AppLayout from "components/global/AppLayout";
import { AnnouncementSlugCollectionQuery as Query } from "@/relay/AnnouncementSlugCollectionQuery.graphql";
import EntityAnnouncementLayoutFactory from "components/factories/EntityAnnouncementLayoutFactory";

export default function AnnouncementPage() {
  const slug = useRouteSlug();
  const router = useRouter();
  const announcementSlug = routeQueryArrayToString(router.query.announcement);

  return slug && announcementSlug ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, announcementSlug }}
    >
      {({ data }) => (
        <AppLayout data={data} communityData={data?.collection?.community}>
          <EntityAnnouncementLayoutFactory data={data?.collection} />
        </AppLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query AnnouncementSlugCollectionQuery(
    $slug: Slug!
    $announcementSlug: Slug!
  ) {
    collection(slug: $slug) {
      ...EntityAnnouncementLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
    ...AppLayoutFragment
  }
`;
