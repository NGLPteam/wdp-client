import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { BasePageParams } from "@/types/page";
import { collectionMetadataQuery as Query } from "@/relay/collectionMetadataQuery.graphql";
import { getTruncatedText } from "@/helpers";
import type { Metadata, ResolvingMetadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default async function generateCollectionMetadata(
  props: BasePageParams,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = props.params.slug;

  const { data } =
    (await fetchQuery<Query>(query, {
      slug: props.params.slug,
    })) ?? {};

  const collection = data?.collection;

  const title = collection?.title;

  // TODO: Resolve markdown
  const description = collection?.about?.content
    ? getTruncatedText(collection.about.content)
    : undefined;

  const image = collection?.heroImage?.image?.webp?.url
    ? {
        url: collection.heroImage.image.webp.url,
        alt: collection.heroImageMetadata?.alt ?? "",
      }
    : collection?.thumbnail?.image?.webp?.url
      ? {
          url: collection.thumbnail.image.webp.url,
          alt: collection.thumbnailMetadata?.alt ?? "",
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
      url: `${BASE_URL}collections/${slug}`,
      images: [...images, ...previousImages],
    },
  };
}

const query = graphql`
  query collectionMetadataQuery($slug: Slug!) {
    collection(slug: $slug) {
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
