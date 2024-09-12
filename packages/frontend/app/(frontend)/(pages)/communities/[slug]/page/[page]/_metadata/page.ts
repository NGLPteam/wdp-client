import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { SubPageParams } from "@/types/page";
import { pageCommunityMetadataQuery as Query } from "@/relay/pageCommunityMetadataQuery.graphql";
import type { Metadata, ResolvingMetadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default async function generatePageMetadata(
  props: SubPageParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = props.params.slug;
  const pageSlug = props.params.page;

  const { data } =
    (await fetchQuery<Query>(query, {
      slug,
      pageSlug,
    })) ?? {};

  const community = data?.community;

  const page = community?.page;

  const title =
    page?.title && community?.title
      ? `${page?.title} - ${community?.title}`
      : undefined;

  return {
    title: title,
    openGraph: {
      url: `${BASE_URL}communitys/${slug}/page/${pageSlug}`,
    },
  };
}

const query = graphql`
  query pageCommunityMetadataQuery($slug: Slug!, $pageSlug: String!) {
    community(slug: $slug) {
      title
      page(slug: $pageSlug) {
        title
      }
    }
  }
`;
