import { graphql, readInlineData } from "relay-runtime";
import { getCollectionsSitemapFragment$key } from "@/relay/getCollectionsSitemapFragment.graphql";
import EXTERNAL_DATA_URL from "./externalDataUrl";

export default function getCollectionsSitemap(
  data: getCollectionsSitemapFragment$key,
) {
  const entity = readInlineData(fragment, data);

  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${entity.nodes
        .map(
          ({ slug, updatedAt }) => `
          <sitemap>
            <loc>${`${EXTERNAL_DATA_URL}/collections/${slug}/sitemap.xml`}</loc>
            <lastmod>${updatedAt}</lastmod>
          </sitemap>
        `,
        )
        .join("")}
    </sitemapindex>
  `;
}

const fragment = graphql`
  fragment getCollectionsSitemapFragment on CollectionConnection @inline {
    nodes {
      __typename
      slug
      updatedAt
    }
  }
`;
