import { graphql, readInlineData } from "relay-runtime";
import { getItemsSitemapFragment$key } from "@/relay/getItemsSitemapFragment.graphql";
import EXTERNAL_DATA_URL from "./externalDataUrl";

export default function getItemsSitemap(data: getItemsSitemapFragment$key) {
  const entity = readInlineData(fragment, data);

  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${entity.nodes
        .map(
          ({ slug, updatedAt }) => `
          <sitemap>
            <loc>${`${EXTERNAL_DATA_URL}/items/${slug}/sitemap.xml`}</loc>
            <lastmod>${updatedAt}</lastmod>
          </sitemap>
        `,
        )
        .join("")}
    </sitemapindex>
  `;
}

const fragment = graphql`
  fragment getItemsSitemapFragment on ItemConnection @inline {
    nodes {
      __typename
      slug
      updatedAt
    }
  }
`;
