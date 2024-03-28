import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNamePortal from "components/composed/community/CommunityName/Portal";
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
      <CommunityPickerPortal data={community} />
      <CommunityNamePortal data={community} />
      <CommunityNavBar data={community} entityData={community} />
      {children}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityNavBarFragment
      ...CommunityNavBarEntityFragment
      ...PortalCommunityPickerFragment
      ...PortalCommunityNameFragment
    }
  }
`;
