import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { OrderingPageParams } from "@/types/page";
import { orderingCollectionMetadataQuery as Query } from "@/relay/orderingCollectionMetadataQuery.graphql";
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

  const collection = data?.collection;

  const ordering = collection?.ordering;

  const title =
    ordering?.name && collection?.title
      ? `${ordering?.name} - ${collection?.title}`
      : undefined;

  return {
    title: title,
    openGraph: {
      url: `${BASE_URL}collections/${slug}/browse/${identifier}`,
    },
  };
}

const query = graphql`
  query orderingCollectionMetadataQuery($slug: Slug!, $identifier: String!) {
    collection(slug: $slug) {
      title
      ordering(identifier: $identifier) {
        name
      }
    }
  }
`;
