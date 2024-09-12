import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { SubPageParams } from "@/types/page";
import { pageItemPageMetadataQuery as Query } from "@/relay/pageItemPageMetadataQuery.graphql";
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

  const item = data?.item;

  const page = item?.page;

  const title =
    page?.title && item?.title ? `${page?.title} - ${item?.title}` : undefined;

  return {
    title: title,
    openGraph: {
      url: `${BASE_URL}items/${slug}/page/${pageSlug}`,
    },
  };
}

const query = graphql`
  query pageItemPageMetadataQuery($slug: Slug!, $pageSlug: String!) {
    item(slug: $slug) {
      title
      page(slug: $pageSlug) {
        title
      }
    }
  }
`;
