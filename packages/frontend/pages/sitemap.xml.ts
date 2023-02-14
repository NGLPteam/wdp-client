import { environment } from "@wdp/lib/app";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";
import {
  sitemapQuery,
  sitemapQueryResponse,
} from "@/relay/sitemapQuery.graphql";
import { buildSiteMap, EXTERNAL_DATA_URL } from "helpers";

function generateSiteMap(data: sitemapQueryResponse) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <sitemap>
       <loc>${EXTERNAL_DATA_URL}/sitemap_pages.xml</loc>
     </sitemap>
     ${data?.communities?.nodes
       .map(({ slug }) => {
         return `
       <sitemap>
          <loc>${`${EXTERNAL_DATA_URL}/communities/${slug}/sitemap.xml`}</loc>
       </sitemap>
     `;
       })
       .join("")}
   </sitemapindex>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const env = environment();
  const data = await fetchQuery<sitemapQuery>(env, query, {}).toPromise();

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
  query sitemapQuery {
    communities {
      nodes {
        slug
      }
    }
  }
`;
