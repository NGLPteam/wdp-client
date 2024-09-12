import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { SubPageParams } from "@/types/page";
import { pageCollectionMetadataQuery as Query } from "@/relay/pageCollectionMetadataQuery.graphql";
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

  const collection = data?.collection;

  const page = collection?.page;

  const title =
    page?.title && collection?.title
      ? `${page?.title} - ${collection?.title}`
      : undefined;

  return {
    title: title,
    openGraph: {
      url: `${BASE_URL}collections/${slug}/page/${pageSlug}`,
    },
  };
}

const query = graphql`
  query pageCollectionMetadataQuery($slug: Slug!, $pageSlug: String!) {
    collection(slug: $slug) {
      title
      page(slug: $pageSlug) {
        title
      }
    }
  }
`;
