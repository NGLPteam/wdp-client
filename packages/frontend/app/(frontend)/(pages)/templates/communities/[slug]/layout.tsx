import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNamePortal from "components/composed/community/CommunityName/Portal";
import HeroTemplate from "@/components/templates/Hero";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCommunityTemplateQuery as Query } from "@/relay/layoutCommunityTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CommunityLayout({
  children,
  params: { slug },
}: BasePageParams & PropsWithChildren) {
  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  const {
    layouts: { hero },
  } = community;

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityPickerPortal data={community} />
      <CommunityNamePortal data={community} />
      <CommunityNavBar data={community} entityData={community} />
      {hero && <HeroTemplate data={hero} />}
      {children}
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query layoutCommunityTemplateQuery($slug: Slug!) {
    community(slug: $slug) {
      layouts {
        hero {
          ...HeroTemplateFragment
        }
      }
      ...CommunityNavBarFragment
      ...CommunityNavBarEntityFragment
      ...PortalCommunityPickerFragment
      ...PortalCommunityNameFragment
    }
  }
`;
