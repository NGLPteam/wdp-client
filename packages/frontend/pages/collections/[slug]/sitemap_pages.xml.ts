import { environment } from "@wdp/lib/app";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import { buildSiteMap, EXTERNAL_DATA_URL } from "helpers";
import {
  sitemapPagesCollectionQuery,
  sitemapPagesCollectionQueryResponse,
} from "@/relay/sitemapPagesCollectionQuery.graphql";

function generateSiteMap(data: sitemapPagesCollectionQueryResponse) {
  const slug = data?.collection?.slug;

  const pages = data?.collection?.pages?.nodes.map(({ slug, updatedAt }) => {
    return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/collection/${slug}/page/${slug}`}</loc>
        <lastmod>${updatedAt}</lastmod>
      </url>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}/collection/${slug}</loc>
       <lastmod>${data?.collection?.updatedAt}</lastmod>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/collection/${slug}/search</loc>
     </url>
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
  const data = await fetchQuery<sitemapPagesCollectionQuery>(env, query, {
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
  query sitemapPagesCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      slug
      updatedAt
      pages {
        nodes {
          slug
          updatedAt
        }
      }
    }
  }
`;
