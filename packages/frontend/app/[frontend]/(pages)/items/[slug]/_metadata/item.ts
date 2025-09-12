import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { BasePageParams } from "@/types/page";
import { itemMetadataQuery as Query } from "@/relay/itemMetadataQuery.graphql";
import { getTruncatedText } from "@/helpers";
import type { Metadata, ResolvingMetadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default async function generateItemMetadata(
  props: BasePageParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = props.params.slug;

  const { data } =
    (await fetchQuery<Query>(query, {
      slug: props.params.slug,
    })) ?? {};

  const item = data?.item;

  const title = item?.title;

  // TODO: Resolve markdown
  const description = item?.about?.content
    ? getTruncatedText(item.about.content)
    : undefined;

  const image = item?.heroImage?.image?.webp?.url
    ? {
        url: item.heroImage.image.webp.url,
        alt: item.heroImageMetadata?.alt ?? "",
      }
    : item?.thumbnail?.image?.webp?.url
      ? {
          url: item.thumbnail.image.webp.url,
          alt: item.thumbnailMetadata?.alt ?? "",
        }
      : null;

  const images = image?.url ? [image] : [];

  // optionally access and extend (rather than replace) parent metadata
  const previousOpenGraph = (await parent)?.openGraph || { images: [] };
  const previousImages = previousOpenGraph?.images || [];

  return {
    ...(title && { title }),
    ...(description && { description }),
    openGraph: {
      ...previousOpenGraph,
      ...(title && { title }),
      url: `${BASE_URL}items/${slug}`,
      images: [...images, ...previousImages],
    },
  };
}

const query = graphql`
  query itemMetadataQuery($slug: Slug!) {
    item(slug: $slug) {
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
      abstract: schemaProperty(fullPath: "abstract") {
        ... on FullTextProperty {
          fullText {
            content
          }
        }
      }
    }
  }
`;
