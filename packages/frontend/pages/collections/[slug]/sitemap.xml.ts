import {
  sitemapCollectionQuery,
  sitemapCollectionQueryResponse,
} from "@/relay/sitemapCollectionQuery.graphql";
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

function generateSiteMap(data: sitemapCollectionQueryResponse) {
  const pages = data?.collection?.pages?.nodes.map(({ slug, updatedAt }) => {
    return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/page/${slug}`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </url>
      `;
  });

  const orderings = data?.collection?.orderings?.nodes
    ?.filter(({ count }) => count > 0)
    .map(({ identifier, updatedAt }) => {
      return `
        <url>
          <loc>${`${EXTERNAL_DATA_URL}/browse/${identifier}`}</loc>
          <lastmod>${updatedAt}</lastmod>
        </url>
      `;
    });

  const collections = data?.collection?.collections?.nodes.map(
    ({ slug, updatedAt }) => {
      return `
      <sitemap>
        <loc>${`${EXTERNAL_DATA_URL}/collections/${slug}/sitemap.xml`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </sitemap>
    `;
    }
  );

  const items = data?.collection?.items?.nodes.map(({ slug, updatedAt }) => {
    return `
      <sitemap>
        <loc>${`${EXTERNAL_DATA_URL}/items/${slug}/sitemap.xml`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </sitemap>
    `;
  });

  const announcements = data?.collection?.announcements?.nodes.map(
    ({ slug, updatedAt }) => {
      return `
        <url>
            <loc>${`${EXTERNAL_DATA_URL}/announcements/${slug}`}</loc>
            <lastmod>${updatedAt}</lastmod>
        </url>
      `;
    }
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}/collections/${data?.collection?.slug}?${
    data?.collection?.schemaVersion?.identifier
  }</loc>
       <lastmod>${data?.collection?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/collections/${
    data?.collection?.slug
  }/search</loc>
     </url>
     ${pages?.join("")}
     ${orderings?.join("")}
     ${collections?.join("")}
     ${items?.join("")}
     ${announcements?.join("")}
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
  const data = await fetchQuery<sitemapCollectionQuery>(env, query, {
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
  query sitemapCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
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
      collections(perPage: 50) {
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
      announcements {
        nodes {
          slug
          updatedAt
        }
      }
      orderings(availability: ENABLED) {
        nodes {
          identifier
          count
          updatedAt
        }
      }
    }
  }
`;
