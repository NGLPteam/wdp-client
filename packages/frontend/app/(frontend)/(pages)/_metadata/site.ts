import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { BasePageParams } from "@/types/page";
import { siteMetadataQuery as Query } from "@/relay/siteMetadataQuery.graphql";
import { getTruncatedText } from "@/helpers";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default async function generateSiteMetadata(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: BasePageParams,
): Promise<Metadata> {
  const { data } = (await fetchQuery<Query>(query, {})) ?? {};

  const config = data?.globalConfiguration;

  const site = config?.site;

  const title = site?.installationName;

  const description = getTruncatedText(site?.installationHomePageCopy || "");

  const image = config?.logo?.original?.url
    ? {
        url: config.logo.original.url,
        alt: config.logoMetadata?.alt || "",
      }
    : null;

  const url = BASE_URL ? new URL(BASE_URL) : undefined;

  return {
    title: {
      default: title || "",
      template: `%s - ${title}`,
    },
    description,
    metadataBase: url,
    openGraph: {
      title,
      description,
      siteName: title,
      type: "website",
      locale: "en",
      url,
      ...(!!image?.url && {
        images: [
          {
            url: image.url ?? undefined,
            alt: image.alt ?? undefined,
          },
        ],
      }),
    },
  };
}

const query = graphql`
  query siteMetadataQuery {
    globalConfiguration {
      site {
        installationName
        installationHomePageCopy
      }
      logo {
        original {
          url
        }
      }
      logoMetadata {
        alt
      }
    }
  }
`;
