import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { ResolvingMetadata, Metadata } from "next";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCommunityQuery as Query } from "@/relay/layoutCommunityQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import AppBody from "@/components/global/AppBody";
import { CommunityContextProvider } from "@/contexts/CommunityContext";
import generateCommunityMetadata from "./_metadata/community";

export async function generateMetadata(
  props: BasePageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generateCommunityMetadata(props, parent);
}

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
      <CommunityContextProvider data={community}>
        <AppBody data={data}>
          <CommunityNavBar data={community} entityData={community} />
          {children}
        </AppBody>
      </CommunityContextProvider>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query layoutCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityNavBarFragment
      ...CommunityNavBarEntityFragment
      ...CommunityContextFragment
    }
    ...AppBodyFragment
  }
`;
