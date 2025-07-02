import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { ResolvingMetadata, Metadata } from "next";
import HeroTemplate from "@/components/templates/Hero";
import ProcessingCheck from "@/components/templates/ProcessingCheck";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCommunityTemplateQuery as Query } from "@/relay/layoutCommunityTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import AppBody from "@/components/global/AppBody";
import { CommunityContextProvider } from "@/contexts/CommunityContext";
import generateCommunityMetadata from "@/app/(frontend)/(pages)/communities/[slug]/_metadata/community";

export async function generateMetadata(
  props: BasePageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generateCommunityMetadata(props, parent);
}

export default async function CommunityLayout({
  children,
  params: { slug },
}: BasePageParams & PropsWithChildren) {
  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  const { layouts } = community;

  const showNavBar =
    layouts?.hero?.template?.definition?.enableDescendantBrowsing;

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityContextProvider data={community}>
        <AppBody data={data}>
          <ProcessingCheck data={layouts} entityType="community">
            {showNavBar && (
              <CommunityNavBar data={community} entityData={community} />
            )}
            {layouts.hero && <HeroTemplate data={layouts.hero} />}
            {children}
          </ProcessingCheck>
        </AppBody>
      </CommunityContextProvider>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query layoutCommunityTemplateQuery($slug: Slug!) {
    community(slug: $slug) {
      layouts {
        hero {
          template {
            definition {
              enableDescendantBrowsing
            }
          }
          ...HeroTemplateFragment
        }
        ...ProcessingCheckFragment
      }
      ...CommunityNavBarFragment
      ...CommunityNavBarEntityFragment
      ...CommunityContextFragment
    }
    ...AppBodyFragment
  }
`;
