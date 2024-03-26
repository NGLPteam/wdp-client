import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityPageLayout from "components/composed/community/CommunityPageLayout";
import AppLayout from "components/global/AppLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCommunityPageQuery as Query } from "@/relay/pageCommunityPageQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CommunityPage({ params }: BasePageParams) {
  const { slug, page: pageSlug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    pageSlug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout communityData={community} entityData={community}>
        <CommunityPageLayout data={community?.page} />
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCommunityPageQuery($slug: Slug!, $pageSlug: String!) {
    community(slug: $slug) {
      page(slug: $pageSlug) {
        ...CommunityPageLayoutFragment
      }
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
    }
  }
`;
