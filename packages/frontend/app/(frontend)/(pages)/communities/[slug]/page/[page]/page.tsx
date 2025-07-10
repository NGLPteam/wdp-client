import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityPageLayout from "components/composed/community/CommunityPageLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesCommunityPageQuery as Query } from "@/relay/pageTemplatesCommunityPageQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export async function generateStaticParams() {
  return [];
}

export default async function CommunityPagePage({ params }: BasePageParams) {
  const { slug, page: pageSlug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    pageSlug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityPageLayout data={community?.page} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplatesCommunityPageQuery($slug: Slug!, $pageSlug: String!) {
    community(slug: $slug) {
      page(slug: $pageSlug) {
        ...CommunityPageLayoutFragment
      }
    }
  }
`;
