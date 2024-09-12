import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { OrderingPageParams } from "@/types/page";
import { orderingCommunityMetadataQuery as Query } from "@/relay/orderingCommunityMetadataQuery.graphql";
import type { Metadata, ResolvingMetadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default async function generateOrderingMetadata(
  props: OrderingPageParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = props.params.slug;
  const identifier = props.params.ordering;

  const { data } =
    (await fetchQuery<Query>(query, {
      slug,
      identifier,
    })) ?? {};

  const community = data?.community;

  const ordering = community?.ordering;

  const title =
    ordering?.name && community?.title
      ? `${ordering?.name} - ${community?.title}`
      : undefined;

  return {
    title: title,
    openGraph: {
      url: `${BASE_URL}communitys/${slug}/browse/${identifier}`,
    },
  };
}

const query = graphql`
  query orderingCommunityMetadataQuery($slug: Slug!, $identifier: String!) {
    community(slug: $slug) {
      title
      ordering(identifier: $identifier) {
        name
      }
    }
  }
`;
