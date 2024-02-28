import { buildEnvironment as environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import {
  sitemapPagesCommunityQuery,
  sitemapPagesCommunityQuery$data,
} from "@/relay/sitemapPagesCommunityQuery.graphql";
import { buildSiteMap, EXTERNAL_DATA_URL } from "helpers";

function generateSiteMap(data: sitemapPagesCommunityQuery$data) {
  const schemas = data?.community?.schemaRanks?.map(({ slug, kind }) => {
    return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/communities/${data?.community?.slug}/${
          kind === "COLLECTION" ? "collections" : "items"
        }/${slug}`}</loc>
      </url>
`;
  });

  const pages = data?.community?.pages?.nodes.map(({ slug, updatedAt }) => {
    return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/page/${slug}`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </url>
    `;
  });

  const slug = data?.community?.slug;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}/communities/${slug}</loc>
       <lastmod>${data?.community?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/communities/${slug}/search</loc>
     </url>
     ${schemas?.join("")}
     ${pages?.join("")}
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
  const data = await fetchQuery<sitemapPagesCommunityQuery>(env, query, {
    slug,
  }).toPromise();

  if (data) {
    const sitemap = generateSiteMap(data);
    buildSiteMap(res, sitemap);
  }

  return {
    props: {},
  };
}

export default SiteMap;

const query = graphql`
  query sitemapPagesCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      slug
      updatedAt
      schemaRanks {
        slug
        name
        count
        kind
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
