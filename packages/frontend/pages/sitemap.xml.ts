import {
  sitemapQuery,
  sitemapQueryResponse,
} from "@/relay/sitemapQuery.graphql";
import { environment } from "@wdp/lib/app";
import { GetServerSidePropsContext } from "next";
import { fetchQuery, graphql } from "relay-runtime";

const env = process.env.VERCEL_ENV || "development";

const EXTERNAL_DATA_URL = {
  production: process.env.NEXT_PUBLIC_FE_URL || process.env.VERCEL_URL,
  preview: process.env.VERCEL_URL,
  development: "http://localhost:3001",
}[env];

function generateSiteMap(data: sitemapQueryResponse) {
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
       <sitemap>
          <loc>${`${EXTERNAL_DATA_URL}/communities/${slug}/sitemap.xml`}</loc>
       </sitemap>
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
  // We make an API call to gather the URLs for our site
  const data = await fetchQuery<sitemapQuery>(env, query, {}).toPromise();

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
  query sitemapQuery {
    communities {
      nodes {
        slug
      }
    }
  }
`;
