import {
  sitemapItemQuery,
  sitemapItemQueryResponse,
} from "@/relay/sitemapItemQuery.graphql";
import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";

const env = process.env.VERCEL_ENV || "development";

const EXTERNAL_DATA_URL = {
  production: process.env.NEXT_PUBLIC_FE_URL || process.env.VERCEL_URL,
  preview: process.env.VERCEL_URL,
  development: "http://localhost:3001",
}[env];

function generateSiteMap(data: sitemapItemQueryResponse) {
  const pages = data?.item?.pages?.nodes.map(({ slug, updatedAt }) => {
    return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/page/${slug}`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </url>
    `;
  });

  const items = data?.item?.items?.nodes.map(({ slug, updatedAt }) => {
    return `
      <sitemap>
        <loc>${`${EXTERNAL_DATA_URL}/items/${slug}/sitemap.xml`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </sitemap>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}/items/${data?.item?.slug}?${
    data?.item?.schemaVersion?.identifier
  }</loc>
       <lastmod>${data?.item?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/items/${data?.item?.slug}/contributors</loc>
       <lastmod>${data?.item?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/items/${data?.item?.slug}/files</loc>
       <lastmod>${data?.item?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/items/${data?.item?.slug}/metrics</loc>
       <lastmod>${data?.item?.updatedAt}</lastmod>
     </url>
     ${pages?.join("")}
     ${items?.join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({
  res,
  query: urlQuery,
}: GetServerSidePropsContext) {
  const slug = routeQueryArrayToString(urlQuery?.slug);

  const env = environment();
  // We make an API call to gather the URLs for our site
  const data = await fetchQuery<sitemapItemQuery>(env, query, {
    slug,
  }).toPromise();

  if (data) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  }

  return {
    props: {},
  };
}

export default SiteMap;

const query = graphql`
  query sitemapItemQuery($slug: Slug!) {
    item(slug: $slug) {
      slug
      updatedAt
      schemaVersion {
        identifier
      }
      items(perPage: 50) {
        nodes {
          slug
          updatedAt
        }
      }
      pages {
        nodes {
          slug
          updatedAt
        }
      }
    }
  }
`;
