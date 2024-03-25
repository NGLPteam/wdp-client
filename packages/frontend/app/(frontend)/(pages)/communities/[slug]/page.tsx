import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityLandingLayout from "components/composed/community/CommunityLandingLayout";
import AppLayout from "components/global/AppLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCommunityQuery as Query } from "@/relay/pageCommunityQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CommunityPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout communityData={community} entityData={community}>
        <CommunityLandingLayout data={community} />
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
      ...CommunityLandingLayoutFragment
    }
  }
`;
