import React from "react";
import Head from "next/head";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityHTMLHeadFragment$key } from "@/relay/EntityHTMLHeadFragment.graphql";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";

export default function EntityHTMLHead({ data }: Props) {
  const staticData = useGlobalStaticContext();
  const installationName =
    staticData?.globalConfiguration?.site?.installationName || "WDP";

  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  const title = `${entity.title} - ${installationName}`;

  const image = entity.heroImage?.storage
    ? entity.heroImage.medium?.webp
    : entity.thumbnail?.storage
    ? entity.thumbnail.medium?.webp
    : null;

  const imageMetadata = entity.heroImageMetadata || entity.thumbnailMetadata;

  return (
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {entity.summary && (
        <>
          <meta name="og:description" content={entity.summary} />
          <meta name="twitter:card" content={entity.summary} />
        </>
      )}

      {image?.url && (
        <>
          <meta name="og:image" content={image.url} />
          {image.width && (
            <meta property="og:image:width" content={String(image.width)} />
          )}
          {image.height && (
            <meta property="og:image:height" content={String(image.height)} />
          )}
          <meta name="twitter:image" content={image.url} />
          <meta name="og:image:alt" content={imageMetadata?.alt || ""} />
          <meta name="twitter:image:alt" content={imageMetadata?.alt || ""} />
        </>
      )}
    </Head>
  );
}

interface Props {
  data?: EntityHTMLHeadFragment$key | null;
}

const fragment = graphql`
  fragment EntityHTMLHeadFragment on AnyEntity {
    ... on Entity {
      title
      summary
      thumbnail {
        storage
        medium {
          webp {
            url
            width
            height
          }
        }
      }
      thumbnailMetadata {
        alt
      }
      heroImage {
        storage
        medium {
          webp {
            url
            width
            height
          }
        }
      }
      heroImageMetadata {
        alt
      }
    }
  }
`;
