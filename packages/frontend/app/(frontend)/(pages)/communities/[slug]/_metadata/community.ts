import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { BasePageParams } from "@/types/page";
import { communityMetadataQuery as Query } from "@/relay/communityMetadataQuery.graphql";
import { getTruncatedText } from "@/helpers";
import type { Metadata, ResolvingMetadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default async function generateCommunityMetadata(
  props: BasePageParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = props.params.slug;

  const { data } =
    (await fetchQuery<Query>(query, {
      slug: props.params.slug,
    })) ?? {};

  const community = data?.community;

  const title = community?.title;

  // TODO: Resolve markdown
  const description = community?.about?.content
    ? getTruncatedText(community.about.content)
    : undefined;

  const image = community?.heroImage?.image?.webp?.url
    ? {
        url: community.heroImage.image.webp.url,
        alt: community.heroImageMetadata?.alt ?? "",
      }
    : community?.thumbnail?.image?.webp?.url
      ? {
          url: community.thumbnail.image.webp.url,
          alt: community.thumbnailMetadata?.alt ?? "",
        }
      : null;

  const images = image?.url ? [image] : [];

  // optionally access and extend (rather than replace) parent metadata
  const previousOpenGraph = (await parent)?.openGraph || { images: [] };
  const previousImages = previousOpenGraph?.images || [];

  return {
    title,
    ...(description && { description }),
    openGraph: {
      ...previousOpenGraph,
      ...(title && { title }),
      url: `${BASE_URL}communitys/${slug}`,
      images: [...images, ...previousImages],
    },
  };
}

const query = graphql`
  query communityMetadataQuery($slug: Slug!) {
    community(slug: $slug) {
      title
      heroImage {
        image: large {
          webp {
            url
          }
        }
      }
      heroImageMetadata {
        alt
      }
      thumbnail {
        image: large {
          webp {
            url
          }
        }
      }
      thumbnailMetadata {
        alt
      }
      about: schemaProperty(fullPath: "about") {
        ... on MarkdownProperty {
          content
        }
      }
    }
  }
`;
