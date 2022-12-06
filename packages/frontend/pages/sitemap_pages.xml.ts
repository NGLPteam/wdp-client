import { environment } from "@wdp/lib/app";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import {
  sitemapPagesQuery,
  sitemapPagesQueryResponse,
} from "@/relay/sitemapPagesQuery.graphql";
import { buildSiteMap, EXTERNAL_DATA_URL } from "helpers";

function generateSiteMap(data: sitemapPagesQueryResponse) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/search</loc>
     </url>
     ${data?.communities?.nodes
       .map(({ slug }) => {
         return `
       <url>
          <loc>${`${EXTERNAL_DATA_URL}/communities/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const env = environment();
  const data = await fetchQuery<sitemapPagesQuery>(env, query, {}).toPromise();

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
  query sitemapPagesQuery {
    communities {
      nodes {
        slug
      }
    }
  }
`;
