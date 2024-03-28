import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCommunityQuery as Query } from "@/relay/layoutCommunityQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CommunityLayout({
  children,
  params,
}: BasePageParams & PropsWithChildren) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityNavBar data={community} entityData={community} />
      {children}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...AppLayoutCommunityFragment
      ...CommunityNavBarFragment
      ...AppLayoutEntityFragment
      ...CommunityNavBarEntityFragment
    }
  }
`;
